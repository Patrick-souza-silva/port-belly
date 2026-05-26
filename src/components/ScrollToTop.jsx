import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic SEO Setup based on active page route to boost Google ranking
    let pageTitle = "PortáBelly - Fábrica de Portas Premium | Renascença - PR";
    let pageDesc = "PortáBelly (antiga Portas Alvorada). Fábrica de portas de madeira nobres no Sudoeste do Paraná. Tradição desde 1968 em Renascença - PR.";

    switch (pathname) {
      case '/':
        pageTitle = "PortáBelly - Fábrica de Portas Premium | Renascença - PR";
        pageDesc = "PortáBelly (antiga Portas Alvorada). Fábrica de portas de alto padrão e kit porta pronta em Renascença - PR. Tradição e qualidade no Sudoeste do Paraná.";
        break;
      case '/sobre':
        pageTitle = "Sobre Nós - PortáBelly | Fábrica de Portas desde 1968";
        pageDesc = "Conheça a história e tradição de mais de 55 anos da PortáBelly na fabricação de portas de madeira de reflorestamento em Renascença, Pato Branco e Francisco Beltrão.";
        break;
      case '/produtos':
        pageTitle = "Produtos & Portas de Madeira - Portábelly | Indústria de Portas";
        pageDesc = "Conheça nossas novas linhas de portas de madeira de alto padrão: Kit BellyPlac, portas frisadas, lisas para verniz, semi-ocas e camarão. Solicite orçamentos direto de fábrica.";
        break;
      case '/contato':
        pageTitle = "Fale Conosco e Orçamentos - PortáBelly | Fábrica de Portas";
        pageDesc = "Entre em contato direto com a fábrica da PortáBelly em Renascença - PR. Envie seu projeto e solicite orçamento de portas para o PR, SC e RS.";
        break;
      default:
        break;
    }

    document.title = pageTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageDesc;

    // Temporarily override smooth scrolling on html & body to force a true instant jump to top
    const htmlStyle = document.documentElement.style;
    const bodyStyle = document.body.style;
    const originalHtmlScroll = htmlStyle.scrollBehavior;
    const originalBodyScroll = bodyStyle.scrollBehavior;

    htmlStyle.scrollBehavior = 'auto';
    bodyStyle.scrollBehavior = 'auto';

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Restore smooth scroll behavior in the next frame
    const restoreTimer = setTimeout(() => {
      htmlStyle.scrollBehavior = originalHtmlScroll;
      bodyStyle.scrollBehavior = originalBodyScroll;
    }, 20);

    // Subtle timeout to let the React Router finish mounting the new page elements
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');

      const observerOptions = {
        root: null, // use the viewport as container
        rootMargin: '0px 0px -8% 0px', // trigger slightly before fully on-screen for premium anticipation
        threshold: 0.1, // trigger when 10% of element is visible
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target); // Unobserve once animated for efficiency
          }
        });
      }, observerOptions);

      revealElements.forEach((el) => {
        // Double-check if the element is already in the initial viewport view
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('active');
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 120);

    return () => {
      clearTimeout(timer);
      clearTimeout(restoreTimer);
    };
  }, [pathname]);

  return null;
}

