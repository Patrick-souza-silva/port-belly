import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Visual Overlay Grid */}
      <div className="hero-grid-overlay"></div>
      
      {/* Decorative Gold Light Aura */}
      <div className="hero-gold-glow"></div>

      <div className="container hero-container">
        <div className="hero-content-wrapper animate-fade-in-up">
          {/* Subtle Tagline Badge */}
          <div className="hero-badge">
            <span>55+ Anos de Excelência em Renascença - PR</span>
          </div>

          {/* Main Titles */}
          <h1 className="hero-main-title">
            O Encontro do <span className="hero-title-accent">Design Premium</span> Com a Força da Madeira
          </h1>

          <p className="hero-description">
            A antiga <strong>Portas Alvorada</strong> agora é <strong>PortáBelly</strong>. Uma nova marca, com a mesma tradição de qualidade inabalável e inovação constante. Fabricamos as portas que dão vida, segurança e sofisticação aos seus projetos.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions-container">
            <a href="#produtos" className="btn-primary hero-btn-main">
              <span>Conhecer Nossos Produtos</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contato" className="btn-secondary hero-btn-sub">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          width: 100%;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1e0202 0%, #350101 40%, #150000 100%);
          color: var(--text-white);
          padding-top: calc(var(--header-height) + 2rem);
          padding-bottom: 6rem;
          overflow: hidden;
          border-bottom: 1px solid rgba(197, 160, 89, 0.15);
        }

        /* Ambient Factory Image Background with Dark Overlay */
        .hero-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(30, 2, 2, 0.90), rgba(21, 0, 0, 0.95)), url('/images/solid-wood-door.png');
          background-size: cover;
          background-position: center;
          opacity: 0.65;
          z-index: 1;
        }

        .hero-gold-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, rgba(197, 160, 89, 0) 70%);
          top: -100px;
          right: -100px;
          z-index: 2;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .hero-content-wrapper {
          max-width: 820px;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(197, 160, 89, 0.12);
          border: 1px solid rgba(197, 160, 89, 0.25);
          color: var(--accent-gold-light);
          padding: 0.45rem 1.15rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-main-title {
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          font-weight: 900;
          color: var(--text-white);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          text-transform: capitalize;
        }

        .hero-title-accent {
          color: var(--accent-gold);
          background: linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--text-light-muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }

        .hero-description strong {
          color: var(--text-white);
          font-weight: 600;
        }

        .hero-actions-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .hero-btn-main {
          box-shadow: 0 4px 15px rgba(81, 1, 1, 0.3);
        }

        .hero-btn-sub {
          border-color: rgba(255, 255, 255, 0.3);
          color: var(--text-white);
          background-color: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
        }

        .hero-btn-sub:hover {
          border-color: var(--accent-gold);
          background-color: var(--accent-gold);
          color: var(--primary-dark);
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 85vh;
            padding-bottom: 4rem;
          }
          
          .hero-content-wrapper {
            text-align: center;
          }
          
          .hero-badge {
            margin-bottom: 1.5rem;
          }
          
          .hero-actions-container {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}section>
  );
}
