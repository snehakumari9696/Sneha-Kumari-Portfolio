import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  floatDelay?: number; // Idle float staggered delay in seconds
  floatRange?: number; // Idle float vertical travel distance in pixels (default: 6px)
  tiltIntensity?: number; // Tilt multiplier (default: 15)
}

/**
 * TiltCard: 3D Mouse Tilt + Staggered Idle Float
 * 
 * Motion Physics Architecture:
 * 1. Cursor relative offset (x, y) normalized between -0.5 and +0.5
 * 2. Spring smoothing (stiffness: 400, damping: 30) prevents jerky snapping
 * 3. Rotations mapped:
 *    - rotateX: Y displacement -> -tiltIntensity to +tiltIntensity deg
 *    - rotateY: X displacement -> -tiltIntensity to +tiltIntensity deg
 * 4. Idle Float: Continuous sine-like translation [-floatRange, floatRange]
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  floatDelay = 0,
  floatRange = 6,
  tiltIntensity = 15,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Normalized cursor coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery-smooth mouse follow
  // Fine-tuning tip: Higher stiffness = more snappy; Higher damping = less oscillation
  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 25 });

  // Map normalized mouse position to 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor relative offset (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Return smoothly to flat resting position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000, // Provides 3D depth context for rotation
      }}
      // Continuous Idle Float Motion
      animate={{
        y: [-floatRange, floatRange],
      }}
      transition={{
        y: {
          duration: 3.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: floatDelay,
        },
      }}
      className="will-change-transform"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
