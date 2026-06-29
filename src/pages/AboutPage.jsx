import React from 'react';
import { Award, Compass, ShieldCheck, TreePine, History, Landmark, Settings } from 'lucide-react';

export default function AboutPage() {
  const brandMilestones = [
    {
      year: "1968",
      title: "Fundação da Empresa",
      description: "Início das atividades em Renascença-PR, produzindo móveis e esquadrias de madeira.",
      image: "/images/empresa/imagem-empresa-1976.jpg"
    },
    {
      year: "1973",
      title: "Expansão da Produção",
      description: "Ampliação da linha produtiva com portas, compensados, madeira serrada e laminada.",
      image: null
    },
    {
      year: "Anos 80 e 90",
      title: "Crescimento e Consolidação",
      description: "Ampliação da estrutura industrial e fortalecimento da marca.",
      image: "/images/empresa/imagem-empresa- 1990.jpeg"
    },
    {
      year: "Anos 2000",
      title: "Modernização Industrial",
      description: "Investimentos em tecnologia, equipamentos e qualificação profissional.",
      image: "/images/empresa/imagem-empresa-2000.jpeg"
    },
    {
      year: "Anos 2010",
      title: "Sustentabilidade e Inovação",
      description: "Aprimoramento dos processos e compromisso com a gestão responsável dos recursos naturais.",
      image: "/images/empresa/imagem-empresa-2018.jpeg"
    },
    {
      year: "Anos 2020",
      title: "Presença Nacional",
      description: "Expansão da atuação comercial para diversas regiões do Brasil.",
      image: "/images/empresa/imagem-empresa-2024.jpeg"
    },
    {
      year: "2026",
      title: "58 Anos de História",
      description: "Celebração de mais de meio século de tradição, qualidade e inovação.",
      image: null
    }
  ];

  const corePillars = [
    {
      icon: <Award size={24} />,
      title: "Padrão Industrial Rigoroso",
      desc: "Nossa fábrica conta com estufas computadorizadas de secagem de madeira. Esse rigoroso processo garante que as portas não empenem, mesmo sob condições de umidade e calor variadas."
    },
    {
      icon: <TreePine size={24} />,
      title: "Responsabilidade Ecológica",
      desc: "Cada árvore utilizada em nossa produção é certificada e manejada ecologicamente. Respeitamos a natureza para que a beleza da madeira natural continue vestindo as residências por gerações."
    },
    {
      icon: <Settings size={24} />,
      title: "Inovação nos Acabamentos",
      desc: "Investimos constantemente nas melhores tecnologias de laminação e montagem, oferecendo encaixe impecável, vedação termoacústica robusta e resistência física extraordinária."
    }
  ];

  return (
    <div className="page-about">
      {/* Banner Title */}
      <section className="about-banner">
        <div className="about-banner-overlay"></div>
        <div className="container">
          <div className="about-banner-content">
            <span className="banner-subtitle">CONHEÇA NOSSA HISTÓRIA</span>
            <h1 className="banner-title">Tradição & Evolução Tecnológica</h1>
            <p className="banner-lead">
              A história da Portas Alvorada que se renova com a precisão e o requinte da PortáBelly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="about-narrative">
        <div className="container narrative-container">
          <div className="narrative-text-col reveal reveal-fade-in-left">
            <span className="narrative-tag">A EMPRESA</span>
            <h2 className="narrative-title">Histórico da Móveis e Esquadrias Alvorada / Portabelly</h2>
            
            <p className="narrative-paragraph">
              A Empresa e Esquadrias Alvorada Ltda. iniciou sua trajetória em março de 1968, na cidade de Renascença, Paraná, fabricando móveis e esquadrias de madeira em um barracão de aproximadamente 200 m².
            </p>
            
            <p className="narrative-paragraph">
              Com o crescimento da empresa e a expansão do mercado, em 1973 ampliou sua linha de produção, passando a fabricar portas, compensados, madeira serrada e laminada, consolidando-se como uma importante indústria do setor madeireiro.
            </p>

            <p className="narrative-paragraph">
              Ao longo de mais de cinco décadas, a empresa construiu sua história baseada em trabalho, dedicação, qualidade, inovação e responsabilidade socioambiental. Esses valores contribuíram para o fortalecimento da marca e para o desenvolvimento econômico da região Sudoeste do Paraná.
            </p>

            <p className="narrative-paragraph">
              Atualmente, a Portas Alvorada e Portabelly é reconhecida pela fabricação de portas de madeira e produtos derivados, atendendo clientes em diversas regiões do Brasil e exterior. A empresa mantém o compromisso com a excelência, investindo continuamente em tecnologia, processos produtivos e qualificação de seus colaboradores.
            </p>

            <p className="narrative-paragraph">
              Com mais de 58 anos de história, a empresa permanece como referência no segmento de portas internas, unindo tradição, experiência e inovação para oferecer produtos de alta qualidade.
            </p>

            <p className="narrative-paragraph">
              <strong>PORTABELLY – De portas abertas para o futuro.</strong>
            </p>
          </div>

          <div className="narrative-graphics-col reveal reveal-fade-in-right">
            <div className="graphics-collage-wrapper">
              <img src="/images/laminated-door.png" alt="Maquinário PortáBelly" className="collage-img-large" />
              <div className="heritage-badge">
                <span className="badge-num">1968</span>
                <span className="badge-txt">Ano de Fundação</span>
              </div>
              <div className="collage-img-small-wrapper">
                <img src="/images/solid-wood-door.png" alt="Detalhe Madeira" className="collage-img-small" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="about-timeline">
        <div className="container">
          <div className="timeline-header reveal reveal-fade-in-up">
            <span className="timeline-tag">LINHA DO TEMPO</span>
            <h2 className="timeline-title">Nossa Jornada ao Longo das Décadas</h2>
            <div className="timeline-bar"></div>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '80%', margin: '1.5rem auto 0' }}>
              "Desde 1968, a Alvorada transforma madeira em qualidade, tradição e confiança, abrindo portas para novas histórias em todo o Brasil."
            </p>
          </div>

          <div className="timeline-modern">
            <div className="timeline-modern-line"></div>
            {brandMilestones.map((milestone, idx) => {
              const hasImage = !!milestone.image;
              const alignClass = hasImage ? (idx % 2 === 0 ? 'left' : 'right') : 'center';

              return (
                <div className={`timeline-modern-row ${alignClass}`} key={idx}>
                  
                  <div className="timeline-modern-content reveal">
                    <div className="modern-year-box">
                      <span className="modern-year">{milestone.year}</span>
                    </div>
                    {milestone.title && (
                      <h3 className="modern-title">{milestone.title}</h3>
                    )}
                    {milestone.description && (
                      <p className="modern-desc">{milestone.description}</p>
                    )}
                  </div>

                  {!hasImage ? null : (
                    <div className="timeline-modern-dot">
                      <div className="dot-inner"></div>
                    </div>
                  )}

                  {hasImage && (
                    <div className="timeline-modern-image reveal">
                      <div className="modern-img-wrapper">
                        <img 
                          src={milestone.image} 
                          alt={`PortáBelly ${milestone.year}`} 
                          className="modern-img" 
                        />
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technological & Quality Pillars */}
      <section className="about-pillars">
        <div className="container">
          <div className="pillars-header reveal reveal-fade-in-up">
            <span className="pillars-tag">TECNOLOGIA</span>
            <h2 className="pillars-title">Nossos Pilares de Qualidade Superior</h2>
            <div className="pillars-bar"></div>
          </div>

          <div className="pillars-cards-grid">
            {corePillars.map((pillar, idx) => (
              <div className={`about-pillar-card reveal reveal-scale-up delay-${(idx + 1) * 100}`} key={idx}>
                <div className="pillar-card-icon">{pillar.icon}</div>
                <h3 className="pillar-card-headline">{pillar.title}</h3>
                <p className="pillar-card-paragraph">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Banner section */
        .about-banner {
          position: relative;
          background: linear-gradient(135deg, #1e0202 0%, #350101 60%, #150000 100%);
          color: var(--text-white);
          padding: 8rem 0 5rem;
          text-align: center;
          overflow: hidden;
        }

        .about-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(30, 2, 2, 0.9), rgba(21, 0, 0, 0.95)), url('/images/laminated-door.png');
          background-size: cover;
          background-position: center;
          opacity: 0.55;
          z-index: 1;
        }

        .about-banner .container {
          position: relative;
          z-index: 2;
        }

        .about-banner-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .banner-subtitle {
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 1.25rem;
        }

        .banner-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: var(--text-white);
          margin-bottom: 1.5rem;
        }

        .banner-lead {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--text-light-muted);
          line-height: 1.6;
        }

        /* Narrative Section */
        .about-narrative {
          padding: 8rem 0;
          background-color: var(--bg-light);
          overflow: hidden;
        }

        .narrative-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 5rem;
          align-items: center;
        }

        .narrative-text-col {
          text-align: left;
        }

        .narrative-tag {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .narrative-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 850;
          color: var(--primary-dark);
          margin-bottom: 2rem;
          line-height: 1.25;
        }

        .narrative-paragraph {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .narrative-paragraph strong {
          color: var(--primary-dark);
          font-weight: 600;
        }

        /* Narrative Graphics Collage */
        .narrative-graphics-col {
          position: relative;
        }

        .graphics-collage-wrapper {
          position: relative;
          width: 90%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .collage-img-large {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--radius-lg);
          object-fit: cover;
          border: 1px solid var(--border-light);
        }

        .heritage-badge {
          position: absolute;
          bottom: -30px;
          left: -30px;
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          color: var(--text-white);
          padding: 1.8rem 1.4rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 35px rgba(81, 1, 1, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 155px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .heritage-badge .badge-num {
          font-size: 2.3rem;
          font-weight: 900;
          font-family: var(--font-secondary);
          color: var(--accent-gold);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .heritage-badge .badge-txt {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.3;
        }

        .collage-img-small-wrapper {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 190px;
          height: 240px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 6px solid var(--bg-white);
          overflow: hidden;
        }

        .collage-img-small {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Timeline Section */
        .about-timeline {
          padding: 8rem 0;
          background: linear-gradient(180deg, var(--bg-white) 0%, var(--bg-light) 100%);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .timeline-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5.5rem;
        }

        .timeline-tag {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .timeline-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--primary-dark);
        }

        /* Modern Magazine Timeline */
        .timeline-modern {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem 0;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .timeline-modern-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--accent-gold), transparent);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-modern-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .timeline-modern-row.left {
          flex-direction: row;
        }

        .timeline-modern-row.right {
          flex-direction: row-reverse;
        }
        
        .timeline-modern-row.center {
          justify-content: center;
        }

        .timeline-modern-content {
          width: 45%;
          padding: 2rem;
        }

        .timeline-modern-row.left .timeline-modern-content {
          text-align: right;
        }
        
        .timeline-modern-row.right .timeline-modern-content {
          text-align: left;
        }

        .timeline-modern-row.center .timeline-modern-content {
          width: 80%;
          max-width: 700px;
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          border: 1px solid rgba(197, 160, 89, 0.2);
          position: relative;
          z-index: 4;
        }

        .modern-year-box {
          margin-bottom: 1rem;
        }

        .modern-year {
          font-family: var(--font-primary);
          font-size: 3.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--accent-gold-dark) 0%, var(--accent-gold) 50%, var(--accent-gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          letter-spacing: -1px;
        }

        .modern-title {
          font-family: var(--font-primary);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modern-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .timeline-modern-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          background: var(--bg-white);
          border: 2px solid var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          box-shadow: 0 0 15px rgba(197, 160, 89, 0.3);
        }

        .dot-inner {
          width: 12px;
          height: 12px;
          background: var(--primary-dark);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .timeline-modern-row:hover .dot-inner {
          background: var(--accent-gold);
          transform: scale(1.5);
        }

        .timeline-modern-image {
          width: 45%;
          position: relative;
        }

        .modern-img-wrapper {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          display: flex;
        }

        .modern-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.7s ease;
        }

        .timeline-modern-row:hover .modern-img {
          transform: scale(1.05);
        }

        .modern-img-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(197, 160, 89, 0.05) 0%, rgba(197, 160, 89, 0.15) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed rgba(197, 160, 89, 0.3);
        }
        
        .placeholder-icon {
          color: rgba(197, 160, 89, 0.4);
          width: 48px;
          height: 48px;
        }

        /* Technology / Quality Pillars Section */
        .about-pillars {
          padding: 8rem 0;
          background-color: var(--bg-light);
          overflow: hidden;
        }

        .pillars-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }

        .pillars-tag {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .pillars-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--primary-dark);
        }

        .pillars-bar {
          width: 80px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 1.5rem auto;
        }

        .pillars-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .about-pillar-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          padding: 3.5rem 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: var(--transition-smooth);
        }

        .about-pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(197, 160, 89, 0.4);
        }

        .pillar-card-icon {
          width: 54px;
          height: 54px;
          background-color: rgba(81, 1, 1, 0.05);
          color: var(--primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          border: 1px solid rgba(81, 1, 1, 0.08);
          transition: var(--transition-smooth);
        }

        .about-pillar-card:hover .pillar-card-icon {
          background-color: var(--primary);
          color: var(--text-white);
        }

        .pillar-card-headline {
          font-family: var(--font-secondary);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .pillar-card-paragraph {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Responsive adaptations */
        @media (max-width: 1024px) {
          .narrative-container {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          
          .narrative-graphics-col {
            width: 80%;
            margin: 0 auto;
          }

          .pillars-cards-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .timeline-modern {
            gap: 4rem;
            padding: 2rem 0;
          }
          .timeline-modern-line {
            left: 20px;
          }
          .timeline-modern-row {
            flex-direction: column !important;
            align-items: flex-start;
          }
          .timeline-modern-dot {
            left: 20px;
            top: 25px;
            transform: translate(-50%, -50%);
          }
          .timeline-modern-content {
            width: 100%;
            padding: 0 0 1.5rem 50px;
            text-align: left !important;
          }
          .modern-year {
            font-size: 2.5rem;
          }
          .timeline-modern-image {
            width: 100%;
            padding-left: 50px;
          }
          
          .narrative-graphics-col {
            width: 100%;
          }
          
          .collage-img-small-wrapper {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
