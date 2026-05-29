import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Sparkles, MessageSquare, Info, ArrowUpDown } from 'lucide-react';

export default function ProductsPage() {
  const [selectedLine, setSelectedLine] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [activeSpecModel, setActiveSpecModel] = useState(null);

  // Ref e lógica de arrastar para as tabs de filtro
  const tabsRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';
    };

    const onMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = 'grab';
      el.style.userSelect = '';
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      el.scrollLeft = scrollLeft.current - walk;
    };

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  // Fichas técnicas reais de cada linha
  const getLineSpecs = (line) => {
    switch (line) {
      case 'bellyplac':
        return {
          composicao: "Quadro em Pinus com enchimento interno",
          enchimento: "Colmeia, sarrafo ou sólida",
          material: "Chapa em HDF com pintura UV BELLYPLAC em branco, mogno, angelim e imbuia",
          embalagem: "Contém fita de borda e embalagem inclusa",
          acabamento: "Pintura UV BELLYPLAC em branco, mogno, angelim e imbuia",
          dimensoes: "Altura: 2100mm | Larguras: 600/620mm, 700/720mm, 800/820mm, 900/920mm, 1000mm | Espessura: 35mm",
          frisos: "Disponível nos frisos: VR-100, VR-101, VR-102, VR-113, VR-115, VR-120, VR-122",
          extra: "Todas as Portas frisadas com chapa HDF e pintura UV BELLYPLAC: mogno, angelim e imbuia. Uso exclusivo interno."
        };
      case 'frisada':
        return {
          composicao: "Quadro em Pinus com enchimento interno e chapa HDF",
          enchimento: "Colmeia, sarrafo ou sólida",
          acabamento: "Pintura UV BELLYPLAC em branco, mogno, angelim e imbuia",
          embalagem: "Contém fita de borda e embalagem inclusa",
          especificacoes: "Portas exclusivas para uso interno. Não pode ser pintada com fundo ou tinta a base de água. Não podem sofrer alterações em suas medidas.",
          dimensoes: "Altura: 2100mm | Larguras: 600/620mm, 700/720mm, 800/820mm, 900/920mm, 1000mm | Espessura: 35mm",
          frisos: "Pode ser fabricada nos seguintes frisos: VR-100, VR-101, VR-102, VR-113, VR-115, VR-120, VR-122",
          extra: "Todas as Portas frisadas são revestidas com chapa HDF e pintura UV BELLYPLAC: mogno, angelim e imbuia."
        };
      case 'lisa':
        return {
          composicao: "Quadro em Pinus com capa laminada",
          material: "Capas disponíveis: Curupixá, Tauari e Ipê — lâmina natural de alta fidelidade",
          estrutura: "Contra-Capa em HDF, reforço para fechadura e dobradiça, filete nas bordas e embalagem",
          acabamento: "Verniz especial de cura UV (toque aveludado e anti-risco) — classe para verniz",
          dimensoes: "Tamanho padrão: Altura 2.10m | Larguras: 60/62cm, 70/72cm, 80/82cm, 90/92cm, 100cm | Espessura: 30/35mm",
          sistema: "Dobradiças de encaixe — pode ser pintada somente com verniz",
          extra: "Por se tratar de lâmina natural, pode ocorrer diferenças na cor/tonalidade. Disponível nos padrões: Curupixá, Ipê, Tauari."
        };
      case 'semioca':
        return {
          composicao: "Quadro em Pinus com sarrafeamento interno",
          material: "Capa de Virola/Amescla (lâmina natural)",
          estrutura: "Sarrafo de compensado com reforço para fechadura e dobradiça. Contra-Capa laminado",
          acabamento: "Lâmina natural Virola/Amescla — estrutura sarrafeada semi-oca",
          dimensoes: "Altura 2.10m | Larguras variadas conforme pedido",
          sistema: "Dobradiças convencionais",
          extra: "Estrutura interna SARRAFEADA — reforços estratégicos para fechadura e dobradiça. Ótima relação custo-benefício para uso interno residencial."
        };
      case 'solida':
        return {
          composicao: "Quadro em Pinus com laminada faqueada",
          material: "Capas disponíveis: Curupixá, Tauari e Ipê",
          estrutura: "Enchimento sarrafo e compensado. Contra-Capa Torneada",
          acabamento: "Laminada Faqueada — classe para verniz",
          dimensoes: "Altura 2.10m | Larguras: 60/62cm, 70/72cm, 80/82cm, 90/92cm, 100cm | Espessura 30/35mm",
          sistema: "Reforço para fechadura e dobradiça. Filete nas Bordas e Embalagem",
          extra: "Porta Camarão para verniz. Não pintar com tinta a base de água ou fundo. Capas disponíveis: Curupixá, Tauari e Ipê."
        };
      case 'camarao':
        return {
          composicao: "Quadro em Pinus com laminada faqueada",
          material: "Capas disponíveis: Curupixá, Tauari e Ipê",
          estrutura: "Enchimento sarrafo e compensado. Contra-Capa Torneada",
          acabamento: "Laminada Faqueada — classe para verniz",
          dimensoes: "Altura 2.10m | Larguras: 60/62cm, 70/72cm, 80/82cm, 90/92cm, 100cm | Espessura 30/35mm",
          sistema: "Reforço para fechadura e dobradiça. Filete nas Bordas e Embalagem",
          extra: "Porta Camarão para verniz. Não pintar com tinta a base de água ou fundo. Capas disponíveis: Curupixá, Tauari e Ipê."
        };
      default:
        return null;
    }
  };

  // Modelos reais da empresa com imagens atualizadas
  const doorModels = useMemo(() => [
    // --- PORTA FRISADA BELLYPLAC (7 modelos VR) ---
    {
      id: "frisada-vr101",
      name: "Porta Frisada VR-101 — Mogno Ubatuba",
      code: "VR-101",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/BellyPlacFrisada-VR101.jpg",
      description: "Porta Frisada VR-101 com pintura UV BELLYPLAC Mogno Ubatuba. Quadro em Pinus, chapa HDF com enchimento em colmeia, sarrafo ou sólida. Fita de borda e embalagem inclusa. Uso exclusivo interno.",
      specs: ["Pintura UV BELLYPLAC Mogno", "Quadro em Pinus", "Fita de Borda Inclusa"]
    },
    {
      id: "frisada-vr102",
      name: "Porta Frisada VR-102 — Angelim",
      code: "VR-102",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/BellyPlacFrisada-VR102.jpg",
      description: "Porta Frisada VR-102 com pintura UV BELLYPLAC Angelim. Chapa HDF com enchimento em colmeia, sarrafo ou sólida. Altura 2.10m, larguras de 60cm a 100cm, espessura 35mm.",
      specs: ["Pintura UV BELLYPLAC Angelim", "Chapa HDF", "Múltiplos Tamanhos"]
    },
    {
      id: "frisada-vr115",
      name: "Porta Frisada VR-115 — Imbuia Quartier",
      code: "VR-115",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/BellyPlacFrisada-VR115.jpg",
      description: "Porta Frisada VR-115 com pintura UV BELLYPLAC Imbuia Quartier. Chapa HDF com pintura UV de alta durabilidade. Quadro em Pinus, fita de borda inclusa. Uso exclusivo interno.",
      specs: ["Pintura UV BELLYPLAC Imbuia", "Chapa HDF", "Quadro em Pinus"]
    },
    {
      id: "frisada-vr100",
      name: "Porta Frisada VR-100",
      code: "VR-100",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/PortaFrisada-VR100.jpg",
      description: "Porta Frisada VR-100 com quadro em Pinus e chapa HDF, pintura UV BELLYPLAC. Uso interno. Disponível com enchimento em colmeia, sarrafo ou sólida.",
      specs: ["Quadro em Pinus", "HDF + Pintura UV BELLYPLAC", "Fita de Borda Inclusa"]
    },
    {
      id: "frisada-vr113",
      name: "Porta Frisada VR-113",
      code: "VR-113",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/PortaFrisada-VR113.jpg",
      description: "Porta Frisada VR-113 com design de frisos verticais. Chapa HDF com pintura UV BELLYPLAC. Estrutura de pinus com reforço para fechadura.",
      specs: ["Frisos Verticais", "Quadro em Pinus", "HDF + Pintura UV BELLYPLAC"]
    },
    {
      id: "frisada-vr120",
      name: "Porta Frisada VR-120",
      code: "VR-120",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/PortaFrisada-VR120.jpg",
      description: "Porta Frisada VR-120 com friso amplo e elegante. Espessura 35mm, chapa HDF com pintura UV BELLYPLAC. Exclusiva para uso interno residencial.",
      specs: ["Friso Amplo", "Espessura 35mm", "HDF + Pintura UV BELLYPLAC"]
    },
    {
      id: "frisada-vr122",
      name: "Porta Frisada VR-122",
      code: "VR-122",
      line: "frisada",
      lineLabel: "Porta Frisada",
      image: "/images/linhas/novos-modelos/PortaFrisada-VR122.jpg",
      description: "Porta Frisada VR-122 com design contemporâneo e frisos horizontais. Quadro em Pinus com HDF e pintura UV BELLYPLAC. Fita de borda inclusa.",
      specs: ["Frisos Horizontais", "HDF UV BELLYPLAC", "Quadro em Pinus"]
    },

    // --- PORTA LISA CLASS PARA VERNIZ (2 modelos) ---
    {
      id: "lisa-curupixa-1",
      name: "Lisa Curupixá Class",
      code: "LISA-CURUPIXA-1",
      line: "lisa",
      lineLabel: "Porta Lisa (Verniz)",
      image: "/images/linhas/novos-modelos/PortaCurupixa-class1.jpg",
      description: "Porta lisa classe para verniz com capa de Curupixá natural. Quadro em Pinus, contra-capa em HDF, reforço para fechadura e dobradiça. Filete nas bordas.",
      specs: ["Capa Curupixá Natural", "Quadro em Pinus", "Verniz UV — Não pintar com tinta base d'água"]
    },
    {
      id: "lisa-tauari-1",
      name: "Lisa Tauari Class",
      code: "LISA-TAUARI-1",
      line: "lisa",
      lineLabel: "Porta Lisa (Verniz)",
      image: "/images/linhas/novos-modelos/PortaTauari-class.jpg",
      description: "Porta lisa classe para verniz com capa de Tauari natural. Quadro em Pinus, contra-capa em HDF, reforço para fechadura e dobradiça. Filete nas bordas.",
      specs: ["Capa Tauari Natural", "Quadro em Pinus", "Verniz UV — Não pintar com tinta base d'água"]
    },
    {
      id: "lisa-ipe-1",
      name: "Lisa Ipê Class",
      code: "LISA-IPE-1",
      line: "lisa",
      lineLabel: "Porta Lisa (Verniz)",
      image: "/images/linhas/novos-modelos/PortaIpe-class.jpg",
      description: "Porta lisa classe para verniz com capa de Ipê natural. Quadro em Pinus, contra-capa em HDF, reforço para fechadura e dobradiça. Filete nas bordas.",
      specs: ["Capa Ipê Natural", "Quadro em Pinus", "Verniz UV — Não pintar com tinta base d'água"]
    },
    {
      id: "lisa-curupixa-2",
      name: "Porta Curupixa Comercial",
      code: "LISA-CURUPIXA-2",
      line: "lisa",
      lineLabel: "Porta Lisa (Verniz)",
      image: "/images/linhas/novos-modelos/PortaCurupixa-class1.jpg",
      description: "Variação da lisa Curupixá com veios diferenciados. Capa laminada natural, contra-capa HDF. Disponível também em Tauari e Ipê. Acabamento verniz UV.",
      specs: ["Lâmina Natural Curupixá", "Contra-Capa HDF", "Acabamento Verniz UV"]
    },

    // --- PORTA SEMI-OCA VIROLA / SARRAFEADA (1 modelo) ---
    {
      id: "semioca-virola",
      name: "Porta Semi-Oca Virola",
      code: "SEMIOCA-VIROLA",
      line: "semioca",
      lineLabel: "Porta Semi-Oca",
      image: "/images/linhas/novos-modelos/PortaSemiOca-Virola.jpg",
      description: "Porta semi-oca (sarrafeada) com quadro em Pinus, sarrafo de compensado com reforço para fechadura e dobradiça. Contra-capa laminado. Capa Virola/Amescla.",
      specs: ["Quadro em Pinus", "Estrutura Sarrafeada", "Capa Virola/Amescla"]
    },

    // --- PORTA SÓLIDA ---
    {
      id: "solida-curupixa",
      name: "Porta Sólida",
      code: "SOLIDA-CURUPIXA",
      line: "solida",
      lineLabel: "Porta Sólida",
      image: "/images/linhas/novos-modelos/PortaSolida-nova.jpg",
      description: "Porta sólida com quadro em Pinus e laminada faqueada. Enchimento sarrafo e compensado com contra-capa torneada. Filete nas bordas. Capas disponíveis: Curupixá, Tauari e Ipê.",
      specs: ["Laminada Faqueada", "Contra-Capa Torneada", "Capas: Curupixá, Tauari, Ipê"]
    },

    // --- PORTA CAMARÃO PARA VERNIZ ---
    {
      id: "camarao-verniz-lisa",
      name: "Porta Camarão (Verniz)",
      code: "CAMARAO-VERNIZ",
      line: "camarao",
      lineLabel: "Porta Camarão",
      image: "/images/linhas/novos-modelos/PortaSolida.jpg",
      description: "Porta Camarão para verniz com laminada faqueada e contra-capa torneada. Quadro em Pinus, enchimento sarrafo e compensado, filete nas bordas. Capas: Curupixá, Tauari e Ipê.",
      specs: ["Laminada Faqueada", "Contra-Capa Torneada", "Capas: Curupixá, Tauari, Ipê"]
    },

    // --- BELLYPLAC (4 modelos) ---
    {
      id: "bellyplac-branca",
      name: "BellyPlac Branca",
      code: "BELLYPLAC-BRANCA",
      line: "bellyplac",
      lineLabel: "Bellyplac",
      image: "/images/linhas/novos-modelos/BellyPlac-Branca.png",
      description: "Folha em HDF 3mm com enchimento em colmeia, acabamento branco lacado e branco fosco UV. Batente e guarnição 100% HDF Ultra recobertos com PET.",
      specs: ["HDF 3mm com Colmeia", "Branco Lacado / Fosco UV", "Batente HDF Ultra + PET"]
    },
    {
      id: "bellyplac-mogno",
      name: "BellyPlac Mogno",
      code: "BELLYPLAC-MOGNO",
      line: "bellyplac",
      lineLabel: "Bellyplac",
      image: "/images/linhas/novos-modelos/BellyPlac-Mogno.png",
      description: "Folha HDF 3mm na cor mogno com pintura UV BELLYPLAC. Batente e guarnição 100% HDF Ultra com papel melamínico mogno. Kit com furação reversível.",
      specs: ["HDF 3mm com Colmeia", "Pintura UV BELLYPLAC Mogno", "Batente HDF Ultra Melamínico"]
    },
    {
      id: "bellyplac-angelim",
      name: "BellyPlac Angelim",
      code: "BELLYPLAC-ANGELIM",
      line: "bellyplac",
      lineLabel: "Bellyplac",
      image: "/images/linhas/novos-modelos/BellyPlac-Angelim.jpg",
      description: "Folha HDF 3mm cor angelim com pintura UV BELLYPLAC. Batente e guarnição 100% HDF Ultra. Alta resistência à umidade, não amarela com o tempo.",
      specs: ["HDF 3mm com Colmeia", "Pintura UV BELLYPLAC Angelim", "Resistente à Umidade"]
    },
    {
      id: "bellyplac-imbuia",
      name: "BellyPlac Imbuia Quartier",
      code: "BELLYPLAC-IMBUIA",
      line: "bellyplac",
      lineLabel: "Bellyplac",
      image: "/images/linhas/novos-modelos/BellyPlac-ImbuiaQuartier.jpg",
      description: "Folha HDF 3mm cor imbuia quartier com pintura UV BELLYPLAC. Guarnição com regulagem de 0,50cm para um lado e 3cm para o outro.",
      specs: ["HDF 3mm com Colmeia", "Pintura UV BELLYPLAC Imbuia", "Guarnição Regulável"]
    },
  ], []);

  // Filtragem e busca reativa
  const filteredModels = useMemo(() => {
    return doorModels.filter((model) => {
      const matchesLine = selectedLine === 'all' || model.line === selectedLine;
      const matchesSearch = 
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.lineLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLine && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'line') return a.lineLabel.localeCompare(b.lineLabel);
      return 0;
    });
  }, [doorModels, selectedLine, searchQuery, sortBy]);

  // Contagem dinâmica de modelos por categoria
  const counts = useMemo(() => {
    const total = doorModels.length;
    const bellyplac = doorModels.filter(d => d.line === 'bellyplac').length;
    const frisada = doorModels.filter(d => d.line === 'frisada').length;
    const lisa = doorModels.filter(d => d.line === 'lisa').length;
    const semioca = doorModels.filter(d => d.line === 'semioca').length;
    const solida = doorModels.filter(d => d.line === 'solida').length;
    const camarao = doorModels.filter(d => d.line === 'camarao').length;
    return { total, bellyplac, frisada, lisa, semioca, solida, camarao };
  }, [doorModels]);

  return (
    <div className="page-products">
      {/* Title Banner */}
      <section className="products-banner">
        <div className="products-banner-overlay"></div>
        <div className="products-banner-glow"></div>
        <div className="container">
          <div className="products-banner-content animate-fade-in-up">
            <span className="banner-subtitle">PORTFÓLIO COMPLETO</span>
            <h1 className="banner-title">Produtos & Linhas de Portas</h1>
            <p className="banner-lead">
              Navegue interativamente por todas as nossas linhas industriais de Portas Internas. Filtre por modelo, busque itens específicos e solicite orçamentos diretos de fábrica.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Explorer Section */}
      <section className="products-explorer-section">
        <div className="container">
          
          {/* Active Toolbar: Search + Sort controls */}
          <div className="explorer-toolbar animate-fade-in-up">
            <div className="search-box-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Buscar por código ou produto (ex: BellyPlac, VR-100, Lisa)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-search-btn">
                  Limpar
                </button>
              )}
            </div>

            <div className="sort-box-wrapper">
              <ArrowUpDown className="sort-icon" size={16} />
              <span className="sort-label">Ordenar por:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="name">Nome do Produto</option>
                <option value="line">Coleção/Linha</option>
              </select>
            </div>
          </div>

          {/* Responsive filter tabs bar */}
          <div
            className="filters-tabs-container animate-fade-in-up animate-delay-100"
            ref={tabsRef}
          >
            <div className="filters-tabs">
              <button
                onClick={() => setSelectedLine('all')}
                className={`filter-tab-btn ${selectedLine === 'all' ? 'active' : ''}`}
              >
                <span>Todos os Produtos</span>
                <span className="tab-count-badge">{counts.total}</span>
              </button>
              <button
                onClick={() => setSelectedLine('bellyplac')}
                className={`filter-tab-btn ${selectedLine === 'bellyplac' ? 'active' : ''}`}
              >
                <span>Bellyplac</span>
                <span className="tab-count-badge">{counts.bellyplac}</span>
              </button>
              <button
                onClick={() => setSelectedLine('frisada')}
                className={`filter-tab-btn ${selectedLine === 'frisada' ? 'active' : ''}`}
              >
                <span>Porta Frisada</span>
                <span className="tab-count-badge">{counts.frisada}</span>
              </button>
              <button
                onClick={() => setSelectedLine('lisa')}
                className={`filter-tab-btn ${selectedLine === 'lisa' ? 'active' : ''}`}
              >
                <span>Porta Lisa (Verniz)</span>
                <span className="tab-count-badge">{counts.lisa}</span>
              </button>
              <button
                onClick={() => setSelectedLine('semioca')}
                className={`filter-tab-btn ${selectedLine === 'semioca' ? 'active' : ''}`}
              >
                <span>Porta Semi-Oca</span>
                <span className="tab-count-badge">{counts.semioca}</span>
              </button>
              <button
                onClick={() => setSelectedLine('solida')}
                className={`filter-tab-btn ${selectedLine === 'solida' ? 'active' : ''}`}
              >
                <span>Porta Sólida</span>
                <span className="tab-count-badge">{counts.solida}</span>
              </button>
              <button
                onClick={() => setSelectedLine('camarao')}
                className={`filter-tab-btn ${selectedLine === 'camarao' ? 'active' : ''}`}
              >
                <span>Porta Camarão</span>
                <span className="tab-count-badge">{counts.camarao}</span>
              </button>
            </div>
          </div>

          {/* Results Info Bar */}
          <div className="results-info-bar animate-fade-in-up animate-delay-200">
            <p className="results-count-text">
              Exibindo <strong>{filteredModels.length}</strong> de <strong>{doorModels.length}</strong> produtos encontrados.
            </p>
            {searchQuery && (
              <span className="search-query-tag">
                Busca: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="tag-remove-btn">×</button>
              </span>
            )}
          </div>

          {/* Door Grid */}
          {filteredModels.length > 0 ? (
            <div className="models-grid animate-fade-in-up animate-delay-300">
              {filteredModels.map((model) => (
                <div className="model-card animate-fade-in" key={model.id}>
                  
                  {/* Photo area */}
                  <div className="model-img-wrapper">
                    <img 
                      src={model.image} 
                      alt={`Porta Portábelly ${model.name}`} 
                      className="model-img" 
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/images/laminated-door.png";
                      }}
                    />
                    <div className="model-line-tag-overlay">
                      {model.lineLabel}
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="model-card-body">
                    <span className="model-card-line-label">{model.lineLabel}</span>
                    <h3 className="model-card-title">{model.name}</h3>
                    <div className="model-card-divider"></div>
                    <p className="model-card-desc">{model.description}</p>
                    
                    {/* Technical details tags */}
                    <div className="model-specs-tags">
                      {model.specs.map((spec, sIdx) => (
                        <span className="model-spec-tag" key={sIdx}>
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="model-actions-row">
                      <button 
                        onClick={() => setActiveSpecModel(model)}
                        className="model-specs-btn"
                        title="Ver especificações técnicas detalhadas"
                      >
                        <Info size={14} />
                        <span>Ficha Técnica</span>
                      </button>
                      <a 
                        href={`https://wa.me/5546991012844?text=Olá!%20Gostaria%20de%20solicitar%20mais%20detalhes%20e%20um%20orçamento%20para%20o%20modelo%20${encodeURIComponent(model.name)}%20da%20${encodeURIComponent(model.lineLabel)}.`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="model-whatsapp-btn"
                      >
                        <MessageSquare size={14} />
                        <span>Orçar</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="models-empty-state animate-fade-in">
              <Info size={40} className="empty-state-icon" />
              <h3>Nenhum produto encontrado</h3>
              <p>Não encontramos portas correspondentes aos filtros selecionados ou termos digitados. Tente ajustar os filtros ou limpar a pesquisa.</p>
              <button 
                onClick={() => {
                  setSelectedLine('all');
                  setSearchQuery('');
                }} 
                className="btn-primary"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          )}

          {/* Technical Info Banner */}
          <div className="custom-notice-box animate-fade-in animate-delay-400">
            <div className="notice-icon-box">
              <Sparkles size={24} />
            </div>
            <div className="notice-text">
              <h3>Kit Porta Pronta BellyPlac</h3>
              <p>
                Adquira suas portas avulsas (folha) ou em kit completo com batente HDF Ultra, guarnição regulável (7cm) e dobradiças invisíveis. Os batentes e guarnições foram desenvolvidos para reduzir ou eliminar riscos de umidade. Não amarelam com o tempo. Medidas especiais sob consulta.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Spec Modal overlay */}
      {activeSpecModel && (() => {
        const specs = getLineSpecs(activeSpecModel.line);
        return (
          <div className="spec-modal-overlay" onClick={() => setActiveSpecModel(null)}>
            <div className="spec-modal-card" onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="spec-modal-header">
                <div className="header-info">
                  <span className="spec-modal-badge">{activeSpecModel.lineLabel}</span>
                  <h2>{activeSpecModel.name}</h2>
                </div>
                <button className="spec-modal-close" onClick={() => setActiveSpecModel(null)} aria-label="Fechar">×</button>
              </div>

              {/* Modal Body */}
              <div className="spec-modal-body">
                <div className="spec-modal-grid">
                  
                  {/* Photo panel */}
                  <div className="spec-modal-photo-panel">
                    <img 
                      src={activeSpecModel.image} 
                      alt={activeSpecModel.name}
                      onError={(e) => { e.target.src = "/images/laminated-door.png"; }}
                    />
                  </div>

                  {/* Details panel */}
                  <div className="spec-modal-details-panel">
                    <h3 className="section-title">Especificações de Fábrica</h3>
                    
                    <ul className="specs-detail-list">
                      {specs && Object.entries(specs).filter(([key]) => key !== 'extra').map(([key, value]) => (
                        <li key={key}>
                          <strong>{{
                            composicao: 'Composição',
                            material: 'Material / Capa',
                            batente: 'Batente',
                            guarnicao: 'Guarnição',
                            acabamento: 'Pintura / Acabamento',
                            sistema: 'Sistema de Montagem',
                            kit: 'Kit Incluso',
                            enchimento: 'Enchimento',
                            embalagem: 'Embalagem',
                            especificacoes: 'Atenção',
                            dimensoes: 'Dimensões Padrão',
                            estrutura: 'Estrutura Interior',
                            frisos: 'Frisos Disponíveis',
                          }[key] || key}:</strong>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>

                    {specs.extra && (
                      <div className="spec-modal-notice">
                        <Sparkles size={16} className="notice-icon" />
                        <p>{specs.extra}</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Modal Footer */}
              <div className="spec-modal-footer">
                <button className="btn-modal-close" onClick={() => setActiveSpecModel(null)}>Fechar</button>
                <a 
                  href={`https://wa.me/5546991012844?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20modelo%20${encodeURIComponent(activeSpecModel.name)}%20da%20${encodeURIComponent(activeSpecModel.lineLabel)}.%20Com%20as%20especificações%20de:%20${encodeURIComponent(specs.material)}.`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-modal-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        );
      })()}

      <style>{`
        /* Banner Styles */
        .products-banner {
          position: relative;
          background: linear-gradient(135deg, #1e0202 0%, #350101 50%, #150000 100%);
          color: var(--text-white);
          padding: 8.5rem 0 5.5rem;
          text-align: center;
          overflow: hidden;
        }

        .products-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(30, 2, 2, 0.88), rgba(21, 0, 0, 0.94)), url('/images/solid-wood-door.png');
          background-size: cover;
          background-position: center;
          opacity: 0.45;
          z-index: 1;
        }

        .products-banner-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, rgba(197, 160, 89, 0) 70%);
          top: -100px;
          right: -100px;
          z-index: 2;
          pointer-events: none;
        }

        .products-banner .container {
          position: relative;
          z-index: 3;
        }

        .products-banner-content {
          max-width: 820px;
          margin: 0 auto;
        }

        .banner-subtitle {
          font-family: var(--font-secondary);
          font-size: 0.8rem;
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
          letter-spacing: -0.01em;
        }

        .banner-lead {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--text-light-muted);
          line-height: 1.65;
        }

        /* Explorer Section */
        .products-explorer-section {
          padding: 5rem 0 8rem;
          background-color: var(--bg-light);
          overflow: hidden;
        }

        /* Active Toolbar */
        .explorer-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
          background-color: var(--bg-white);
          padding: 1.25rem 2rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }

        .search-box-wrapper {
          position: relative;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 3.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(81, 1, 1, 0.12);
          background-color: var(--bg-light);
          color: var(--text-main);
          font-size: 0.92rem;
          font-family: var(--font-primary);
          transition: var(--transition-fast);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--accent-gold);
          background-color: var(--bg-white);
          box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.12);
        }

        .clear-search-btn {
          position: absolute;
          right: 1rem;
          background-color: rgba(81, 1, 1, 0.05);
          border: none;
          color: var(--primary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .clear-search-btn:hover {
          background-color: var(--primary);
          color: var(--text-white);
        }

        .sort-box-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .sort-icon {
          color: var(--accent-gold-dark);
        }

        .sort-label {
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .sort-select {
          padding: 0.75rem 1.5rem 0.75rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(81, 1, 1, 0.12);
          background-color: var(--bg-light);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          outline: none;
          transition: var(--transition-fast);
        }

        .sort-select:focus {
          border-color: var(--accent-gold);
          background-color: var(--bg-white);
        }

        /* Filter Tabs */
        .filters-tabs-container {
          margin-bottom: 2.5rem;
          width: 100%;
          overflow-x: auto;
          white-space: nowrap;
          cursor: grab;
          scrollbar-width: thin;
          scrollbar-color: rgba(81, 1, 1, 0.2) transparent;
          padding-bottom: 6px;
        }

        .filters-tabs-container::-webkit-scrollbar {
          height: 4px;
        }

        .filters-tabs-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .filters-tabs-container::-webkit-scrollbar-thumb {
          background-color: rgba(81, 1, 1, 0.2);
          border-radius: 4px;
        }

        .filters-tabs-container::-webkit-scrollbar-thumb:hover {
          background-color: rgba(81, 1, 1, 0.4);
        }

        .filters-tabs-container:active {
          cursor: grabbing;
        }

        .filters-tabs {
          display: inline-flex;
          gap: 0.75rem;
          padding-bottom: 0.5rem;
        }

        .filter-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-muted);
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }

        .filter-tab-btn:hover {
          border-color: rgba(197, 160, 89, 0.4);
          color: var(--primary);
          transform: translateY(-1px);
        }

        .filter-tab-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--text-white);
        }

        .tab-count-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(81, 1, 1, 0.08);
          color: var(--primary);
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 20px;
          padding: 0.15rem 0.5rem;
          transition: var(--transition-fast);
        }

        .filter-tab-btn.active .tab-count-badge {
          background-color: rgba(255, 255, 255, 0.2);
          color: var(--text-white);
        }

        /* Results Info Bar */
        .results-info-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 0.5rem;
        }

        .results-count-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }

        .search-query-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(197, 160, 89, 0.12);
          color: var(--accent-gold-dark);
          border: 1px solid rgba(197, 160, 89, 0.25);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .tag-remove-btn {
          background: none;
          border: none;
          color: inherit;
          font-size: 1.15rem;
          cursor: pointer;
          font-weight: 400;
          line-height: 1;
        }

        /* Grid & Cards */
        .models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 4.5rem;
        }

        .model-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }

        .model-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(197, 160, 89, 0.3);
        }

        .model-img-wrapper {
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

        .model-img {
          max-width: 75%;
          max-height: 260px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          transition: var(--transition-smooth);
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.18));
        }

        .model-card:hover .model-img {
          transform: scale(1.06) translateY(-4px);
          filter: drop-shadow(0 16px 32px rgba(0,0,0,0.22));
        }

        .model-line-tag-overlay {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background-color: rgba(81, 1, 1, 0.85);
          color: var(--text-white);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-secondary);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .model-card-body {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .model-card-line-label {
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .model-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 0.85rem;
        }

        .model-card-divider {
          width: 40px;
          height: 2px;
          background-color: var(--accent-gold);
          margin-bottom: 1.25rem;
        }

        .model-card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }

        /* Tag Specs inside Cards */
        .model-specs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .model-spec-tag {
          font-size: 0.72rem;
          font-weight: 700;
          background-color: rgba(81, 1, 1, 0.04);
          border: 1px solid rgba(81, 1, 1, 0.06);
          color: var(--primary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        /* Card Action Row & Buttons */
        .model-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
          width: 100%;
          margin-top: auto;
        }

        .model-specs-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background-color: var(--bg-white);
          color: var(--text-main);
          border: 1.5px solid var(--border-light);
          padding: 0.75rem 0.5rem;
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .model-specs-btn:hover {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
          color: var(--primary-dark);
          transform: translateY(-1px);
        }

        .model-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background-color: var(--bg-light);
          color: var(--primary);
          border: 1.5px solid var(--primary);
          padding: 0.75rem 0.5rem;
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .model-whatsapp-btn:hover {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--text-white) !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(81, 1, 1, 0.15);
        }

        /* Spec Modal Styles */
        .spec-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(21, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeInOverlay 0.25s ease-out;
        }

        .spec-modal-card {
          background-color: var(--bg-white);
          width: 90%;
          max-width: 860px;
          max-height: 90vh;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 50px rgba(21, 0, 0, 0.3);
          animation: slideInCard 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .spec-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2rem;
          background-color: var(--primary-dark);
          color: var(--text-white);
          border-bottom: 2px solid var(--accent-gold);
          text-align: left;
        }

        .spec-modal-header .header-info h2 {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 800;
          color: var(--text-white);
          margin: 0.25rem 0 0;
          letter-spacing: -0.01em;
        }

        .spec-modal-badge {
          font-family: var(--font-secondary);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .spec-modal-close {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 2.25rem;
          cursor: pointer;
          line-height: 1;
          transition: var(--transition-fast);
          padding: 0;
          margin: 0;
        }

        .spec-modal-close:hover {
          color: var(--text-white);
          transform: scale(1.1);
        }

        .spec-modal-body {
          padding: 2.25rem;
          overflow-y: auto;
          flex-grow: 1;
        }

        .spec-modal-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.5fr;
          gap: 2.5rem;
        }

        .spec-modal-photo-panel {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-light);
          background: linear-gradient(160deg, #f5f2ee 0%, #ede8e0 50%, #e8e2d8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 280px;
          max-height: 420px;
          padding: 1.5rem;
        }

        .spec-modal-photo-panel img {
          height: 100%;
          object-fit: contain;
          max-height: 380px;
        }

        .spec-modal-details-panel {
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .spec-modal-details-panel .section-title {
          font-size: 1.05rem;
          font-weight: 750;
          color: var(--primary-dark);
          margin: 0 0 1.25rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-bottom: 2px solid rgba(81, 1, 1, 0.08);
          padding-bottom: 0.5rem;
        }

        .specs-detail-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 0 0 1.5rem;
          padding: 0;
        }

        .specs-detail-list li {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          line-height: 1.45;
          border-bottom: 1px solid rgba(81, 1, 1, 0.04);
          padding-bottom: 0.4rem;
        }

        .specs-detail-list li strong {
          color: var(--primary);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.15rem;
        }

        .specs-detail-list li span {
          color: var(--text-main);
          font-weight: 500;
        }

        .spec-modal-notice {
          display: flex;
          gap: 0.75rem;
          background-color: rgba(197, 160, 89, 0.06);
          border-left: 3px solid var(--accent-gold);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          align-items: flex-start;
          text-align: left;
        }

        .spec-modal-notice .notice-icon {
          color: var(--accent-gold);
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        .spec-modal-notice p {
          font-size: 0.8rem;
          line-height: 1.4;
          color: var(--text-muted);
          margin: 0;
          font-style: italic;
        }

        .spec-modal-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2rem;
          background-color: var(--bg-light);
          border-top: 1px solid var(--border-light);
        }

        .btn-modal-close {
          background: none;
          border: 1.5px solid var(--text-muted);
          color: var(--text-muted);
          padding: 0.65rem 1.5rem;
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-modal-close:hover {
          background-color: var(--text-muted);
          color: var(--text-white);
        }

        .btn-modal-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background-color: var(--primary);
          color: var(--text-white);
          border: 1.5px solid var(--primary);
          padding: 0.65rem 1.5rem;
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 12px rgba(81, 1, 1, 0.15);
        }

        .btn-modal-whatsapp:hover {
          background-color: var(--primary-light);
          border-color: var(--primary-light);
          color: var(--text-white) !important;
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInCard {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Modal Responsive styling */
        @media (max-width: 768px) {
          .spec-modal-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .spec-modal-photo-panel {
            min-height: 180px;
            max-height: 220px;
          }

          .spec-modal-body {
            padding: 1.5rem;
          }

          .spec-modal-card {
            width: 92%;
            max-height: 92vh;
          }

          .spec-modal-footer {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
            gap: 0.75rem;
            padding: 1rem 1.5rem;
          }

          .btn-modal-close, .btn-modal-whatsapp {
            width: 100%;
            padding: 0.75rem;
            font-size: 0.85rem;
          }
        }

        .model-whatsapp-btn:hover {
          background-color: var(--primary-light) !important;
          border-color: var(--primary-light) !important;
          color: var(--text-white) !important;
          transform: translateY(-2px);
        }

        /* Empty State */
        .models-empty-state {
          text-align: center;
          background-color: var(--bg-white);
          border: 1px dashed var(--border-light);
          padding: 5rem 2rem;
          border-radius: var(--radius-lg);
          margin-bottom: 4.5rem;
        }

        .empty-state-icon {
          color: var(--accent-gold);
          margin-bottom: 1.5rem;
        }

        .models-empty-state h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.75rem;
        }

        .models-empty-state p {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 500px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        /* Notice Box */
        .custom-notice-box {
          background: linear-gradient(135deg, #FAF9F6 0%, #f3efe6 100%);
          border: 1px solid var(--accent-gold);
          border-left: 5px solid var(--accent-gold);
          padding: 3rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          text-align: left;
        }

        .notice-icon-box {
          background-color: var(--primary);
          color: var(--text-white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(81, 1, 1, 0.15);
        }

        .notice-text h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.75rem;
        }

        .notice-text p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        /* RESPONSIVE LAYOUT MEDIA QUERIES */
        @media (max-width: 1024px) {
          .models-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .explorer-toolbar {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
            padding: 1.5rem;
          }

          .sort-box-wrapper {
            justify-content: space-between;
          }
          
          .custom-notice-box {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2.25rem;
          }

          .notice-icon-box {
            margin: 0;
          }
        }

        @media (max-width: 480px) {
          .models-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .products-banner {
            padding: 7rem 0 4.5rem;
          }

          .results-info-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .custom-notice-box {
            padding: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
