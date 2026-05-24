import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'laminada',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: 'laminada',
        message: ''
      });
    }, 800);
  };

  const contactDetails = [
    {
      icon: <MapPin size={20} />,
      label: "Fábrica & Showroom",
      value: "Rua Marechal Hermes da Fonseca, 173 - Bairro Industrial, Renascença - PR, CEP 85610-000",
      link: "https://maps.google.com/maps?q=Rua%20Marechal%20Hermes%20da%20Fonseca,%20173,%20Renascen%C3%A7a%20-%20PR"
    },
    {
      icon: <Phone size={20} />,
      label: "Telefones de Atendimento",
      value: "(46) 3550-1184 / (46) 99101-2844",
      link: "tel:+554635501184"
    },
    {
      icon: <Mail size={20} />,
      label: "E-mail Corporativo",
      value: "comercial@portabelly.com.br",
      link: "mailto:comercial@portabelly.com.br"
    },
    {
      icon: <Clock size={20} />,
      label: "Horário de Funcionamento",
      value: "Segunda a Sexta: 07:30 - 11:45 | 13:15 - 17:45",
      link: null
    }
  ];

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-subtitle">FALE CONOSCO</span>
          <h2 className="contact-title">Inicie Seu Projeto Conosco</h2>
          <div className="title-bar"></div>
          <p className="contact-lead">
            Seja você um arquiteto especificando um projeto, uma construtora negociando em lote, ou buscando portas sob medida para sua residência, nossa equipe comercial está pronta para atender com soluções completas.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Brand Info & Interactive Map */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Informações de Contato</h3>
            
            <div className="contact-details-list">
              {contactDetails.map((item, idx) => (
                <div className="contact-detail-card" key={idx}>
                  <div className="contact-detail-icon">{item.icon}</div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-detail-val interactive">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-detail-val">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Live Map */}
            <div className="contact-map-wrapper">
              <iframe
                title="Localização Fábrica PortáBelly"
                src="https://maps.google.com/maps?q=Rua%20Marechal%20Hermes%20da%20Fonseca,%20173,%20Renascen%C3%A7a%20-%20PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-iframe-map"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="contact-form-col">
            <h3 className="contact-col-title">Solicitar Orçamento Técnico</h3>
            
            {isSubmitted ? (
              <div className="form-success-box animate-fade-in">
                <CheckCircle size={48} className="success-icon" />
                <h4>Solicitação Enviada!</h4>
                <p>Obrigado pelo contato. Um dos nossos especialistas técnicos em esquadrias entrará em contato nas próximas horas pelo telefone ou e-mail fornecido.</p>
                <button 
                  className="btn-primary success-btn-reset" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form className="contact-quote-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Seu Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      required
                    />
                  </div>
                </div>

                <div className="form-row split">
                  <div className="form-group">
                    <label htmlFor="email">E-mail para Contato *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: joao@exemplo.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: (46) 99101-2844"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="product">Linha de Interesse *</label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                    >
                      <option value="laminada">Linha Belíssima Laminada</option>
                      <option value="macica">Linha Belíssima Maciça</option>
                      <option value="kit">Kit Porta Pronta</option>
                      <option value="acabamentos">Rodapés & Acabamentos</option>
                      <option value="custom">Outros Projetos sob Medida</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="message">Detalhes do Projeto / Mensagem *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Descreva as medidas, quantidade de portas ou dúvidas que você possui..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={16} />
                  <span>Enviar Solicitação</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          padding: 8rem 0;
          background-color: #ffffff;
          position: relative;
        }

        .contact-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 5rem;
        }

        .contact-subtitle {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .contact-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .contact-lead {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Layout columns grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 4rem;
        }

        .contact-col-title {
          font-family: var(--font-secondary);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 2.25rem;
          text-align: left;
          border-left: 4px solid var(--accent-gold);
          padding-left: 0.75rem;
        }

        /* Detail Cards styling */
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-detail-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          text-align: left;
        }

        .contact-detail-icon {
          background-color: rgba(81, 1, 1, 0.05);
          border: 1px solid rgba(81, 1, 1, 0.08);
          color: var(--primary);
          padding: 0.65rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-detail-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .contact-detail-label {
          font-family: var(--font-secondary);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-detail-val {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .contact-detail-val.interactive {
          color: var(--primary);
          font-weight: 600;
        }

        .contact-detail-val.interactive:hover {
          color: var(--primary-light);
          text-decoration: underline;
        }

        /* Embedded Map styling */
        .contact-map-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }

        .contact-iframe-map {
          display: block;
          filter: grayscale(0.2) contrast(1.05);
          transition: var(--transition-smooth);
        }

        .contact-iframe-map:hover {
          filter: grayscale(0);
        }

        /* Form styling */
        .contact-form-col {
          background-color: var(--bg-light);
          border: 1px solid var(--border-light);
          padding: 3.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .contact-quote-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        .form-row {
          width: 100%;
        }

        .form-row.split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          font-family: var(--font-primary);
          font-size: 0.95rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(81, 1, 1, 0.15);
          background-color: var(--bg-white);
          color: var(--text-main);
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(81, 1, 1, 0.15);
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        /* Success screen styling */
        .form-success-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
          text-align: center;
        }

        .success-icon {
          color: var(--accent-gold-dark);
          margin-bottom: 1.5rem;
        }

        .form-success-box h4 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .form-success-box p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 380px;
        }

        .success-btn-reset {
          background-color: var(--primary-dark);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
          
          .contact-form-col {
            padding: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .form-row.split {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
