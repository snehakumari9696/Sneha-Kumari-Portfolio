import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if target has interactive data attributes
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('a, button, [data-cursor]');
      if (interactiveEl) {
        setHovered(true);
        const text = interactiveEl.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth spring-like lerp for the trailing ring
  useEffect(() => {
    let animId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(updateTrailing);
    };
    animId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <aside aria-hidden="true" className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Tiny leading precision dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-[#A67F54] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: hovered && cursorText ? 0 : 0.85,
        }}
      />

      {/* Trailing expanding ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 flex items-center justify-center ${
          hovered
            ? cursorText
              ? 'w-16 h-16 bg-[#3C2317] border-[#A67F54] text-[#F5F2EB] shadow-lg scale-100'
              : 'w-10 h-10 border-[#A67F54] bg-[#A67F54]/10 scale-110'
            : 'w-7 h-7 border-[#A67F54]/40 scale-100'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] tracking-wider uppercase font-bold select-none animate-in fade-in zoom-in-75 duration-200">
            {cursorText}
          </span>
        )}
      </div>
    </aside>
  );
};
