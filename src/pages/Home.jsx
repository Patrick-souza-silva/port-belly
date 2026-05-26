import React from 'react';
import { ArrowRight, Award, TreePine, ShieldCheck, Download, Mail, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';

export default function Home() {
  const brandPillars = [
    {
      icon: <Award className="pillar-icon" size={28} />,
      title: "Tradição Secular",
      description: "Fundada em 1968 em Renascença - PR, unimos gerações de know-how na manipulação nobre de madeiras de alta qualidade."
    },
    {
      icon: <TreePine className="pillar-icon" size={28} />,
      title: "100% Sustentável",
      description: "Madeira originada de reflorestamento e manejo ecológico controlado com certificação ambiental rigorosa."
    },
    {
      icon: <ShieldCheck className="pillar-icon" size={28} />,
      title: "Qualidade PortáBelly",
      description: "Secagem industrial controlada e montagem milimétrica que evitam empenamentos e asseguram estabilidade duradoura."
    }
  ];

  const highlightedProducts = [
    {
      title: "Kit BellyPlac",
      desc: "Kit completo com folha HDF 3mm, batente e guarnição 100% HDF Ultra. Alta resistência à umidade, não amarela com o tempo.",
      image: "/images/linhas/novos-modelos/BellyPlac-Branca.png"
    },
    {
      title: "Portas Frisadas",
      desc: "Frisadas Curupixá com quadro em Pinus e chapa HDF. Pintura UV BELLYPLAC. Uso interno, múltiplas larguras disponíveis.",
      image: "/images/linhas/novos-modelos/PortaFrisada-VR100.jpg"
    },
    {
      title: "Porta Lisa (Verniz)",
      desc: "Lisa classe para verniz com capa de Curupixá, Tauari ou Ipê. Quadro em Pinus, contra-capa HDF e reforço para fechadura.",
      image: "/images/linhas/novos-modelos/PortaCurupixa-class1.jpg"
    }
  ];

  return (
    <div className="page-home">
      {/* Visual Hero Block */}
      <section className="home-hero">
        <div className="home-hero-overlay"></div>
        <div className="home-hero-glow"></div>
        <div className="container home-hero-container">
          <div className="home-hero-content animate-fade-in-up">
            <div className="home-hero-badge">
              <span>Portábelly de portas abertas para o futuro</span>
            </div>
            <h1 className="home-hero-title">
              Portas ALVORADA e Portábelly <span className="title-accent">uniram-se</span>
            </h1>
            <p className="home-hero-desc hero-accent-lead">
              e, agora estão mais fortes e preparadas para oferecer o que há de melhor na linha de portas internas.
            </p>
            <div className="hero-quote-box">
              <p className="hero-quote-text">
                Juntando solidez e experiência de 58 anos de uma, mais a qualidade e sofisticação da outra, formaram uma das maiores e mais experientes indústria no ramo.
              </p>
            </div>
            <div className="home-hero-actions">
              <Link to="/produtos" className="btn-primary">
                <span>Ver Nossos Produtos</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contato" className="btn-secondary-light">
                Fazer Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="home-pillars">
        <div className="container">
          <div className="home-section-header reveal reveal-fade-in-up">
            <span className="home-section-tag">DIFERENCIAIS</span>
            <h2 className="home-section-title">Por Que Escolher a PortáBelly?</h2>
            <div className="section-bar"></div>
          </div>

          <div className="pillars-grid">
            {brandPillars.map((pillar, idx) => (
              <div className={`pillar-card reveal reveal-fade-in-up delay-${(idx + 1) * 100}`} key={idx}>
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-transition-teaser">
        <div className="container teaser-container">
          <div className="teaser-graphics reveal reveal-fade-in-left">
            <div className="teaser-frame">
              <img src="/images/logos/logo.png" alt="Logo Portábelly" className="teaser-img" style={{objectFit: 'contain', background: '#faf8f5', padding: '2rem'}} />
              <div className="teaser-badge">
                <span className="teaser-badge-num">58+</span>
                <span className="teaser-badge-label">Anos de Tradição</span>
              </div>
            </div>
          </div>
          <div className="teaser-content reveal reveal-fade-in-right">
            <span className="teaser-tag">NOSSA HISTÓRIA</span>
            <h2 className="teaser-title">Portábelly Indústria de Portas vem renovada</h2>
            <p className="teaser-text">
              Com sucesso consolidado e, principalmente, mantém a origem e princípios familiar.
            </p>
            <p className="teaser-text">
              Seja você também um parceiro dessa união de sucesso. Renovação e parceria será nossa maior força para continuarmos crescendo juntos.
            </p>
            <Link to="/sobre" className="teaser-link-btn">
              <span>Conhecer Nossa História</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="home-products-teaser">
        <div className="container">
          <div className="home-section-header reveal reveal-fade-in-up">
            <span className="home-section-tag">SOFISTICAÇÃO</span>
            <h2 className="home-section-title">Linhas Desenvolvidas Para Surpreender</h2>
            <div className="section-bar"></div>
            <p className="home-section-lead">
              A elegância intemporal das portas de madeira sob medida para a sua arquitetura.
            </p>
          </div>

          <div className="teaser-products-grid">
            {highlightedProducts.map((prod, idx) => (
              <div className={`teaser-product-card reveal reveal-scale-up delay-${(idx + 1) * 100}`} key={idx}>
                <div className="teaser-product-img-wrapper">
                  <img src={prod.image} alt={prod.title} className="teaser-product-img" />
                </div>
                <div className="teaser-product-body">
                  <h3 className="teaser-product-card-title">{prod.title}</h3>
                  <p className="teaser-product-card-desc">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="teaser-products-action reveal reveal-fade-in-up delay-200">
            <Link to="/produtos" className="btn-primary">
              Ver Todos os Nossos Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Catalog & Quick Contact CTA Bar */}
      <section className="home-cta-banner">
        <div className="container cta-container">
          <div className="cta-content reveal reveal-scale-up">
            <h2>Pronto Para dar Vida ao Seu Espaço?</h2>
            <p>Faça o download do nosso catálogo técnico completo ou converse diretamente com a nossa equipe de suporte comercial da fábrica.</p>
            <div className="cta-buttons-wrapper">
              <a 
                href="/catalogo-portabelly.pdf" 
                download="Catalogo-Portabelly.pdf" 
                className="cta-btn-gold"
              >
                <Download size={18} />
                <span>Baixar Catálogo Técnico</span>
              </a>
              <Link to="/contato" className="cta-btn-outline">
                <Mail size={18} />
                <span>Solicitar Orçamento</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .home-hero {
          position: relative;
          min-height: 85vh;
          width: 100%;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1e0202 0%, #350101 40%, #150000 100%);
          color: var(--text-white);
          padding-top: calc(var(--header-height) + 3rem);
          padding-bottom: 6rem;
          overflow: hidden;
          border-bottom: 1px solid rgba(197, 160, 89, 0.15);
        }

        .home-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(30, 2, 2, 0.88), rgba(21, 0, 0, 0.94)), url('/images/solid-wood-door.png');
          background-size: cover;
          background-position: center;
          opacity: 0.65;
          z-index: 1;
        }

        .home-hero-glow {
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

        .home-hero-container {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .home-hero-content {
          max-width: 820px;
          text-align: left;
        }

        .home-hero-badge {
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

        .home-hero-title {
          font-size: clamp(2.3rem, 5.5vw, 4.25rem);
          font-weight: 900;
          color: var(--text-white);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .home-hero-title .title-accent {
          color: var(--accent-gold);
          background: linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-accent-lead {
          font-size: clamp(1.15rem, 2.2vw, 1.4rem);
          font-weight: 600;
          color: var(--accent-gold-light);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-family: var(--font-secondary);
          letter-spacing: 0.02em;
        }

        .hero-quote-box {
          border-left: 3px solid var(--accent-gold);
          padding-left: 1.75rem;
          margin-top: 1.5rem;
          margin-bottom: 3.25rem;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(5px);
          padding-top: 0.85rem;
          padding-bottom: 0.85rem;
          padding-right: 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .hero-quote-text {
          font-size: clamp(0.92rem, 1.8vw, 1.05rem);
          color: var(--text-light-muted);
          line-height: 1.7;
          font-style: italic;
          margin: 0 !important;
        }

        .home-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .btn-secondary-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.03);
          color: var(--text-white);
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 0.8rem 2rem;
          font-family: var(--font-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
          backdrop-filter: blur(8px);
        }

        .btn-secondary-light:hover {
          border-color: var(--accent-gold);
          background-color: var(--accent-gold);
          color: var(--primary-dark);
          transform: translateY(-2px);
        }

        /* Wave styles removed */

        /* Section Headers */
        .home-section-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 5rem;
        }

        .home-section-tag {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .home-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .section-bar {
          width: 80px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 1.5rem auto;
        }

        .home-section-lead {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Pillars block */
        .home-pillars {
          padding: 8rem 0;
          background-color: var(--bg-light);
          overflow: hidden;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .pillar-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          padding: 3rem 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: var(--transition-smooth);
        }

        .pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(197, 160, 89, 0.4);
        }

        .pillar-icon-box {
          width: 60px;
          height: 60px;
          background-color: rgba(81, 1, 1, 0.05);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          border: 1px solid rgba(81, 1, 1, 0.08);
          transition: var(--transition-smooth);
        }

        .pillar-card:hover .pillar-icon-box {
          background-color: var(--primary);
          color: var(--text-white);
          transform: scale(1.05);
        }

        .pillar-card-title {
          font-family: var(--font-secondary);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .pillar-card-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Teaser Brand Transition / History Section */
        .home-transition-teaser {
          padding: 8rem 0;
          background-color: var(--bg-white);
          overflow: hidden;
        }

        .teaser-container {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 5rem;
          align-items: center;
        }

        .teaser-graphics {
          position: relative;
        }

        .teaser-frame {
          position: relative;
          width: 90%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .teaser-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--radius-lg);
          object-fit: cover;
          border: 1px solid var(--border-light);
        }

        .teaser-badge {
          position: absolute;
          bottom: -25px;
          right: -25px;
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          color: var(--text-white);
          padding: 1.75rem 1.25rem;
          border-radius: var(--radius-md);
          box-shadow: 0 15px 35px rgba(81, 1, 1, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 150px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .teaser-badge-num {
          font-size: 2.2rem;
          font-weight: 900;
          font-family: var(--font-secondary);
          color: var(--accent-gold);
          line-height: 1;
          margin-bottom: 0.2rem;
        }

        .teaser-badge-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.3;
        }

        .teaser-content {
          text-align: left;
        }

        .teaser-tag {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .teaser-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 2rem;
          line-height: 1.25;
        }

        .teaser-text {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .teaser-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.95rem;
          border-bottom: 2px solid var(--primary);
          padding-bottom: 0.25rem;
          margin-top: 1.5rem;
          transition: var(--transition-fast);
        }

        .teaser-link-btn:hover {
          color: var(--primary-light);
          border-color: var(--primary-light);
          padding-left: 0.35rem;
        }

        /* Products teaser */
        .home-products-teaser {
          padding: 8rem 0;
          background-color: var(--bg-light);
          overflow: hidden;
        }

        .teaser-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .teaser-product-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }

        .teaser-product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(197, 160, 89, 0.3);
        }

        .teaser-product-img-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(160deg, #f5f2ee 0%, #ede8e0 50%, #e8e2d8 100%);
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .teaser-product-img {
          max-width: 75%;
          max-height: 250px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          transition: var(--transition-smooth);
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.18));
        }

        .teaser-product-card:hover .teaser-product-img {
          transform: scale(1.06) translateY(-4px);
          filter: drop-shadow(0 16px 32px rgba(0,0,0,0.22));
        }

        .teaser-product-body {
          padding: 2rem;
          text-align: left;
        }

        .teaser-product-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.75rem;
        }

        .teaser-product-card-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .teaser-products-action {
          text-align: center;
        }

        /* CTA Banner Section */
        .home-cta-banner {
          padding: 7rem 0;
          background: linear-gradient(135deg, #2b0101 0%, #150000 100%);
          color: var(--text-white);
          position: relative;
          border-top: 1px solid rgba(197, 160, 89, 0.2);
          overflow: hidden;
        }

        .home-cta-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, transparent 80%);
          z-index: 1;
        }

        .cta-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .cta-content {
          max-width: 750px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 850;
          color: var(--text-white);
          margin-bottom: 1.25rem;
        }

        .cta-content p {
          font-size: 1.05rem;
          color: var(--text-light-muted);
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .cta-buttons-wrapper {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--accent-gold);
          color: var(--primary-dark);
          padding: 0.9rem 2.25rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 15px rgba(197, 160, 89, 0.2);
          transition: var(--transition-smooth);
        }

        .cta-btn-gold:hover {
          background-color: var(--accent-gold-light);
          color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197, 160, 89, 0.4);
        }

        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border: 2px solid rgba(255, 255, 255, 0.25);
          color: var(--text-white);
          background-color: rgba(255, 255, 255, 0.03);
          padding: 0.85rem 2.25rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition-smooth);
          backdrop-filter: blur(8px);
        }

        .cta-btn-outline:hover {
          border-color: var(--text-white);
          background-color: var(--text-white);
          color: var(--primary-dark);
          transform: translateY(-2px);
        }

        /* Responsive Overrides */
        @media (max-width: 1024px) {
          .pillars-grid, .teaser-products-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .teaser-container {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
          
          .teaser-graphics {
            width: 80%;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .home-hero {
            min-height: 80vh;
            padding-bottom: 5rem;
          }

          .home-hero-content {
            text-align: center;
          }

          .home-hero-actions {
            justify-content: center;
          }
          
          .pillars-grid, .teaser-products-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .teaser-graphics {
            width: 100%;
          }
          
          .teaser-content {
            text-align: center;
          }
          
          .teaser-link-btn {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
