import React from 'react';
import { Layers, Box, DoorOpen, Palette, Check, MessageSquare, Info } from 'lucide-react';

export default function ProductsPage() {
  const fullProducts = [
    {
      id: "laminada",
      title: "Linha Belíssima Laminada",
      subtitle: "Sofisticação e Design Contemporâneo",
      icon: <Layers size={24} />,
      image: "/images/laminated-door.png",
      desc: "Desenvolvida com lâminas nobres selecionadas à mão, esta linha confere aos ambientes internos um aspecto contemporâneo, aconchegante e extremamente luxuoso. O acabamento superficial recebe proteção de verniz UV de alto desempenho.",
      options: ["Curupixá", "Angelim", "Tauari", "Freijó Natural"],
      specs: [
        { label: "Preenchimento", value: "Sólido (Madeira Reflorestada) ou Semi-sólido" },
        { label: "Acabamento", value: "Curado em UV de Alta Resistência" },
        { label: "Espessuras", value: "35mm, 40mm ou sob demanda" },
        { label: "Uso Indicado", value: "Portas de entrada e divisórias internas" }
      ]
    },
    {
      id: "macica",
      title: "Linha Belíssima Maciça",
      subtitle: "Força Inabalável e Solidez Secular",
      icon: <DoorOpen size={24} />,
      image: "/images/solid-wood-door.png",
      desc: "Fabricadas com blocos 100% maciços de madeiras selecionadas e curadas em estufas computadorizadas. Garante a máxima segurança física, resistência climática insuperável e isolamento acústico e térmico natural sem precedentes.",
      options: ["Angelim Maciço", "Eucalipto Seco Estufa", "Madeiras Nobres Sob Consulta"],
      specs: [
        { label: "Preenchimento", value: "100% Madeira Maciça Nobre" },
        { label: "Secagem", value: "Controlada eletronicamente entre 10% e 12% de umidade" },
        { label: "Segurança", value: "Altíssima blindagem mecânica contra arrombamentos" },
        { label: "Uso Indicado", value: "Portas de entrada externas e salas de reunião" }
      ]
    },
    {
      id: "kit",
      title: "Kit Porta Pronta",
      subtitle: "Precisão Industrial e Agilidade na Obra",
      icon: <Box size={24} />,
      image: "/images/door-kit.png",
      desc: "A solução inteligente definitiva para a construção civil. O kit chega totalmente pronto para instalação imediata no vão, minimizando o desperdício de tempo e material na obra.",
      options: ["Fechaduras premium inclusas", "Borrachas de vedação alemã", "Guarnições reguláveis"],
      specs: [
        { label: "Componentes", value: "Folha de Porta, Batente, Dobradiças e Casing Regulável" },
        { label: "Instalação", value: "Fixação rápida com espuma de poliuretano expandido" },
        { label: "Acústica", value: "Borrachas amortecedoras integradas que previnem batidas" },
        { label: "Uso Indicado", value: "Obras residenciais e comerciais de alta velocidade" }
      ]
    },
    {
      id: "acabamentos",
      title: "Rodapés & Acabamentos",
      subtitle: "Moldura e Elegância em Harmonia",
      icon: <Palette size={24} />,
      image: "/images/baseboards-trim.png",
      desc: "Coleção de rodapés, alizares, marcos e sóculos desenvolvidos com o mesmo rigor estético das folhas de porta. Tratam a transição geométrica das paredes com suavidade e simetria.",
      options: ["MDF Ultra Hidrófugo", "Rodapés de Madeira Natural", "Sóculos Personalizados"],
      specs: [
        { label: "Material Base", value: "MDF Premium resistente a umidade ou madeira nobre" },
        { label: "Alturas de Linha", value: "7cm, 10cm, 12cm e 15cm" },
        { label: "Fixação", value: "Encaixe inteligente com presilhas ou adesivo estrutural" },
        { label: "Uso Indicado", value: "Arremates perimetrais de pisos laminados, vinílicos ou porcelanato" }
      ]
    }
  ];

  return (
    <div className="page-products">
      {/* Visual Title Banner */}
      <section className="products-banner">
        <div className="products-banner-overlay"></div>
        <div className="container">
          <div className="products-banner-content">
            <span className="banner-subtitle">NOSSOS PRODUTOS</span>
            <h1 className="banner-title">Esquadrias de Alta Engenharia</h1>
            <p className="banner-lead">
              Conheça a precisão dos cortes, materiais nobres e a sofisticação técnica de cada uma de nossas coleções.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Specification Sections */}
      <section className="products-list-section">
        <div className="container">
          
          <div className="products-page-intro reveal reveal-fade-in-up">
            <h2>Padrão PortáBelly de Manufatura</h2>
            <div className="intro-bar"></div>
            <p>
              Nossa fábrica atua com tecnologias avançadas para conformação, fresagem e secagem física de essências florestais nobres. Cada produto é inspecionado rigorosamente antes de deixar nossas instalações em Renascença - PR.
            </p>
          </div>

          <div className="products-detailed-flow">
            {fullProducts.map((prod, idx) => (
              <div className="product-block-row" key={prod.id} id={prod.id}>
                {/* Visual Area */}
                <div className={`product-block-graphics reveal ${idx % 2 === 0 ? 'reveal-fade-in-left' : 'reveal-fade-in-right'}`}>
                  <div className="product-block-img-frame">
                    <img src={prod.image} alt={prod.title} className="product-block-img" />
                    <div className="product-block-icon">{prod.icon}</div>
                  </div>
                </div>

                {/* Text & Tech Specs Area */}
                <div className={`product-block-details reveal ${idx % 2 === 0 ? 'reveal-fade-in-right' : 'reveal-fade-in-left'} delay-100`}>
                  <span className="product-block-tagline">{prod.subtitle}</span>
                  <h2 className="product-block-title">{prod.title}</h2>
                  <p className="product-block-description">{prod.desc}</p>

                  {/* Wood options tags */}
                  <div className="product-wood-options">
                    <span className="options-title">Opções Disponíveis:</span>
                    <div className="options-tags">
                      {prod.options.map((opt, oIdx) => (
                        <span key={oIdx} className="wood-tag">
                          <Check size={12} className="tag-check" />
                          <span>{opt}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Table */}
                  <div className="tech-specs-box">
                    <h3 className="specs-box-title">Especificações Técnicas:</h3>
                    <div className="specs-table-rows">
                      {prod.specs.map((spec, sIdx) => (
                        <div className="spec-table-row" key={sIdx}>
                          <span className="spec-name">{spec.label}</span>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="product-block-action">
                    <a
                      href={`https://wa.me/5546991012844?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20a%20${encodeURIComponent(prod.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary product-inquiry-btn"
                    >
                      <MessageSquare size={16} />
                      <span>Consultar Preços da Fábrica</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Solutions Box */}
          <div className="custom-solution-banner reveal reveal-scale-up">
            <div className="custom-banner-icon">
              <Info size={28} />
            </div>
            <div className="custom-banner-text">
              <h3>Necessita de Portas Especiais ou Sob Medida?</h3>
              <p>Trabalhamos em estreita parceria com escritórios de engenharia e arquitetura para projetos com dimensões personalizadas ou acabamentos geométricos complexos. Envie as plantas do seu projeto e nosso setor de engenharia fará a especificação.</p>
            </div>
            <div className="custom-banner-action">
              <a 
                href="https://wa.me/5546991012844?text=Olá,%20tenho%20um%20projeto%20com%20medidas%20especiais%20e%20gostaria%20de%20enviar%20as%20plantas%20para%20orçamento!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                Enviar Planta do Projeto
              </a>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        /* Banner section */
        .products-banner {
          position: relative;
          background: linear-gradient(135deg, #1e0202 0%, #350101 60%, #150000 100%);
          color: var(--text-white);
          padding: 8rem 0 5rem;
          text-align: center;
          overflow: hidden;
        }

        .products-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(30, 2, 2, 0.9), rgba(21, 0, 0, 0.95)), url('/images/solid-wood-door.png');
          background-size: cover;
          background-position: center;
          opacity: 0.55;
          z-index: 1;
        }

        .products-banner .container {
          position: relative;
          z-index: 2;
        }

        .products-banner-content {
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

        /* Products Page Intro */
        .products-list-section {
          padding: 8rem 0;
          background-color: var(--bg-white);
          overflow: hidden;
        }

        .products-page-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 6rem;
        }

        .products-page-intro h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .intro-bar {
          width: 70px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 1.25rem auto;
        }

        .products-page-intro p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Technical Detailed Rows block */
        .products-detailed-flow {
          display: flex;
          flex-direction: column;
          gap: 7rem;
          margin-bottom: 7rem;
        }

        .product-block-row {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 5rem;
          align-items: center;
        }

        .product-block-row:nth-child(even) {
          grid-template-columns: 1.05fr 0.95fr;
        }

        .product-block-row:nth-child(even) .product-block-graphics {
          order: 2;
        }

        .product-block-row:nth-child(even) .product-block-details {
          order: 1;
        }

        /* graphics frame */
        .product-block-graphics {
          position: relative;
        }

        .product-block-img-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
        }

        .product-block-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: var(--transition-smooth);
        }

        .product-block-row:hover .product-block-img {
          transform: scale(1.03);
        }

        .product-block-icon {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background-color: var(--primary);
          color: var(--text-white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
          border: 2px solid var(--accent-gold);
        }

        /* Content block details */
        .product-block-details {
          text-align: left;
        }

        .product-block-tagline {
          font-family: var(--font-secondary);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.85rem;
        }

        .product-block-title {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 1.25rem;
        }

        .product-block-description {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        /* options checkmarks */
        .product-wood-options {
          margin-bottom: 2rem;
        }

        .options-title {
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.85rem;
        }

        .options-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .wood-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: rgba(81, 1, 1, 0.04);
          border: 1px solid rgba(81, 1, 1, 0.08);
          color: var(--primary);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .tag-check {
          color: var(--accent-gold-dark);
        }

        /* Tech specification table */
        .tech-specs-box {
          background-color: var(--bg-light);
          border: 1px solid var(--border-light);
          padding: 2rem;
          border-radius: var(--radius-md);
          margin-bottom: 2.5rem;
        }

        .specs-box-title {
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid rgba(81, 1, 1, 0.08);
          padding-bottom: 0.5rem;
        }

        .specs-table-rows {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .spec-table-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          border-bottom: 1px dashed rgba(81, 1, 1, 0.04);
          padding-bottom: 0.5rem;
        }

        .spec-table-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .spec-name {
          font-weight: 700;
          color: var(--primary-dark);
        }

        .spec-value {
          color: var(--text-muted);
          text-align: right;
        }

        .product-inquiry-btn {
          width: 100%;
        }

        /* Custom Solution Box */
        .custom-solution-banner {
          background: linear-gradient(135deg, #FAF9F6 0%, #f3efe6 100%);
          border: 1.5px solid var(--accent-gold-dark);
          padding: 3.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 2.5rem;
          box-shadow: var(--shadow-sm);
        }

        .custom-banner-icon {
          background-color: var(--primary);
          color: var(--text-white);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(81, 1, 1, 0.2);
        }

        .custom-banner-text {
          text-align: left;
          flex-grow: 1;
        }

        .custom-banner-text h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.5rem;
        }

        .custom-banner-text p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .custom-banner-action {
          flex-shrink: 0;
        }

        /* Responsive Overrides */
        @media (max-width: 1024px) {
          .product-block-row,
          .product-block-row:nth-child(even) {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .product-block-row:nth-child(even) .product-block-graphics {
            order: 1;
          }

          .product-block-row:nth-child(even) .product-block-details {
            order: 2;
          }

          .product-block-img {
            height: 380px;
          }

          .custom-solution-banner {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
            padding: 2.5rem;
          }

          .custom-banner-icon {
            margin: 0 auto;
          }

          .custom-banner-text {
            text-align: center;
          }

          .custom-banner-action {
            width: 100%;
          }

          .custom-banner-action a {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .product-block-img {
            height: 280px;
          }
          
          .tech-specs-box {
            padding: 1.5rem;
          }
          
          .spec-table-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
            padding-bottom: 0.75rem;
          }
          
          .spec-value {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
