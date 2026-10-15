import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <a
          className="brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
        >
          <img
            src="/assets/favicon.svg"
            alt="Logo Jasa Temanggung"
            className="brand-logo-img"
            width={40}
            height={40}
          />
          <span>Jasa <strong>Temanggung</strong></span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label="Buka Menu Navigasi"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav id="primary-nav" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a
            href="/jasa"
            className={isActive('/jasa') && currentPath !== '/jasa/perizinan' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/jasa');
            }}
          >
            Semua Jasa
          </a>
          <a
            href="/jasa/perizinan"
            className={isActive('/jasa/perizinan') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/jasa/perizinan');
            }}
          >
            Jasa Perizinan
          </a>
          <a
            href="/artikel"
            className={isActive('/artikel') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/artikel');
            }}
          >
            Artikel
          </a>
          <a
            href="/blog"
            className={isActive('/blog') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/blog');
            }}
          >
            Blog
          </a>
          <a
            href="/bagaimana-caranya"
            className={isActive('/bagaimana-caranya') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/bagaimana-caranya');
            }}
          >
            Cara Kerja
          </a>
          <a
            href="/tentang"
            className={isActive('/tentang') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/tentang');
            }}
          >
            Tentang
          </a>
          <a
            href="/faq"
            className={isActive('/faq') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/faq');
            }}
          >
            FAQ
          </a>
          <a
            className="nav-cta"
            href="/kontak"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/kontak');
            }}
          >
            Konsultasi
          </a>
        </nav>
      </div>
    </header>
  );
};
