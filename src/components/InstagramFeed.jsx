import React, { useEffect, useState } from 'react';
import { ExternalLink, Sparkles, Heart, MessageCircle } from 'lucide-react';

// Custom inline SVG Instagram component to avoid package-level Lucide-React icon exports mismatch
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// =========================================================================
// CONFIGURAÇÃO DO WIDGET DO INSTAGRAM:
// =========================================================================
// Se você já tiver o seu widget dinâmico pronto, altere as variáveis abaixo.
//
// 1. Caso use LIGHTWIDGET (Iframe):
//    - Defina 'USE_WIDGET = true' e insira a URL do iframe gerado em 'WIDGET_IFRAME_URL'.
//
// 2. Caso use ELFSIGHT ou similar (Script + Div):
//    - Defina 'USE_ELFSIGHT = true', insira a ID do widget em 'ELFSIGHT_WIDGET_ID',
//      e o script correspondente será injetado automaticamente de forma limpa.
// =========================================================================

const USE_WIDGET = false; // Mude para true para usar iframe do LightWidget
const WIDGET_IFRAME_URL = ""; // Cole aqui o link 'src' do seu iframe LightWidget (ex: https://lightwidget.com/widgets/e9c1...)

const USE_ELFSIGHT = false; // Mude para true para usar Elfsight
const ELFSIGHT_WIDGET_ID = ""; // Cole aqui o UUID do seu widget Elfsight (ex: "82f7c20a-e2db-4246-88cf-...")

