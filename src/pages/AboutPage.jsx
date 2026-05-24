import React from 'react';
import { Award, Compass, ShieldCheck, TreePine, History, Landmark, Settings } from 'lucide-react';

export default function AboutPage() {
  const brandMilestones = [
    {
      year: "1976",
      image: "/images/empresa/imagem-empresa-1976.jpg"
    },
    {
      year: "1990",
      image: "/images/empresa/imagem-empresa- 1990.jpeg"
    },
    {
      year: "2000",
      image: "/images/empresa/imagem-empresa-2000.jpeg"
    },
    {
      year: "2018",
      image: "/images/empresa/imagem-empresa-2018.jpeg"
    },
    {
      year: "2024",
      image: "/images/empresa/imagem-empresa-2024.jpeg"
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
            <h2 className="narrative-title">Mais de Meio Século de Sucesso e Paixão Pela Madeira</h2>
            
            <p className="narrative-paragraph">
              A <strong>PortáBelly</strong> não surgiu do acaso. Nossa essência técnica e artística foi forjada a partir de 1968, na acolhedora cidade de <strong>Renascença, no estado do Paraná</strong>, sob o nome de Móveis e Esquadrias Alvorada. Desde os primeiros passos, o objetivo de nossa família de artesãos foi o mesmo: entregar a nobreza e a segurança da melhor madeira sob a forma de portas deslumbrantes.
            </p>
            
            <p className="narrative-paragraph">
              A transição para <strong>PortáBelly</strong> representa nossa maior evolução de marca e infraestrutura. Modernizamos completamente o parque de maquinários da fábrica e repensamos as nossas técnicas de finalização estética. Hoje, combinamos a sensibilidade humana do entalhe de precisão e seleção de lâminas de madeira à altíssima engenharia industrial contemporânea.
            </p>

            <p className="narrative-paragraph">
              O resultado são portas com isolamento acústico exemplar, superfícies de suavidade incomparável ao toque e uma solidez que protege e embeleza residências de luxo e empreendimentos imobiliários de alto padrão em todo o território nacional.
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
          </div>

          <div className="timeline-flow">
            {brandMilestones.map((milestone, idx) => (
              <div className={`timeline-step ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
                <div className={`timeline-card reveal ${idx % 2 === 0 ? 'reveal-fade-in-left' : 'reveal-fade-in-right'} delay-${((idx % 3) + 1) * 150}`}>
                  {milestone.image && (
                    <div className="timeline-card-image-wrapper">
                      <img 
                        src={milestone.image} 
                        alt={`PortáBelly ${milestone.year}`} 
                        className="timeline-card-img" 
                      />
                    </div>
                  )}
                  <div className="timeline-card-body">
                    <span className="timeline-year">{milestone.year}</span>
                    <div className="timeline-year-line"></div>
                  </div>
                </div>
                <div className="timeline-dot">
                  <History size={16} />
                </div>
              </div>
            ))}
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

        .timeline-bar {
          width: 80px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 1.5rem auto 0;
        }

        /* Timeline flow alignment */
        .timeline-flow {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
        }

        /* Luxury Glowing Gradient Central Track */
        .timeline-flow::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            var(--primary) 15%, 
            var(--accent-gold) 50%, 
            var(--primary) 85%, 
            transparent 100%
          );
          transform: translateX(-50%);
          box-shadow: 0 0 12px rgba(197, 160, 89, 0.2);
        }

        .timeline-step {
          display: flex;
          position: relative;
          width: 50%;
          margin-bottom: 5rem;
        }

        .timeline-step.left {
          align-self: flex-start;
          justify-content: flex-end;
          padding-right: 45px;
          left: 0;
        }

        .timeline-step.right {
          align-self: flex-end;
          justify-content: flex-start;
          padding-left: 45px;
          margin-left: auto;
          left: 0;
        }

        /* Deluxe Passepartout Card Design */
        .timeline-card {
          position: relative;
          background-color: var(--bg-white);
          border: 1px solid rgba(81, 1, 1, 0.05);
          padding: 1.5rem; /* Passepartout framing padding */
          border-radius: var(--radius-sm); /* Sharp high-end architectural borders */
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.015), inset 0 0 0 1px rgba(197, 160, 89, 0.08);
          width: 100%;
          max-width: 420px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          cursor: pointer;
          z-index: 2;
        }

        /* Double dashed bezel inside the passepartout */
        .timeline-card::after {
          content: '';
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          right: 0.75rem;
          bottom: 0.75rem;
          border: 1px dashed rgba(197, 160, 89, 0.2);
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .timeline-card-image-wrapper {
          width: 100%;
          height: 240px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          background-color: #f7f5f0;
          z-index: 1;
        }

        .timeline-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(15%) sepia(8%);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card-body {
          padding-top: 1.25rem;
          text-align: center;
          position: relative;
          z-index: 3;
        }

        /* Embossed Gold leaf typography for the years */
        .timeline-year {
          font-family: var(--font-secondary);
          font-size: 1.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--accent-gold-dark) 0%, var(--accent-gold) 50%, var(--accent-gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          margin: 0;
          letter-spacing: 0.05em;
          transition: all 0.4s ease;
        }

        /* Dynamic expanding line under the year */
        .timeline-year-line {
          width: 30px;
          height: 2px;
          background-color: var(--accent-gold);
          margin: 0.5rem auto 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.6;
        }

        /* Bottom Luxury Expansion Edge */
        .timeline-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, var(--primary) 0%, var(--accent-gold) 50%, var(--primary) 100%);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
          z-index: 4;
        }

        /* Interactive Timeline Dot */
        .timeline-dot {
          width: 42px;
          height: 42px;
          background-color: var(--bg-white);
          color: var(--primary);
          border: 2px solid var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 130px; /* Aligned vertically with center of card */
          z-index: 5;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(81, 1, 1, 0.05);
        }

        .timeline-dot svg {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.7;
        }

        /* Expanding halo */
        .timeline-dot::after {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 1px solid var(--accent-gold);
          border-radius: 50%;
          opacity: 0;
          transform: scale(0.85);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .timeline-step.left .timeline-dot {
          right: -21px;
        }

        .timeline-step.right .timeline-dot {
          left: -21px;
        }

        /* Interactive Hover Transitions triggered on Passepartout card */
        .timeline-card:hover {
          transform: translateY(-8px);
          border-color: rgba(81, 1, 1, 0.15);
          box-shadow: 0 25px 65px rgba(81, 1, 1, 0.08), inset 0 0 0 1px rgba(197, 160, 89, 0.25);
          padding: 1rem; /* Frame mat shrinks, image gets bigger! */
        }

        .timeline-card:hover::after {
          top: 0.5rem;
          left: 0.5rem;
          right: 0.5rem;
          bottom: 0.5rem;
          border-color: var(--accent-gold);
          border-style: solid;
        }

        .timeline-card:hover .timeline-card-image-wrapper {
          height: 260px; /* Seamless expansion */
        }

        .timeline-card:hover .timeline-card-img {
          transform: scale(1.06);
          filter: grayscale(0%) sepia(0%);
        }

        .timeline-card:hover .timeline-year-line {
          width: 70px;
          background-color: var(--primary);
          opacity: 1;
        }

        .timeline-card:hover::before {
          width: 100%;
        }

        /* Hover interaction propagated to siblings (Adjacent Sibling selector works since card is first in HTML) */
        .timeline-card:hover + .timeline-dot {
          background-color: var(--primary);
          color: var(--text-white);
          border-color: var(--accent-gold);
          transform: scale(1.15);
          box-shadow: 0 0 22px rgba(81, 1, 1, 0.25);
        }

        .timeline-card:hover + .timeline-dot svg {
          transform: rotate(360deg);
          opacity: 1;
        }

        .timeline-card:hover + .timeline-dot::after {
          opacity: 1;
          transform: scale(1);
          animation: pulseGold 2s infinite;
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
          .timeline-flow::before {
            left: 20px;
          }

          .timeline-step {
            width: 100%;
            padding-left: 45px;
            padding-right: 0;
            margin-bottom: 3.5rem;
          }

          .timeline-step.left, .timeline-step.right {
            justify-content: flex-start;
            left: 0;
            margin-left: 0;
            padding-left: 45px;
            padding-right: 0;
          }

          .timeline-step.left .timeline-dot,
          .timeline-step.right .timeline-dot {
            left: -1px;
            right: auto;
            top: 100px; /* Centered nicely on more compact mobile cards */
          }

          .timeline-step.left .timeline-card,
          .timeline-step.right .timeline-card {
            width: 100%;
            max-width: 100%;
            margin-left: 0;
            margin-right: 0;
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
