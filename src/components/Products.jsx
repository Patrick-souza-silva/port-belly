import React from 'react';
import { Layers, Box, DoorOpen, Palette, MessageSquare } from 'lucide-react';

export default function Products() {
  const productLines = [
    {
      id: "laminada",
      title: "Linha Belíssima Laminada",
      description: "Portas revestidas com lâminas de madeira nobre selecionadas (Curupixá, Angelim, Tauari e Freijó). Design contemporâneo ideal para interiores requintados.",
      icon: <Layers size={20} />,
      image: "/images/laminated-door.png",
      specs: ["Lâminas Naturais", "Preenchimento Sólido/Semi-sólido", "Verniz UV Protetor"]
    },
    {
      id: "macica",
      title: "Linha Belíssima Maciça",
      description: "A força inabalável de portas 100% fabricadas em madeira maciça seca em estufa. Máxima segurança, durabilidade secular e isolamento acústico inigualável.",
      icon: <DoorOpen size={20} />,
      image: "/images/solid-wood-door.png",
      specs: ["Madeira Lei Reflorestada", "Secagem Controlada", "Opção sob Medida"]
    },
    {
      id: "kit",
      title: "Kit Porta Pronta",
      description: "A solução completa e inteligente para sua obra. Porta montada com batente, guarnições e dobradiças instaladas, pronta para encaixe rápido e perfeito.",
      icon: <Box size={20} />,
      image: "/images/door-kit.png",
      specs: ["Montagem Industrial", "Ferragens Inclusas", "Instalação Limpa"]
    },
    {
      id: "acabamentos",
      title: "Rodapés & Acabamentos",
      description: "Guarnições, sóculos e rodapés que acompanham a tonalidade de sua porta. Fabricados com resistência à umidade e perfeito alinhamento estético.",
      icon: <Palette size={20} />,
      image: "/images/baseboards-trim.png",
      specs: ["MDF Ultra Hidrófugo", "Várias Alturas (7 a 15cm)", "Fácil Fixação"]
    }
  ];

  return (
    <section id="produtos" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="products-header">
          <span className="products-subtitle">NOSSO PORTFÓLIO</span>
          <h2 className="products-title">Portas Desenvolvidas para Marcar Época</h2>
          <div className="title-bar"></div>
          <p className="products-lead">
            Combinamos a precisão da engenharia industrial com a sensibilidade artesanal para criar produtos com vedação termoacústica perfeita, estabilidade estrutural incomparável e acabamento espetacular.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {productLines.map((prod) => (
            <div className="product-card" key={prod.id}>
              {/* Card Image Area with Overlay */}
              <div className="product-image-wrapper">
                <img src={prod.image} alt={prod.title} className="product-img" />
                <div className="product-image-overlay"></div>
                <div className="product-card-icon-box">{prod.icon}</div>
              </div>

              {/* Card Body */}
              <div className="product-body">
                <h3 className="product-card-title">{prod.title}</h3>
                <p className="product-card-description">{prod.description}</p>
                
                {/* Tech Specs */}
                <div className="product-specs-container">
                  {prod.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="product-spec-tag">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Card CTA Trigger */}
                <div className="product-card-footer">
                  <a 
                    href={`https://wa.me/5546991012844?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20${encodeURIComponent(prod.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Consultar Fábrica</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-section {
          padding: 8rem 0;
          background-color: #ffffff;
          position: relative;
        }

        .products-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 5rem;
        }

        .products-subtitle {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .products-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .title-bar {
          width: 80px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 1.5rem auto;
        }

        .products-lead {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Card Grid Layout */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        /* Product Card Styles */
        .product-card {
          background-color: var(--bg-light);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
          height: 100%;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(197, 160, 89, 0.4);
        }

        .product-image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        .product-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(81, 1, 1, 0.1), rgba(81, 1, 1, 0.4));
          z-index: 1;
        }

        .product-card-icon-box {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          background-color: var(--primary);
          color: var(--text-white);
          padding: 0.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border: 2px solid var(--accent-gold);
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-card-icon-box {
          transform: translateY(-2px);
          background-color: var(--primary-light);
          color: var(--text-white);
        }

        .product-body {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .product-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.85rem;
        }

        .product-card-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        /* Tech Specs styling */
        .product-specs-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .product-spec-tag {
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary-light);
          background-color: rgba(81, 1, 1, 0.04);
          border: 1px solid rgba(81, 1, 1, 0.08);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        /* Interactive Card Button */
        .product-card-footer {
          border-top: 1px solid rgba(81, 1, 1, 0.05);
          padding-top: 1.5rem;
        }

        .product-card-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          background-color: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 0.75rem;
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .product-card-btn:hover {
          background-color: var(--primary);
          color: var(--text-white);
        }

        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