export default function InstagramFeed() {
  const [elfsightLoaded, setElfsightLoaded] = useState(false);

  // Injeção dinâmica do script da Elfsight se habilitado
  useEffect(() => {
    if (USE_ELFSIGHT && ELFSIGHT_WIDGET_ID) {
      const scriptId = 'elfsight-platform-script';
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        script.defer = true;
        script.onload = () => setElfsightLoaded(true);
        document.body.appendChild(script);
      } else {
        setElfsightLoaded(true);
      }
    }
  }, []);

  // Postagens reais e ilustrativas curadas da Portábelly para o modo interativo de alta costura
  const mockPosts = [
    {
      id: 1,
      image: "/images/6.jpg",
      likes: 342,
      comments: 28,
      caption: "Qualidade e sofisticação em cada detalhe. Conheça as opções Portábelly para o seu projeto. 🪵💼",
      link: "https://www.instagram.com/p/DbbR8buvceQ/?igsi=NXBpN2swYWJ0bWs3"
    },
    {
      id: 2,
      image: "/images/5.jpg",
      likes: 218,
      comments: 15,
      caption: "Transformando ambientes com a elegância da madeira natural. Tradição e inovação em cada peça. ✨🚪",
      link: "https://www.instagram.com/p/DbY3auCjJ-u/?igsi=ZzQzOGI4M2loeWlv"
    },
    {
      id: 3,
      image: "/images/4.jpg",
      likes: 194,
      comments: 21,
      caption: "Mais do que portas, entregamos design, requinte e segurança para o seu lar. 🏭📏",
      link: "https://www.instagram.com/p/DbEW-pCvHVd/?igsi=MXAwYjc1bTZndmVvZw=="
    },
    {
      id: 4,
      image: "/images/2.jpg",
      likes: 405,
      comments: 47,
      caption: "A imponência de uma porta Portábelly. Luxo e durabilidade incomparáveis para quem exige o melhor. 🛡️🏠",
      link: "https://www.instagram.com/p/DYqPryGgBZz/?igsi=aTJ5bDhqdWtxcHY5"
    },
    {
      id: 5,
      image: "/images/3.jpg",
      likes: 298,
      comments: 29,
      caption: "Nosso DNA é a perfeição. Requinte e durabilidade que atravessam gerações. ❤️🔨",
      link: "https://www.instagram.com/p/DaohS4SAmFd/?igsi=Z3J3aWd6empxYm9j"
    },
    {
      id: 6,
      image: "/images/Sem título.jpg",
      likes: 353,
      comments: 38,
      caption: "Detalhes que fazem toda a diferença na arquitetura e decoração de interiores. Descubra nossas linhas! 📦⚙️",
      link: "https://www.instagram.com/p/DaBP1OGvbBm/?igsi=MXUzMm9zMm9mZmx0OA%3D%3D&wa_status_inline=true"
    }
  ];

  return (
    <section className="instagram-feed-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="insta-header">
          <div className="insta-badge">
            <Sparkles size={14} className="insta-badge-icon" />
            <span>Conexão Digital</span>
          </div>
          <h2 className="insta-title">Acompanhe a <span className="brand-name">Portábelly</span> no Instagram</h2>
          <div className="insta-divider"></div>
          <p className="insta-subtitle">
            Fique por dentro dos nossos lançamentos, linhas de produtos, novidades da fábrica e conteúdos exclusivos para revendas, distribuidores e parceiros comerciais.
          </p>
          
          <a 
            href="https://www.instagram.com/portabellyportas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="insta-follow-btn"
          >
            <InstagramIcon size={18} />
            <span>@portabellyportas</span>
            <ExternalLink size={14} className="insta-follow-external" />
          </a>
        </div>

        {/* Content Area */}
        <div className="insta-content-container">
          
          {/* CASO 1: Renderiza Iframe do LightWidget */}
          {USE_WIDGET && WIDGET_IFRAME_URL ? (
            <div className="widget-iframe-wrapper">
              <iframe 
                src={WIDGET_IFRAME_URL} 
                scrolling="no" 
                allowFullScreen={true}
                allowtransparency="true" 
                className="lightwidget-widget-iframe"
                title="Instagram Live Feed Widget"
              />
            </div>
          ) : 
          
          /* CASO 2: Renderiza Widget do Elfsight */
          USE_ELFSIGHT && ELFSIGHT_WIDGET_ID ? (
            <div className="widget-elfsight-wrapper">
              <div 
                className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`} 
                data-elfsight-app-lazy 
              />
              {!elfsightLoaded && (
                <div className="widget-loading-placeholder">
                  <div className="widget-spinner"></div>
                  <p>Carregando feed dinâmico do Instagram...</p>
                </div>
              )}
            </div>
          ) : 
          
          /* CASO 3 (Padrão): Grid Premium Interativo com efeito Glassmorphic e micro-animações */
          (
            <div className="insta-grid-wrapper">
              <div className="insta-grid">
                {mockPosts.map((post) => (
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={post.id} 
                    className="insta-post-card"
                  >
                    <div className="insta-post-img-container">
                      <img 
                        src={post.image} 
                        alt={`Instagram Portábelly Post - ${post.id}`} 
                        className="insta-post-img" 
                        loading="lazy"
                      />
                      <div className="insta-post-overlay">
                        <div className="insta-overlay-content">
                          <div className="insta-overlay-metrics">
                            <span className="insta-metric">
                              <Heart size={18} fill="var(--text-white)" /> {post.likes}
                            </span>
                            <span className="insta-metric">
                              <MessageCircle size={18} fill="var(--text-white)" /> {post.comments}
                            </span>
                          </div>
                          <p className="insta-overlay-caption">{post.caption}</p>
                          <div className="insta-overlay-badge">
                            <InstagramIcon size={14} />
                            <span>Ver no Instagram</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          )}

        </div>
      </div>

      <style>{`
        .instagram-feed-section {
          padding: 8rem 0;
          background-color: var(--bg-white);
          position: relative;
          width: 100%;
          overflow: hidden;
          border-top: 1px solid var(--border-light);
        }

        /* Decorative gold subtle glow in the background */
        .instagram-feed-section::after {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197, 160, 89, 0.04) 0%, transparent 70%);
          bottom: -150px;
          left: -150px;
          pointer-events: none;
          z-index: 1;
        }

        .insta-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 4rem;
          position: relative;
          z-index: 2;
        }

        .insta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(81, 1, 1, 0.05);
          border: 1px solid rgba(81, 1, 1, 0.08);
          color: var(--primary);
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-xl);
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .insta-badge-icon {
          color: var(--accent-gold-dark);
        }

        .insta-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 850;
          color: var(--primary-dark);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .insta-divider {
          width: 60px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 1.25rem auto;
        }

        .insta-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .insta-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          color: var(--text-white) !important;
          padding: 0.8rem 1.75rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(81, 1, 1, 0.2);
          transition: var(--transition-smooth);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .insta-follow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(81, 1, 1, 0.35);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
        }

        .insta-follow-external {
          opacity: 0.7;
          transition: var(--transition-fast);
        }

        .insta-follow-btn:hover .insta-follow-external {
          opacity: 1;
          transform: translate(1px, -1px);
        }

        /* Content Container */
        .insta-content-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* WIDGET MOCKUP: IFRAME CONTAINER */
        .widget-iframe-wrapper {
          width: 100%;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          background-color: var(--bg-light);
        }

        .lightwidget-widget-iframe {
          width: 100%;
          min-height: 520px;
          border: 0;
          overflow: hidden;
          display: block;
        }

        /* WIDGET MOCKUP: ELFSIGHT CONTAINER */
        .widget-elfsight-wrapper {
          width: 100%;
          min-height: 400px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .widget-loading-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 2rem;
          background-color: var(--bg-light);
          border: 1px dashed var(--border-light);
          border-radius: var(--radius-lg);
          color: var(--text-muted);
          gap: 1.5rem;
        }

        .widget-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(81, 1, 1, 0.1);
          border-top-color: var(--primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* CUSTOM INTERACTIVE GRID RENDER */
        .insta-grid-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .insta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .insta-post-card {
          display: block;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          position: relative;
          background-color: var(--bg-light);
          aspect-ratio: 1 / 1;
        }

        .insta-post-img-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .insta-post-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .insta-post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(81, 1, 1, 0.9);
          backdrop-filter: blur(8px);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.25rem;
          transition: opacity 0.4s ease;
          box-sizing: border-box;
        }

        .insta-post-card:hover .insta-post-overlay {
          opacity: 1;
        }

        .insta-post-card:hover .insta-post-img {
          transform: scale(1.08);
        }

        .insta-overlay-content {
          text-align: center;
          color: var(--text-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
        }

        .insta-overlay-metrics {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .insta-metric {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 1.05rem;
        }

        .insta-overlay-caption {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-light-muted);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .insta-overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid rgba(197, 160, 89, 0.4);
          background-color: rgba(197, 160, 89, 0.15);
          color: var(--accent-gold-light);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition-fast);
        }

        .insta-post-card:hover .insta-overlay-badge:hover {
          background-color: var(--accent-gold);
          color: var(--primary-dark);
          border-color: var(--accent-gold);
        }

        .insta-grid-tip {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background-color: var(--bg-light);
          border: 1px solid var(--border-light);
          border-left: 4px solid var(--accent-gold);
          padding: 1.5rem 2rem;
          border-radius: var(--radius-md);
          text-align: left;
        }

        .tip-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-gold);
          margin-top: 0.4rem;
          flex-shrink: 0;
        }

        .insta-grid-tip p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .insta-grid-tip code {
          background-color: rgba(81, 1, 1, 0.05);
          color: var(--primary);
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-xs);
          font-size: 0.85rem;
          font-family: Consolas, monospace;
        }

        /* RESPONSIVE LAYOUT BREAKPOINTS */
        @media (max-width: 1024px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .instagram-feed-section {
            padding: 6rem 0;
          }
        }

        @media (max-width: 480px) {
          .insta-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .insta-overlay-caption {
            -webkit-line-clamp: 4;
          }

          .instagram-feed-section {
            padding: 5rem 0;
          }
          
          .insta-grid-tip {
            padding: 1.25rem 1.5rem;
          }
          
          .insta-follow-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
