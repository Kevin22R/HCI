import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Cerrar menú móvil al hacer scroll
    if (window.scrollY > 0) {
      setIsMenuOpen(false);
    }
  }, []);

  const navItems = [
    { href: '#programacion', label: 'Programación', isRoute: false },
    { href: '#kits', label: 'Kits', isRoute: false },
    { href: '#carrera', label: 'Carrera 5K', isRoute: false },
    { href: '/help', label: 'Ayuda', isRoute: true },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-xl border-b border-line shadow-elevation-1'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-4" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl font-bold text-ink flex items-center gap-2 transition-all duration-300 hover:text-cobalt"
            onClick={closeMenu}
            aria-label="Uniautónoma Fest 2026 - Inicio"
          >
            <span className="relative">
              Uniautónoma Fest 2026
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cobalt transition-all duration-300 origin-left group-hover:w-full" />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              if (item.isRoute) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="btn-ghost relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth
                               before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-cobalt before:transition-all before:duration-300 before:origin-center
                               hover:before:w-full hover:before:left-0
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                    onClick={closeMenu}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="btn-ghost relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth
                             before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-cobalt before:transition-all before:duration-300 before:origin-center
                             hover:before:w-full hover:before:left-0
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl text-soft hover:text-ink hover:bg-night/5 transition-all duration-200
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-smooth ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Menú móvil"
        >
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item, index) => {
              if (item.isRoute) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className="btn-ghost w-full justify-start px-4 py-3 text-base font-medium transition-all duration-200
                               before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-6 before:bg-cobalt/10 before:rounded-r-full before:transition-all before:duration-300
                               hover:before:w-8
                               group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="btn-ghost w-full justify-start px-4 py-3 text-base font-medium transition-all duration-200
                             before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-6 before:bg-cobalt/10 before:rounded-r-full before:transition-all before:duration-300
                             hover:before:w-8
                             group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}