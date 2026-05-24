import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'Modelos', path: '/modelos' },
    { label: 'Contato', path: '/contato' }
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo Link */}
        <Link to="/" className="brand-logo-container">
          <img src="/logo.png" alt="PortáBelly Logo" className="brand-logo-img" />
          <div className="brand-names">
            <span className="brand-main-title">PortáBelly</span>
            <span className="brand-sub-title">Fábrica de Portas</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-navbar">
          {navItems.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.path} 
              className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp Call to Action */}
        <div className="header-cta-desktop">
          <a
            href="https://wa.me/5546991012844?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn-header"
          >
            <PhoneCall size={16} />
            <span>Contato Fábrica</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/5546991012844?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-whatsapp-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PhoneCall size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </nav>
      </div>

      <style>{`
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background-color: transparent;
          border-bottom: 1px solid transparent;
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .header-wrapper.scrolled {
          background-color: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          height: 70px;
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .brand-logo-container {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .brand-logo-img {
          height: 64px;
          width: auto;
          border-radius: var(--radius-sm);
          object-fit: contain;
          border: 1px solid rgba(81, 1, 1, 0.15);
          transition: var(--transition-smooth);
        }

        .header-wrapper.scrolled .brand-logo-img {
          height: 52px;
        }

        .brand-names {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .brand-main-title {
          font-family: var(--font-primary);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Responsive active logo branding text colors */
        .header-wrapper:not(.scrolled) .brand-main-title {
          color: var(--text-white);
        }

        .header-wrapper:not(.scrolled) .brand-sub-title {
          color: var(--text-light-muted);
        }

        .header-wrapper.scrolled .brand-main-title {
          color: var(--primary-dark);
        }

        .brand-sub-title {
          font-family: var(--font-secondary);
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .desktop-navbar {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-link-item {
          font-family: var(--font-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          letter-spacing: 0.03em;
          position: relative;
          padding: 0.5rem 0;
          transition: var(--transition-smooth);
        }

        /* Set white color for un-scrolled transparent view */
        .header-wrapper:not(.scrolled) .nav-link-item {
          color: rgba(255, 255, 255, 0.85);
        }

        .header-wrapper:not(.scrolled) .nav-link-item:hover,
        .header-wrapper:not(.scrolled) .nav-link-item.active {
          color: var(--accent-gold);
        }

        .header-wrapper.scrolled .nav-link-item {
          color: var(--text-main);
        }

        .header-wrapper.scrolled .nav-link-item:hover,
        .header-wrapper.scrolled .nav-link-item.active {
          color: var(--primary);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          transition: var(--transition-smooth);
        }

        .header-wrapper:not(.scrolled) .nav-link-item::after {
          background-color: var(--accent-gold);
        }

        .header-wrapper.scrolled .nav-link-item::after {
          background-color: var(--primary);
        }

        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          width: 100%;
        }

        .whatsapp-btn-header {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--primary);
          color: var(--text-white);
          padding: 0.65rem 1.35rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(81, 1, 1, 0.1);
          transition: var(--transition-smooth);
        }

        .header-wrapper:not(.scrolled) .whatsapp-btn-header {
          background-color: var(--accent-gold);
          color: var(--primary-dark);
          box-shadow: 0 4px 12px rgba(197, 160, 89, 0.2);
        }

        .header-wrapper:not(.scrolled) .whatsapp-btn-header:hover {
          background-color: var(--accent-gold-light);
          transform: translateY(-1px);
        }

        .whatsapp-btn-header:hover {
          background-color: var(--primary-light);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(81, 1, 1, 0.2);
        }

        .mobile-menu-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--primary-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .header-wrapper:not(.scrolled) .mobile-menu-toggle-btn {
          color: var(--text-white);
        }

        .mobile-menu-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100%;
          background-color: var(--bg-white);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem 2rem;
          box-shadow: var(--shadow-md);
          transform: translateY(-120%);
          transition: var(--transition-smooth);
          z-index: 999;
          opacity: 0;
          pointer-events: none;
        }

        .mobile-menu-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-navbar-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: left;
        }

        .mobile-nav-link {
          font-family: var(--font-secondary);
          font-weight: 600;
          font-size: 1.05rem;
          padding: 0.5rem 0;
          color: var(--text-main);
          border-bottom: 1px solid rgba(81, 1, 1, 0.04);
          transition: var(--transition-fast);
        }

        .mobile-nav-link.active {
          color: var(--primary);
          padding-left: 0.5rem;
          border-bottom-color: var(--primary);
        }

        .mobile-nav-link:hover {
          color: var(--primary);
          padding-left: 0.5rem;
        }

        .mobile-whatsapp-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background-color: var(--primary);
          color: var(--text-white);
          padding: 0.85rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          text-align: center;
          margin-top: 0.5rem;
        }

        @media (max-width: 900px) {
          .desktop-navbar, .header-cta-desktop {
            display: none;
          }
          
          .mobile-menu-toggle-btn {
            display: block;
          }
          
          .header-wrapper.scrolled {
            height: 64px;
          }
          
          .mobile-menu-drawer {
            top: 64px;
          }
        }
      `}</style>
    </header>
  );
}
