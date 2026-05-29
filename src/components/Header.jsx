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
    { label: 'Contato', path: '/contato' }
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo Link */}
        <Link to="/" className="brand-logo-container">
          <img src="/images/logos/logo.png" alt="Portábelly Indústria de Portas" className="brand-logo-img" />
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
          background: rgba(255, 253, 250, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 4px solid #5a1228;
          border-bottom: 1px solid rgba(197, 160, 89, 0.12);
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 30px rgba(90, 18, 40, 0.03);
        }

        .header-wrapper.scrolled {
          background-color: rgba(255, 252, 249, 0.94);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          height: 96px;
          border-bottom: 1px solid rgba(197, 160, 89, 0.15);
          box-shadow: 0 10px 40px rgba(90, 18, 40, 0.07);
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
          transition: var(--transition-smooth);
        }

        .brand-logo-container:hover {
          transform: scale(1.02);
        }

        .brand-logo-img {
          height: 216px;
          width: auto;
          object-fit: contain;
          transition: var(--transition-smooth);
          filter: drop-shadow(0 2px 4px rgba(90, 18, 40, 0.05));
        }

        .header-wrapper.scrolled .brand-logo-img {
          height: 168px;
        }

        .desktop-navbar {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        /* Nav links - Luxury Gold leaf style */
        .nav-link-item {
          font-family: var(--font-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          color: #4a1020;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
          padding: 0.6rem 0;
          transition: var(--transition-smooth);
        }

        .nav-link-item:hover,
        .nav-link-item.active {
          color: #8c203b;
        }

        /* Floating luxury gold dot indicator instead of solid line */
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-gold-dark);
          transform: translateX(-50%) scale(0);
          transition: var(--transition-smooth);
          box-shadow: 0 0 8px var(--accent-gold);
          opacity: 0;
        }

        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }

        /* Luxury Embossed WhatsApp Call to Action */
        .whatsapp-btn-header {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #5a1228 0%, #3e0c1b 100%);
          border: 1px solid rgba(197, 160, 89, 0.3);
          color: var(--text-white);
          padding: 0.75rem 1.6rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(90, 18, 40, 0.15);
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        /* Ambient glowing pulse */
        .whatsapp-btn-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 80%);
          opacity: 0;
          transition: var(--transition-smooth);
        }

        /* Luxury sweeping shine effect */
        .whatsapp-btn-header::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 30%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shine 4.5s infinite ease-in-out;
        }

        .header-wrapper:not(.scrolled) .whatsapp-btn-header {
          background: linear-gradient(135deg, #FAF8F5 0%, #EDE7DC 100%);
          color: #5a1228;
          border: 1px solid rgba(90, 18, 40, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .whatsapp-btn-header:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(90, 18, 40, 0.25), 0 0 10px rgba(197, 160, 89, 0.2);
          border-color: rgba(197, 160, 89, 0.6);
        }

        .header-wrapper:not(.scrolled) .whatsapp-btn-header:hover {
          background: #5a1228;
          color: var(--text-white) !important;
          border-color: #5a1228;
          box-shadow: 0 8px 20px rgba(90, 18, 40, 0.2);
        }

        .whatsapp-btn-header:hover::before {
          opacity: 1;
        }

        @keyframes shine {
          0% {
            left: -70%;
          }
          15% {
            left: 120%;
          }
          100% {
            left: 120%;
          }
        }

        .mobile-menu-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: #5a1228;
          cursor: pointer;
          transition: var(--transition-fast);
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
