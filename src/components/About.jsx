import React from 'react';
import { Award, Compass, ShieldCheck, TreePine } from 'lucide-react';

export default function About() {
  const valueItems = [
    {
      icon: <Award className="about-icon" size={24} />,
      title: "Tradição desde 1968",
      description: "Mais de cinco décadas de know-how técnico que transformam madeira bruta em obras-primas arquitetônicas."
    },
    {
      icon: <TreePine className="about-icon" size={24} />,
      title: "Compromisso Sustentável",
      description: "Madeira originada 100% de fontes de manejo florestal sustentável e processos ecologicamente certificados."
    },
    {
      icon: <ShieldCheck className="about-icon" size={24} />,
      title: "Qualidade PortáBelly",
      description: "Padrão industrial rigoroso de secagem e montagem que previne empenamentos e garante durabilidade infinita."
    }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container about-container">
        {/* Left Side: Text and Heritage Story */}
        <div className="about-content">
          <span className="about-subtitle">NOSSA HISTÓRIA</span>
          <h2 className="about-title">
            De <strong>Portas Alvorada</strong> para <strong>PortáBelly</strong>: Uma Evolução de Tradição e Elegância
          </h2>
          
          <p className="about-text">
            Nascemos em 1968 na cidade de <strong>Renascença, Paraná</strong>, como Móveis e Esquadrias Alvorada. Durante décadas, construímos uma reputação indestrutível de qualidade na fabricação de portas de madeira nobres. 
          </p>

          <p className="about-text">
            Hoje, como <strong>PortáBelly</strong>, expandimos nosso horizonte técnico e estético. Nossa fábrica renovou todo o maquinário operacional e modernizou os acabamentos de nossas coleções para entregar o que há de mais luxuoso em esquadrias, integrando o carinho artesanal tradicional com alta tecnologia moderna.
          </p>

          {/* Key Brand Pillars */}
          <div className="about-values-grid">
            {valueItems.map((val, idx) => (
              <div className="about-value-card" key={idx}>
                <div className="about-icon-box">{val.icon}</div>
                <div className="about-value-details">
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: High-End Interactive Images Collage */}
        <div className="about-graphics">
          <div className="about-img-frame">
            <img 
              src="/images/laminated-door.png" 
              alt="Fábrica da PortáBelly" 
              className="about-large-img"
            />
            {/* Float Highlight Badge */}
            <div className="about-stats-badge">
              <span className="about-stats-num">55+</span>
              <span className="about-stats-label">Anos Fabricando Portas Premium</span>
            </div>
            
            {/* Small Secondary Picture Overlay */}
            <div className="about-small-img-wrapper">
              <img 
                src="/images/solid-wood-door.png" 
                alt="Processo de Produção" 
                className="about-small-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 0;
          background-color: var(--bg-light);
          position: relative;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        .about-content {
          text-align: left;
        }

        .about-subtitle {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .about-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 2rem;
          line-height: 1.25;
        }

        .about-title strong {
          color: var(--primary);
          font-weight: 900;
        }

        .about-text {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .about-values-grid {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          margin-top: 3rem;
        }

        .about-value-card {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .about-icon-box {
          background-color: rgba(81, 1, 1, 0.05);
          border: 1px solid rgba(81, 1, 1, 0.1);
          color: var(--primary);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-icon {
          color: var(--primary);
        }

        .about-value-details h3 {
          font-family: var(--font-secondary);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.35rem;
        }

        .about-value-details p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Collage Section */
        .about-graphics {
          position: relative;
          height: 100%;
        }

        .about-img-frame {
          position: relative;
          width: 90%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: visible;
        }

        .about-large-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--radius-lg);
          object-fit: cover;
          border: 1px solid var(--border-light);
        }

        .about-stats-badge {
          position: absolute;
          bottom: -30px;
          left: -30px;
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          color: var(--text-white);
          padding: 2rem 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 35px rgba(81, 1, 1, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 160px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-stats-num {
          font-size: 2.5rem;
          font-weight: 900;
          font-family: var(--font-secondary);
          line-height: 1;
          color: var(--accent-gold);
          margin-bottom: 0.25rem;
        }

        .about-stats-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.3;
        }

        .about-small-img-wrapper {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 200px;
          height: 250px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 6px solid var(--bg-white);
          overflow: hidden;
        }

        .about-small-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          
          .about-graphics {
            width: 80%;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .about-graphics {
            width: 100%;
          }
          
          .about-stats-badge {
            left: 10px;
            bottom: -20px;
          }
          
          .about-small-img-wrapper {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
