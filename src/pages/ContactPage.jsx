import React from 'react';
import { MapPin, Phone, Mail, Clock, Smartphone, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const contactCards = [
    {
      icon: <MapPin size={22} />,
      label: "Sede Fabril & Showroom",
      value: "Rua Marechal Hermes da Fonseca, 173 - Bairro Industrial, Renascença - PR, CEP: 85610-000",
      link: "https://maps.google.com/maps?q=Rua%20Marechal%20Hermes%20da%20Fonseca,%20173,%20Renascen%C3%A7a%20-%20PR"
    },
    {
      icon: <Phone size={22} />,
      label: "Fixo de Atendimento",
      value: "(46) 3550-1184",
      link: "tel:+554635501184"
    },
    {
      icon: <Smartphone size={22} />,
      label: "WhatsApp Comercial",
      value: "(46) 99101-2844",
      link: "https://wa.me/5546991012844?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
    },
    {
      icon: <Mail size={22} />,
      label: "E-mail Geral",
      value: "comercial@portabelly.com.br",
      link: "mailto:comercial@portabelly.com.br"
    },
    {
      icon: <Clock size={22} />,
      label: "Horário da Fábrica",
      value: "Segunda a Sexta: 07:30h - 11:45h | 13:15h - 17:45h",
      link: null
    }
  ];

  return (
    <div className="page-contact">
      {/* Visual Title Banner */}
      <section className="contact-banner-header">
        <div className="contact-banner-overlay"></div>
        <div className="container">
          <div className="contact-banner-content">
            <span className="banner-subtitle">CONTATO DIRETO</span>
            <h1 className="banner-title">Fale Conosco</h1>
            <p className="banner-lead">
              Estamos prontos para atender a sua obra, construtora ou projeto de arquitetura diretamente via WhatsApp ou telefone.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="contact-main-grid">
        <div className="container">
          
          <div className="contact-two-columns">
            
            {/* Direct Channels Column */}
            <div className="contact-left-col reveal reveal-fade-in-left">
              <span className="col-tag">CANAIS DE ATENDIMENTO</span>
              <h2 className="col-title">Fale Conosco</h2>
              
              <div className="contact-cards-list">
                {contactCards.map((item, idx) => (
                  <div className={`contact-card-box reveal reveal-fade-in-left delay-${(idx + 1) * 100}`} key={idx}>
                    <div className="card-box-icon">{item.icon}</div>
                    <div className="card-box-text">
                      <span className="card-box-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-box-val interactive">
                          {item.value}
                        </a>
                      ) : (
                        <span className="card-box-val">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Major Direct WhatsApp CTA Block */}
              <div className="direct-whatsapp-card reveal reveal-scale-up delay-400">
                <div className="wa-card-header">
                  <MessageSquare className="wa-chat-icon" size={26} />
                  <h3>Atendimento Imediato</h3>
                </div>
                <p>Converse agora mesmo com a nossa equipe de engenharia e vendas técnicas para solicitar orçamentos, tirar dúvidas ou enviar plantas estruturais.</p>
                <a
                  href="https://wa.me/5546991012844?text=Olá,%20gostaria%20de%20conversar%20sobre%20as%20portas%20da%20PortáBelly!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary direct-wa-btn"
                >
                  <span>Iniciar Conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Column */}
            <div className="contact-right-col reveal reveal-fade-in-right">
              <span className="col-tag">LOCALIZAÇÃO DA FÁBRICA</span>
              <h2 className="col-title">Como Chegar</h2>
              
              <div className="large-map-card reveal reveal-scale-up delay-200">
                <p className="map-intro-text">Visite nossa fábrica e showroom em Renascença, Paraná, e confira de perto a nobreza e acabamento de nossas portas de exposição.</p>
                
                {/* Full Responsive Live Map */}
                <div className="map-iframe-wrapper">
                  <iframe
                    title="Localização Fábrica PortáBelly"
                    src="https://maps.google.com/maps?q=Rua%20Marechal%20Hermes%20da%20Fonseca,%20173,%20Renascen%C3%A7a%20-%20PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-map"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        /* Banner section */
        .contact-banner-header {
          position: relative;
          background: linear-gradient(135deg, #1e0202 0%, #350101 60%, #150000 100%);
          color: var(--text-white);
          padding: 8rem 0 5rem;
          text-align: center;
          overflow: hidden;
        }

        .contact-banner-overlay {
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

        .contact-banner-header .container {
          position: relative;
          z-index: 2;
        }

        .contact-banner-content {
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

        /* Main structure */
        .contact-main-grid {
          padding: 8rem 0;
          background-color: var(--bg-white);
          overflow: hidden;
        }

        .contact-two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }

        .col-tag {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.85rem;
        }

        .col-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 2.5rem;
          border-left: 4px solid var(--accent-gold);
          padding-left: 0.75rem;
          text-align: left;
        }

        /* Contact Details column list */
        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-card-box {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          text-align: left;
        }

        .card-box-icon {
          background-color: rgba(81, 1, 1, 0.05);
          border: 1px solid rgba(81, 1, 1, 0.08);
          color: var(--primary);
          padding: 0.7rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-box-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .card-box-label {
          font-family: var(--font-secondary);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-box-val {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
          line-height: 1.5;
        }

        .card-box-val.interactive {
          color: var(--primary);
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .card-box-val.interactive:hover {
          color: var(--primary-light);
          text-decoration: underline;
        }

        /* Large direct WhatsApp card */
        .direct-whatsapp-card {
          background-color: var(--bg-light);
          border: 1.5px solid var(--accent-gold);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          text-align: left;
        }

        .wa-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
          color: var(--primary-dark);
        }

        .wa-chat-icon {
          color: var(--accent-gold-dark);
        }

        .direct-whatsapp-card h3 {
          font-size: 1.3rem;
          font-weight: 800;
        }

        .direct-whatsapp-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .direct-wa-btn {
          width: 100%;
          box-shadow: 0 4px 15px rgba(81, 1, 1, 0.1);
        }

        /* Map box */
        .large-map-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .map-intro-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          text-align: left;
        }

        .map-iframe-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-light);
        }

        .contact-map {
          display: block;
          filter: grayscale(0.15) contrast(1.05);
          transition: var(--transition-smooth);
        }

        .contact-map:hover {
          filter: grayscale(0);
        }

        /* Responsive Overrides */
        @media (max-width: 1024px) {
          .contact-two-columns {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
        }
      `}</style>
    </div>
  );
}
