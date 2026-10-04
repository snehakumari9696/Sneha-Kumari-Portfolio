import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export type PageTransitionMode = 'split-reveal' | 'cascade-spring' | 'depth-zoom';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
  pageKey: string;
  transitionMode: PageTransitionMode;
  className?: string;
}

/**
 * ============================================================================
 * MULTI-PAGE MOTION SYSTEM: Custom Page Transition Physics & Variants
 * ============================================================================
 * 
 * 1. "Split & Reveal" (Home / Hero Page):
 *    - Unclips visual canvas from a center rectangular mask using CSS clip-path
 *    - Gentle expansion scale from 0.94 to 1.0 with an exponential ease curve
 * 
 * 2. "Cascade Spring" (Projects Page):
 *    - Staggered container orchestrating sequential children entrance
 *    - Spring-driven translation (Y: 45px -> 0px) with custom stiffness/damping
 * 
 * 3. "Depth Zoom" (Experience Page):
 *    - Perspective spatial zoom: scale(0.88) -> scale(1.0)
 *    - Blur-to-clear cinematic lens transition: filter: blur(12px) -> blur(0px)
 */

export const splitRevealVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.94,
    clipPath: 'inset(12% 10% 12% 10% round 24px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 0px)',
    transition: {
      duration: 0.85,
      // Custom quintic ease-out curve for cinematic editorial reveal
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    clipPath: 'inset(10% 8% 10% 8% round 20px)',
    transition: {
      duration: 0.45,
      ease: 'easeInOut',
    },
  },
};

export const cascadeSpringVariants: Variants = {
  initial: {
    opacity: 0,
    y: 45,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 240, // Spring tension
      damping: 24,    // Friction resistance
      mass: 0.9,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const depthZoomVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.88,
    filter: 'blur(12px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1], // Buttery smooth deceleration
    },
  },
  exit: {
    opacity: 0,
    scale: 1.08,
    filter: 'blur(8px)',
    transition: {
      duration: 0.35,
      ease: 'easeInOut',
    },
  },
};

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
  pageKey,
  transitionMode,
  className = '',
}) => {
  // Select matching variant based on transitionMode
  const getVariants = (): Variants => {
    switch (transitionMode) {
      case 'split-reveal':
        return splitRevealVariants;
      case 'cascade-spring':
        return cascadeSpringVariants;
      case 'depth-zoom':
        return depthZoomVariants;
      default:
        return splitRevealVariants;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        variants={getVariants()}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`w-full ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
