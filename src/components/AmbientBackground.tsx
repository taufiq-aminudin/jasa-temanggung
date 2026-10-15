import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AmbientBackground: React.FC = () => {
  const { isDark } = useTheme();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle or direct update
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="absolute rounded-full transition-opacity duration-500 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: isDark
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(147, 51, 234, 0.04) 40%, transparent 70%)',
          opacity: mousePos.x > 0 ? 1 : 0,
        }}
      />

      {/* Floating Aurora Orb 1: Electric Blue / Cyan */}
      <div 
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-aurora-1"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)',
        }}
      />

      {/* Floating Aurora Orb 2: Neon Purple / Fuchsia */}
      <div 
        className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full blur-[130px] animate-aurora-2"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.14) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 70%)',
        }}
      />

      {/* Floating Aurora Orb 3: Cyber Emerald / Teal */}
      <div 
        className="absolute bottom-1/4 -left-28 w-[480px] h-[480px] rounded-full blur-[110px] animate-aurora-3"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(13, 148, 136, 0.05) 50%, transparent 70%)',
        }}
      />

      {/* Floating Aurora Orb 4: Warm Sunset Gold / Coral at the bottom */}
      <div 
        className="absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full blur-[130px] animate-aurora-1"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(244, 63, 94, 0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(225, 29, 72, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Subtle Micro-particle stars / sparkle grid */}
      <div className="absolute inset-0 mesh-grid opacity-60" />
    </div>
  );
};
