import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Sliders, 
  RotateCcw, 
  Sparkles, 
  Eye, 
  Check, 
  ChevronDown,
  Layers
} from 'lucide-react';

interface ThemeToggleProps {
  showBackdropControls?: boolean;
  className?: string;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  showBackdropControls = true,
  className = '',
  compact = false 
}) => {
  const { 
    theme, 
    isDark, 
    isHighContrastLight, 
    toggleTheme, 
    setTheme, 
    backdropFilterSettings, 
    updateBackdropFilter, 
    resetBackdropFilter,
    activeBackdropFilterString,
    presetBackdropFilter
  } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={menuRef}>
      {/* Primary Toggle Button */}
      <div className="flex items-center rounded-xl bg-slate-900 border border-slate-700/80 p-0.5 shadow-sm">
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isDark 
              ? 'text-amber-400 hover:text-amber-300 hover:bg-slate-800' 
              : 'text-blue-600 hover:text-blue-700 hover:bg-slate-200'
          }`}
          title={isDark ? 'Beralih ke Mode Terang Kontras Tinggi' : 'Beralih ke Mode Gelap'}
          aria-label={isDark ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <>
              <Moon className="w-3.5 h-3.5" />
              {!compact && <span className="hidden sm:inline font-mono text-[11px] text-slate-300">Gelap</span>}
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              {!compact && <span className="hidden sm:inline font-mono text-[11px] text-slate-900 font-bold">Kontras Tinggi</span>}
            </>
          )}
        </button>

        {showBackdropControls && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-1.5 rounded-lg text-xs transition-colors border-l border-slate-700/60 ${
              isMenuOpen 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            title="Kustomisasi Backdrop-Filter Glass Panel"
            aria-label="Kustomisasi Backdrop-Filter Glass Panel"
          >
            <Sliders className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Dropdown for Backdrop-Filter Settings */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 glass-panel rounded-2xl p-4 shadow-2xl z-50 border border-blue-500/40 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">
                Adaptasi Backdrop Filter
              </span>
            </div>
            <button
              onClick={resetBackdropFilter}
              className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 transition-colors"
              title="Reset ke default tema aktif"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Current Active Mode Indicator */}
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/70 mb-3.5 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Mode Aktif:</span>
              <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[10px] ${
                isDark 
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30' 
                  : 'bg-amber-500/10 text-amber-600 border border-amber-500/30'
              }`}>
                {isDark ? 'Dark Theme' : 'High-Contrast Light'}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono truncate" title={activeBackdropFilterString}>
              backdrop-filter: {activeBackdropFilterString};
            </div>
          </div>

          {/* Quick Filter Presets */}
          <div className="mb-3 space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Preset Backdrop Glass
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => presetBackdropFilter('default')}
                className="px-2 py-1 text-[11px] rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors text-left"
              >
                Standar ({isDark ? '16px' : '24px'})
              </button>
              <button
                onClick={() => presetBackdropFilter('high-contrast')}
                className="px-2 py-1 text-[11px] rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 font-medium transition-colors text-left"
              >
                Kontras Tinggi (28px)
              </button>
              <button
                onClick={() => presetBackdropFilter('subtle')}
                className="px-2 py-1 text-[11px] rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors text-left"
              >
                Lembut (12px)
              </button>
              <button
                onClick={() => presetBackdropFilter('maximum')}
                className="px-2 py-1 text-[11px] rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 font-medium transition-colors text-left"
              >
                Maksimal (32px)
              </button>
            </div>
          </div>

          {/* Fine-Tuning Sliders */}
          <div className="space-y-3 pt-2 border-t border-slate-700/60">
            {/* Blur Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-300 font-medium">Blur (Kabut Kaca):</span>
                <span className="font-mono text-cyan-400">{backdropFilterSettings.blur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="2"
                value={backdropFilterSettings.blur}
                onChange={(e) => updateBackdropFilter({ blur: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Saturation Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-300 font-medium">Saturasi Latar:</span>
                <span className="font-mono text-cyan-400">{backdropFilterSettings.saturate}%</span>
              </div>
              <input
                type="range"
                min="80"
                max="250"
                step="10"
                value={backdropFilterSettings.saturate}
                onChange={(e) => updateBackdropFilter({ saturate: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Contrast Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-300 font-medium">Kontras Kaca:</span>
                <span className="font-mono text-cyan-400">{backdropFilterSettings.contrast}%</span>
              </div>
              <input
                type="range"
                min="90"
                max="150"
                step="5"
                value={backdropFilterSettings.contrast}
                onChange={(e) => updateBackdropFilter({ contrast: Number(e.target.value) })}
                className="w-full h-1.5 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Mini Live Preview Badge */}
          <div className="mt-3 pt-2 text-[10px] text-slate-400 text-center font-mono">
            Semua elemen .glass-panel beradaptasi otomatis
          </div>
        </div>
      )}
    </div>
  );
};
