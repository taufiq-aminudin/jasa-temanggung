import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';

export type Theme = 'dark' | 'light';

export interface BackdropFilterSettings {
  blur: number; // Blur radius in pixels
  saturate: number; // Saturation percentage (e.g. 100% or 190%)
  contrast: number; // Contrast percentage (e.g. 100% or 115%)
}

export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  isHighContrastLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  backdropFilterSettings: BackdropFilterSettings;
  updateBackdropFilter: (settings: Partial<BackdropFilterSettings>) => void;
  resetBackdropFilter: () => void;
  activeBackdropFilterString: string;
  presetBackdropFilter: (preset: 'default' | 'high-contrast' | 'subtle' | 'maximum') => void;
}

const THEME_STORAGE_KEY = 'futech_theme_preference';
const BACKDROP_STORAGE_KEY = 'futech_backdrop_settings';

// Optimized default values for dark and high-contrast light mode
export const DARK_BACKDROP_DEFAULTS: BackdropFilterSettings = {
  blur: 16,
  saturate: 100,
  contrast: 100,
};

export const LIGHT_BACKDROP_DEFAULTS: BackdropFilterSettings = {
  blur: 24,
  saturate: 190,
  contrast: 115,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Determine initial theme with localStorage fallback or system preference
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return 'dark'; // FUTech defaults to dark tech theme
  });

  // Backdrop filter settings
  const [backdropSettings, setBackdropSettings] = useState<BackdropFilterSettings>(() => {
    try {
      const saved = localStorage.getItem(BACKDROP_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore storage errors
    }
    return theme === 'light' ? LIGHT_BACKDROP_DEFAULTS : DARK_BACKDROP_DEFAULTS;
  });

  const isDark = theme === 'dark';
  const isHighContrastLight = theme === 'light';

  // Apply backdrop filter CSS variable calculations
  const activeBackdropFilterString = useMemo(() => {
    const { blur, saturate, contrast } = backdropSettings;
    return `blur(${blur}px) saturate(${saturate}%) contrast(${contrast}%)`;
  }, [backdropSettings]);

  // Synchronize theme changes to document root and meta tags
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.setAttribute('data-high-contrast', 'true');
      root.style.colorScheme = 'light';
      
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', '#f8fafc');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.setAttribute('data-high-contrast', 'false');
      root.style.colorScheme = 'dark';

      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', '#0b1120');
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore storage write errors
    }
  }, [theme]);

  // Update backdrop-filter CSS variables whenever settings or theme change
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--glass-backdrop-blur', `${backdropSettings.blur}px`);
    root.style.setProperty('--glass-backdrop-saturate', `${backdropSettings.saturate}%`);
    root.style.setProperty('--glass-backdrop-contrast', `${backdropSettings.contrast}%`);
    root.style.setProperty('--glass-backdrop', activeBackdropFilterString);

    try {
      localStorage.setItem(BACKDROP_STORAGE_KEY, JSON.stringify(backdropSettings));
    } catch {
      // ignore
    }
  }, [backdropSettings, activeBackdropFilterString]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    // When switching theme, adapt backdrop-filter settings to match optimal contrast for that mode
    if (newTheme === 'light') {
      setBackdropSettings(LIGHT_BACKDROP_DEFAULTS);
    } else {
      setBackdropSettings(DARK_BACKDROP_DEFAULTS);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const updateBackdropFilter = (settings: Partial<BackdropFilterSettings>) => {
    setBackdropSettings(prev => ({
      ...prev,
      ...settings,
    }));
  };

  const resetBackdropFilter = () => {
    setBackdropSettings(theme === 'light' ? LIGHT_BACKDROP_DEFAULTS : DARK_BACKDROP_DEFAULTS);
  };

  const presetBackdropFilter = (preset: 'default' | 'high-contrast' | 'subtle' | 'maximum') => {
    switch (preset) {
      case 'high-contrast':
        setBackdropSettings({ blur: 28, saturate: 210, contrast: 125 });
        break;
      case 'maximum':
        setBackdropSettings({ blur: 32, saturate: 240, contrast: 130 });
        break;
      case 'subtle':
        setBackdropSettings({ blur: 12, saturate: 110, contrast: 105 });
        break;
      case 'default':
      default:
        resetBackdropFilter();
        break;
    }
  };

  const contextValue: ThemeContextType = {
    theme,
    isDark,
    isHighContrastLight,
    toggleTheme,
    setTheme,
    backdropFilterSettings: backdropSettings,
    updateBackdropFilter,
    resetBackdropFilter,
    activeBackdropFilterString,
    presetBackdropFilter,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
