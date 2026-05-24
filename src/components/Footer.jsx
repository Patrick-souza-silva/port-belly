import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Camera, Globe } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-area">
      <div className="container">
        
        {/* Footer Top Grid */}
        <div className="footer-grid">
          
          {/* Logo & Description */}
          <div className="footer-col brand-col">
            <div className="footer-logo-box">
              <img src="/logo.png" alt="PortáBelly Logo" className="footer-logo-img" />
              <div className="footer-logo-names">
                <span className="footer-logo-main">PortáBelly</span>
                <span className="footer-logo-sub">Fábrica de Portas</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Mais de 55 anos de experiência transformando a nobreza da madeira em esquadrias de alta costura arquitetônica. Projetadas no Paraná, entregues em todo o Brasil.
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Siga-nos no Instagram">
                <Camera size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Curta no Facebook">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navegação</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/modelos">Modelos & Coleções</Link></li>
              <li><Link to="/contato">Contato Fábrica</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Nossos Produtos</h4>
            <ul className="footer-links-list">
              <li><Link to="/produtos#laminada">Linha Belíssima Laminada</Link></li>
              <li><Link to="/produtos#macica">Linha Belíssima Maciça</Link></li>
              <li><Link to="/produtos#kit">Kit Porta Pronta</Link></li>
              <li><Link to="/produtos#acabamentos">Rodapés & Acabamentos</Link></li>
              <li><Link to="/produtos">Projetos Especiais</Link></li>
            </ul>
          </div>

          {/* Factory Info Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Fábrica PortáBelly</h4>
            <p className="footer-info-text">
              Rua Marechal Hermes da Fonseca, 173<br />
              Bairro Industrial, Renascença - PR<br />
              CEP: 85610-000
            </p>
            <p className="footer-info-phone">
              <a href="tel:+554635501184" className="footer-phone-link">
                (46) 3550-1184
              </a>
            </p>
            <p className="footer-info-email">
              <a href="mailto:comercial@portabelly.com.br" className="footer-email-link">
                comercial@portabelly.com.br
              </a>
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copy-text">
              © {new Date().getFullYear()} PortáBelly (Móveis e Esquadrias Alvorada Ltda). Todos os direitos reservados.
            </p>
            <p className="footer-credits-text">
              Desenvolvido com sofisticação e precisão técnica.
            </p>
          </div>

          {/* Scroll to top button */}
          <button 
            onClick={handleScrollTop} 
            className="scroll-top-btn"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-area {
          background-color: var(--bg-dark);
          color: var(--text-light-muted);
          padding: 6rem 0 3rem;
          border-top: 2px solid var(--primary-light);
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
          gap: 3.5rem;
          margin-bottom: 5rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        /* Logo Area */
        .footer-logo-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-logo-img {
          height: 64px;
          border-radius: var(--radius-sm);
          object-fit: contain;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background-color: var(--bg-white);
        }

        .footer-logo-names {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .footer-logo-main {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-white);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .footer-logo-sub {
          font-family: var(--font-secondary);
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--accent-gold);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #a39c9c;
        }

        .footer-social-links {
          display: flex;
          gap: 0.85rem;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-white);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: var(--transition-smooth);
        }

        .social-icon-btn:hover {
          background-color: var(--accent-gold);
          color: var(--primary-dark);
          transform: translateY(-2px);
          border-color: var(--accent-gold);
        }

        /* Nav lists */
        .footer-col-title {
          font-family: var(--font-secondary);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-white);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 2px solid rgba(197, 160, 89, 0.15);
          padding-bottom: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-links-list a {
          font-size: 0.9rem;
          color: #a39c9c;
        }

        .footer-links-list a:hover {
          color: var(--accent-gold);
          padding-left: 0.35rem;
        }

        /* Details info */
        .footer-info-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #a39c9c;
        }

        .footer-info-phone,
        .footer-info-email {
          margin-top: 0.25rem;
        }

        .footer-phone-link,
        .footer-email-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-white);
        }

        .footer-phone-link:hover,
        .footer-email-link:hover {
          color: var(--accent-gold);
          text-decoration: underline;
        }

        /* Bottom segment */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #7c7676;
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          text-align: left;
        }

        .scroll-top-btn {
          background-color: var(--accent-gold);
          color: var(--primary-dark);
          border: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .scroll-top-btn:hover {
          background-color: var(--accent-gold-light);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(197, 160, 89, 0.3);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-bottom-content {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
