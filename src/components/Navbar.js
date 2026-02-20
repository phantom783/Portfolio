import React, { useEffect, useState } from 'react';

const navItems = [
  { href: '#hero', label: 'Home', tooltip: 'Go Home' },
  { href: '#about', label: 'About', tooltip: 'About Me' },
  { href: '#skills', label: 'Skills', tooltip: 'My Skills' },
  { href: '#projects', label: 'Project', tooltip: 'My Projects' },
  { href: '#contact', label: 'Contact', tooltip: 'Get In Touch' },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20.7 14.9A8.8 8.8 0 1 1 9.1 3.3a7.3 7.3 0 1 0 11.6 11.6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      }
    };

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const closeMenu = () => setOpen(false);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <nav className="site-navbar">
        <h1 className="site-logo">Tushar<span className="site-logo-accent">Bheda</span></h1>

        {/* Desktop Nav */}
        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.href} className="desktop-nav-item">
              <a href={item.href} className="nav-link" data-tooltip={item.tooltip}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`} aria-hidden={!open}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link"
            data-tooltip={item.tooltip}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
