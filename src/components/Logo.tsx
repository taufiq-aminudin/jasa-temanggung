import React from 'react';

export interface LogoProps {
  /**
   * 'full': Icon mark + FUTech typography + INDONESIA badge + Subtitle
   * 'compact': Icon mark + FUTech typography + subtle badge
   * 'mark': Standalone icon mark
   * 'horizontal': Icon mark + FUTech typography inline
   */
  variant?: 'full' | 'compact' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
  withGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showSubtitle = true,
  withGlow = true,
}) => {
  // Dimensions mapping
  const markDimensions = {
    sm: { box: 32, rx: 8, stroke: 1.2 },
    md: { box: 40, rx: 11, stroke: 1.5 },
    lg: { box: 48, rx: 13, stroke: 1.8 },
    xl: { box: 64, rx: 16, stroke: 2 },
  }[size];

  // Standalone Icon Mark SVG
  const Logomark = (
    <div 
      className={`relative shrink-0 select-none transition-transform duration-300 group-hover:scale-105`}
      style={{ width: markDimensions.box, height: markDimensions.box }}
    >
      {/* Outer ambient glow */}
      {withGlow && (
        <div 
          className="absolute inset-0 bg-blue-500/25 rounded-2xl blur-md -z-10 transition-opacity duration-300 group-hover:opacity-100 opacity-70 pointer-events-none" 
        />
      )}

      <svg
        viewBox="0 0 64 64"
        width={markDimensions.box}
        height={markDimensions.box}
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(37,99,235,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="logo-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="logo-accent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="logo-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.8} />
            <stop offset="50%" stopColor="#2563eb" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#1e293b" stopOpacity={0.8} />
          </linearGradient>
        </defs>

        {/* Squircle Housing with Beveled Tech Border */}
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="16"
          fill="url(#logo-bg-grad)"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="16"
          fill="none"
          stroke="url(#logo-border-grad)"
          strokeWidth="1.5"
        />

        {/* Micro Tech Grid Lines */}
        <line x1="10" y1="32" x2="54" y2="32" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />
        <line x1="32" y1="10" x2="32" y2="54" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />

        {/* Ambient Center Glow */}
        <circle cx="32" cy="30" r="18" fill="#2563eb" opacity="0.22" filter="blur(4px)" />

        {/* Futuristic F - Vertical Pillar with Rounded Corners */}
        <path
          d="M17 16c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v32c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V16z"
          fill="url(#logo-blue-grad)"
        />

        {/* Top Growth Wing */}
        <path
          d="M26 14h18.5c1.4 0 2.5 1.1 2.5 2.5v4c0 1.4-1.1 2.5-2.5 2.5H26V14z"
          fill="url(#logo-blue-grad)"
        />

        {/* Middle Cyan/Emerald Accelerator Wing */}
        <path
          d="M26 27h13c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2H26V27z"
          fill="url(#logo-accent-grad)"
        />

        {/* Dynamic Forward Chevron & Precision Tech Dot */}
        <polygon points="46,14 52,14 48,22 42,22" fill="#38bdf8" />
        <circle cx="50" cy="12" r="2.5" fill="#10b981" />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{Logomark}</div>;
  }

  // Text Sizes
  const titleSizeClass = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  const subSizeClass = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {Logomark}

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          {/* Main Brand Wordmark */}
          <span className={`${titleSizeClass} font-black text-slate-900 dark:text-white tracking-tight flex items-center`}>
            FU<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Tech</span>
          </span>

          {/* Regional Indonesia Badge */}
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono font-bold tracking-wider text-[9px] uppercase shadow-[0_0_8px_rgba(59,130,246,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ID</span>
          </div>
        </div>

        {/* Subtitle / Department description */}
        {showSubtitle && variant !== 'compact' && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`${subSizeClass} text-slate-600 dark:text-slate-400 font-mono tracking-wider uppercase font-medium`}>
              Performance &amp; Growth
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
