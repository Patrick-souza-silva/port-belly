import React, { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal, MessageSquare, Info, Filter, ArrowUpDown } from 'lucide-react';

export default function ModelsPage() {
  const [selectedLine, setSelectedLine] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [activeSpecModel, setActiveSpecModel] = useState(null);

  // Helper to map the official technical specs of each line from the website
  const getLineSpecs = (line) => {
    switch (line) {
      case 'belly':
        return {
          ambiente: "Interno ou Úmido (Áreas Molhadas)",
          material: "MDF 6mm Ultra (resistente à umidade / hidrófugo)",
          estrutura: "Semi-oca com reforços internos, montante em madeira seca em estufa",
          caixilho: "MDF Ultra Hidrófugo de alta densidade ou PVC (à prova d'água)",
          pintura: "Pintura Laca P.U. Premium (Marca Sayerlack)",
          fechadura: "Padrão, de rolete com puxador inox ou fechadura eletrônica digital",
          sistema: "Dobradiças invisíveis premium, Sistema Pivotante ou de Correr",
          vistas: "Fabricadas em PVC laqueado, 100% resistentes à água (07 cm ou 10 cm)",
          extra: "As portas são entregues completas na obra montadas no Kit Porta Pronta. A indústria conta com equipe de montagem própria."
        };
      case 'inovatta':
        return {
          ambiente: "Externo ou Fachadas (Proteção reforçada)",
          material: "MDF 6mm Ultra (com proteção extra contra intempéries e umidade)",
          estrutura: "Semi-oca reforçada de alta solidez com montante em madeira selecionada",
          caixilho: "MDF Ultra resistente com isolamento estanque ou PVC",
          pintura: "Laca P.U. solar-shield especial (Marca Sayerlack)",
          fechadura: "Padrão de segurança, rolete com puxador inox escovado ou digital",
          sistema: "Pivotante de alta estabilidade ou dobradiças invisíveis reforçadas",
          vistas: "PVC laqueado ultra-resistente e imunizado (07 cm ou 10 cm)",
          extra: "Esquadrias de alto padrão para fachada e portas externas entregues completas."
        };
      case 'madeira':
        return {
          ambiente: "Externo ou Fachadas Nobres / Interno",
          material: "100% Madeira Maciça Nobre Legítima (Cedro Arana nobre)",
          estrutura: "Maciça maciça (junções finger-joint de alta estabilidade contra empenamento)",
          caixilho: "100% Cedro Arana maciço com borrachas de amortecimento acústico alemãs",
          pintura: "Verniz Cetol (Sayerlack) com triplo filtro solar e hidrorrepelência",
          fechadura: "Rolete de latão de alta performance com puxador inox ou fechadura externa nobre",
          sistema: "Pivotante de alta capacidade com pino inox ou dobradiças maciças",
          vistas: "Madeira nobre maciça regulável combinando (07 cm ou 10 cm)",
          extra: "Madeira selecionada estufa com tratamento de imunização anti-cupim permanente."
        };
      case 'laminada':
        return {
          ambiente: "Interno (Residencial e Comercial)",
          material: "Lâminas nobres de madeira natural (Curupixá, Freijó ou Tauari selecionado)",
          estrutura: "Semi-sólida com Pine-Core (sarrafeamento compacto de pinus seco em estufa)",
          caixilho: "MDF Ultra resistente revestido na lâmina de madeira natural correspondente",
          pintura: "Verniz especial de cura U.V. industrial (toque aveludado e anti-risco)",
          fechadura: "Fechadura interna premium cromada, escovada ou digital",
          sistema: "Dobradiças de encaixe silencioso, sistema de correr embutido ou pivotante leve",
          vistas: "MDF Ultra regulável revestido na mesma lâmina nobre (07 cm ou 10 cm)",
          extra: "Acabamento natural de altíssima fidelidade e uniformidade visual de veios."
        };
      case 'contemporanea':
        return {
          ambiente: "Interno (Residencial e Comercial moderno)",
          material: "Chapa premium de MDF 6mm de alta densidade (Duratex)",
          estrutura: "Semi-oca com montantes estruturais secos em estufa e reforço para fechadura",
          caixilho: "MDF Ultra resistente de alta densidade ou PVC",
          pintura: "Pintura Laca P.U. industrial em cabine pressurizada (Marca Sayerlack)",
          fechadura: "Fechadura de rolete com puxador inox, convencional ou eletrônica",
          sistema: "Dobradiças invisíveis ocultas, pivotante ou de correr",
          vistas: "PVC laqueado ou MDF Ultra (regulável em 07 cm ou 10 cm)",
          extra: "Frisos usinados em CNC industrial de alta definição com pintura impecável."
        };
      default:
        return null;
    }
  };

  // Banco de dados completo e estruturado de todos os 44 modelos de portas
  const doorModels = useMemo(() => [
    // --- LINHA BELLY (4 modelos) ---
    {
      id: "belly-01",
      name: "Belly 01",
      code: "BELLY-01",
      line: "belly",
      lineLabel: "Linha Belly",
      image: "/images/linhas/linha-belly/belly-01jpg.jpg",
      description: "Porta frisada laqueada premium com design vertical minimalista e chapa MDF Ultra resistente à umidade.",
      specs: ["MDF Ultra Hidrófugo", "Pintura Laca P.U.", "Friso Reto Usinado"]
    },
    {
      id: "belly-02",
      name: "Belly 02",
      code: "BELLY-02",
      line: "belly",
      lineLabel: "Linha Belly",
      image: "/images/linhas/linha-belly/belly-02jpg.jpg",
      description: "Modelo clássico de porta com frisos horizontais simétricos em laca de altíssima cobertura protetiva.",
      specs: ["MDF Ultra Hidrófugo", "Pintura Laca P.U.", "Frisos Horizontais"]
    },
    {
      id: "belly-03",
      name: "Belly 03",
      code: "BELLY-03",
      line: "belly",
      lineLabel: "Linha Belly",
      image: "/images/linhas/linha-belly/belly-03jpg.jpg",
      description: "Porta laqueada com frisos geométricos sofisticados, ideal para ambientes internos modernos.",
      specs: ["MDF Ultra Hidrófugo", "Pintura Laca P.U.", "Usinagem CNC de Precisão"]
    },
    {
      id: "belly-04",
      name: "Belly 04",
      code: "BELLY-04",
      line: "belly",
      lineLabel: "Linha Belly",
      image: "/images/linhas/linha-belly/belly-04jpg.jpg",
      description: "Design arrojado com frisos múltiplos paralelos. Excelente vedação acústica e acabamento de alto luxo.",
      specs: ["MDF Ultra Hidrófugo", "Pintura Laca P.U. Premium", "Isolamento Acústico"]
    },

    // --- LINHA INOVATTA (6 modelos) ---
    {
      id: "inov-800",
      name: "Inovatta 800",
      code: "INOV-800",
      line: "inovatta",
      lineLabel: "Linha Inovatta",
      image: "/images/linhas/linha-inovatta/inov-800jpg.jpg",
      description: "Porta externa de alta engenharia com face de MDF 6mm Ultra resistente às intempéries climáticas.",
      specs: ["MDF 6mm Ultra", "Pintura Laca P.U. Impermeável", "Estrutura Semi-oca Reforçada"]
    },
    {
      id: "inov-801",
      name: "Inovatta 801",
      code: "INOV-801",
      line: "inovatta",
      lineLabel: "Linha Inovatta",
      image: "/images/linhas/linha-inovatta/inov-801jpg.jpg",
      description: "Modelo premium com frisos largos usinados em MDF ultra-espesso. Indicado para entradas residenciais nobres.",
      specs: ["MDF 6mm Ultra", "Núcleo Maciço Compensado", "Frisos Largos Usinados"]
    },
    {
      id: "inov-802",
      name: "Inovatta 802",
      code: "INOV-802",
      line: "inovatta",
      lineLabel: "Linha Inovatta",
      image: "/images/linhas/linha-inovatta/inov-802jpg.jpg",
      description: "Porta estruturada de alta estabilidade geométrica com revestimento melânico resistente a riscos.",
      specs: ["MDF 6mm Ultra", "Pintura Laca P.U. Impermeável", "Uso Interno e Externo"]
    },
    {
      id: "inov-803",
      name: "Inovatta 803",
      code: "INOV-803",
      line: "inovatta",
      lineLabel: "Linha Inovatta",
      image: "/images/linhas/linha-inovatta/inov-803jpg.jpg",
      description: "Sofisticação e blindagem climática com frisos horizontais intercalados. Alta solidez contra umidade.",
      specs: ["MDF 6mm Ultra", "Resistente a Intempéries", "Laca P.U. Protetiva"]
    },
    {
      id: "inov-804",
      name: "Inovatta 804",
      code: "INOV-804",
      line: "inovatta",
      lineLabel: "Linha Inovatta",
      image: "/images/linhas/linha-inovatta/inov-804jpg.jpg",
      description: "Porta externa com proteção reforçada em MDF Ultra e pintura anti-mofo. Design minimalista.",
      specs: ["MDF 6mm Ultra", "Pintura Laca P.U.", "Estrutura Interior Reforçada"]
    },
    {
      id: "inov-805",
      name: "Inovatta 805",
      code: "INOV-805",
      line: "inovatta",
      lineLabel: "Linha Inovatta",
      image: "/images/linhas/linha-inovatta/inov-805jpg.jpg",
      description: "Porta contemporânea frisada com núcleo de pinus de reflorestamento seco em estufa e laca de alto brilho.",
      specs: ["MDF 6mm Ultra", "Núcleo Ecológico Seco", "Frisos Verticais"]
    },

    // --- LINHA MADEIRA (6 modelos) ---
    {
      id: "ex-708",
      name: "Madeira EX-708",
      code: "EX-708",
      line: "madeira",
      lineLabel: "Linha Madeira",
      image: "/images/linhas/linha-madeira/ex-708jpg.jpg",
      description: "Porta de entrada imponente usinada em madeira maciça nobre. Máxima segurança estrutural.",
      specs: ["Madeira Maciça Nobre", "Secagem Controlada em Estufa", "Altíssima Resistência Mecânica"]
    },
    {
      id: "ex-709",
      name: "Madeira EX-709",
      code: "EX-709",
      line: "madeira",
      lineLabel: "Linha Madeira",
      image: "/images/linhas/linha-madeira/ex-709jpg.jpeg",
      description: "Porta maciça legítima com almofadas usinadas em relevo clássico de alto padrão arquitetônico.",
      specs: ["Madeira Maciça Legítima", "Usinagem CNC Almofadada", "Isolamento Acústico Natural"]
    },
    {
      id: "ex-710",
      name: "Madeira EX-710",
      code: "EX-710",
      line: "madeira",
      lineLabel: "Linha Madeira",
      image: "/images/linhas/linha-madeira/ex-710jpg.jpeg",
      description: "Design clássico com arcos suaves moldados diretamente em blocos encorpados de madeira nobre.",
      specs: ["Madeira Maciça Nobre", "Almofadas Arqueadas", "Secagem Controlada Estufa"]
    },
    {
      id: "ex-711",
      name: "Madeira EX-711",
      code: "EX-711",
      line: "madeira",
      lineLabel: "Linha Madeira",
      image: "/images/linhas/linha-madeira/ex-711jpg.jpeg",
      description: "Alinhamento perfeito de fibras e montagem milimétrica que previne empenamentos climáticos.",
      specs: ["Madeira Maciça Legítima", "Junção Finger-Joint Fina", "Tratamento Anti-Cupim"]
    },
    {
      id: "ex-712",
      name: "Madeira EX-712",
      code: "EX-712",
      line: "madeira",
      lineLabel: "Linha Madeira",
      image: "/images/linhas/linha-madeira/ex-712jpg.jpeg",
      description: "Modelo maciço colonial com ripas e travessas horizontais robustas, perfeito para fachadas.",
      specs: ["Madeira Maciça Nobre", "Usinagem Colonial", "Alta Blindagem Física"]
    },
    {
      id: "ex-713",
      name: "Madeira EX-713",
      code: "EX-713",
      line: "madeira",
      lineLabel: "Linha Madeira",
      image: "/images/linhas/linha-madeira/ex-713jpg.jpeg",
      description: "Imponência secular e isolamento térmico sem precedentes em blocos puros usinados sob medida.",
      specs: ["Madeira Maciça Legítima", "Acabamento Premium Natural", "Entrada Nobre Fachada"]
    },

    // --- LINHA BELÍSSIMA LAMINADA (14 modelos) ---
    {
      id: "vl-10-lisa",
      name: "Belíssima VL-10 Lisa",
      code: "VL-10-LISA",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vl-10-lisajpg.jpg",
      description: "Superfície lisa com folha nobre de Curupixá natural selecionada. Toque aveludado sob luz.",
      specs: ["Lâmina Curupixá Natural", "Verniz UV Protetivo", "Face Lisa Homogênea"]
    },
    {
      id: "vr-100",
      name: "Belíssima VR-100",
      code: "VR-100",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-100jpg.jpeg",
      description: "Revestida em lâmina de Freijó natural com veios orientados horizontalmente. Luxo arquitetônico.",
      specs: ["Lâmina Freijó Natural", "Verniz UV de Alta Resistência", "Veios Horizontais Selecionados"]
    },
    {
      id: "vr-101",
      name: "Belíssima VR-101",
      code: "VR-101",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-101jpg.jpeg",
      description: "Lâmina natural de Tauari nobre frisada com precisão. Combina calor da madeira e design moderno.",
      specs: ["Lâmina Tauari Natural", "Frisos Delicados Usinados", "Acabamento Verniz UV Semi-Brilho"]
    },
    {
      id: "vr-102",
      name: "Belíssima VR-102",
      code: "VR-102",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-102jpg.jpeg",
      description: "Folha com lâmina natural de Angelim nobre. Veios exuberantes e alta durabilidade estrutural.",
      specs: ["Lâmina Angelim Natural", "Veios Marcados Exclusivos", "Verniz UV Curado Fábrica"]
    },
    {
      id: "vr-103",
      name: "Belíssima VR-103",
      code: "VR-103",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-103jpg.jpeg",
      description: "Madeira laminada nobre com frisos horizontais largos que acentuam a largura dos portais internos.",
      specs: ["Lâminas Nobres Selecionadas", "Frisos Largos Elegantes", "Capa Seladora UV Atóxica"]
    },
    {
      id: "vr-109",
      name: "Belíssima VR-109",
      code: "VR-109",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-109jpg.jpeg",
      description: "Usinagem frisada geométrica sobre lâminas de Curupixá natural. Textura rica e acabamento sedoso.",
      specs: ["Lâmina Curupixá Natural", "Padrão Geométrico Exclusivo", "Cura UV de Alta Proteção"]
    },
    {
      id: "vr-113",
      name: "Belíssima VR-113",
      code: "VR-113",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-113jpg.jpeg",
      description: "Friso vertical excêntrico usinado milimetricamente que confere elegância assimétrica.",
      specs: ["Lâmina Nobre Natural", "Friso Vertical Assimétrico", "Estabilidade Física Reforçada"]
    },
    {
      id: "vr-114",
      name: "Belíssima VR-114",
      code: "VR-114",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-114jpg.jpeg",
      description: "Sofisticação intemporal com múltiplos frisos horizontais simétricos em verniz UV nobre.",
      specs: ["Lâmina Natural Selecionada", "Múltiplos Frisos Horizontais", "Verniz UV Curado Fábrica"]
    },
    {
      id: "vr-119",
      name: "Belíssima VR-119",
      code: "VR-119",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-119jpg.jpeg",
      description: "Usinagem frisada profunda e uniforme sobre lâmina nobre selecionada. Toque aveludado superior.",
      specs: ["Lâmina Natural de Alta Capa", "Frisos Profundos Usinados", "Cura Verniz UV Anti-Risco"]
    },
    {
      id: "vr-120",
      name: "Belíssima VR-120",
      code: "VR-120",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-120jpg.jpeg",
      description: "Design arrojado com frisos diagonais e horizontais combinados sobre lâmina de Freijó.",
      specs: ["Lâmina Freijó Selecionada", "Usinagem Diagonal CNC", "Tratamento UV de Alto Tráfego"]
    },
    {
      id: "vr-122",
      name: "Belíssima VR-122",
      code: "VR-122",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-122jpg.jpeg",
      description: "Simetria perfeita e frisos retos múltiplos. Moldura visual clean para lofts e apartamentos.",
      specs: ["Lâmina Nobre Curupixá", "Design Clean Minimalista", "Verniz UV Fosco Premium"]
    },
    {
      id: "vr-124",
      name: "Belíssima VR-124",
      code: "VR-124",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-124jpg.jpeg",
      description: "Combinação harmoniosa de veios cruzados. Porta de grande impacto estético para salas de estar.",
      specs: ["Lâmina Selecionada Premium", "Veios Cruzados Naturais", "Verniz UV Alto Brilho"]
    },
    {
      id: "vr-137",
      name: "Belíssima VR-137",
      code: "VR-137",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-137jpg.jpeg",
      description: "Frisos geométricos refinados e capa seladora impermeável. Toque de classe arquitetônica secular.",
      specs: ["Lâmina Natural Nobre", "Frisos Geométricos CNC", "Cura UV de Alta Densidade"]
    },
    {
      id: "vr-138",
      name: "Belíssima VR-138",
      code: "VR-138",
      line: "laminada",
      lineLabel: "Belíssima Laminada",
      image: "/images/linhas/linha-belissima-laminada/vr-138jpg.jpeg",
      description: "Acabamento superficial impecável. Desenvolvida para resistir a riscos e manter a textura original.",
      specs: ["Lâmina Natural Premium", "Verniz UV Anti-Desbotamento", "Uso Interno Residencial"]
    },

    // --- LINHA BELÍSSIMA CONTEMPORÂNEA (14 modelos) ---
    {
      id: "ml-10-lisa",
      name: "Belíssima ML-10 Lisa",
      code: "ML-10-LISA",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/ml-10-lisajpg.jpg",
      description: "Porta interna lisa laqueada. Superfície plana homogênea de altíssima cobertura e sofisticação.",
      specs: ["Superfície Laqueada Lisa", "Pintura Laca P.U. Estufa", "Estabilidade Dimensional Excelente"]
    },
    {
      id: "mr-100",
      name: "Belíssima MR-100",
      code: "MR-100",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-100jpg.jpeg",
      description: "Porta com friso horizontal largo em laca P.U. branca premium. Design clean e atemporal.",
      specs: ["Laca P.U. Branca Premium", "Friso Horizontal Largo", "Estrutura Interior Reforçada"]
    },
    {
      id: "mr-101",
      name: "Belíssima MR-101",
      code: "MR-101",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-101jpg.jpeg",
      description: "Porta laqueada com friso vertical central delicado usinado em CNC industrial de alta definição.",
      specs: ["Laca P.U. Premium", "Friso Central CNC", "Núcleo Semi-sólido Seco Estufa"]
    },
    {
      id: "mr-102",
      name: "Belíssima MR-102",
      code: "MR-102",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-102jpg.jpeg",
      description: "Acabamento laqueado em laca P.U. fosca com frisos múltiplos. Alta estabilidade física.",
      specs: ["Laca P.U. Anti-Amarelamento", "Múltiplos Frisos Usinados", "Uso Interno Divisório"]
    },
    {
      id: "mr-103",
      name: "Belíssima MR-103",
      code: "MR-103",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-103jpg.jpeg",
      description: "Porta frisada em laca com divisões geométricas elegantes. Moldura minimalista requintada.",
      specs: ["Pintura Laca em Estufa", "Frisos Geométricos Largos", "Batente de Alto Amortecimento"]
    },
    {
      id: "mr-109",
      name: "Belíssima MR-109",
      code: "MR-109",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr109jpg.jpeg",
      description: "Design frisado excêntrico e pintura em laca premium. Ideal para dormitórios e escritórios modernos.",
      specs: ["Laca P.U. de Alta Camada", "Friso Exclusivo CNC", "Tratamento Acústico Interno"]
    },
    {
      id: "mr-113",
      name: "Belíssima MR-113",
      code: "MR-113",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-113jpg.jpeg",
      description: "Usinagem vertical assimétrica fina sobre chapa de MDF ultra-estabilizado em laca branca.",
      specs: ["MDF de Alta Densidade", "Laca P.U. Acabamento Fino", "Friso Vertical Assimétrico"]
    },
    {
      id: "mr-114",
      name: "Belíssima MR-114",
      code: "MR-114",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-114jpg.jpeg",
      description: "Múltiplos frisos finos paralelos com pintura protetiva P.U. anti-umidade. Elevada simetria.",
      specs: ["Frisos Finos Usinados CNC", "Laca P.U. de Alta Cobertura", "Design Contemporâneo Clean"]
    },
    {
      id: "mr-119",
      name: "Belíssima MR-119",
      code: "MR-119",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-119jpg.jpeg",
      description: "Usinagem frisada em laca P.U. de alta resistência. Toque sedoso e bordas seladas em fábrica.",
      specs: ["Laca P.U. Acabamento Soft", "Bordas Totalmente Seladas", "Núcleo Estrutural Pine-Core"]
    },
    {
      id: "mr-120",
      name: "Belíssima MR-120",
      code: "MR-120",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-120jpg.jpeg",
      description: "Composição de frisos horizontais e diagonais que dão dinamismo visual e luxo geométrico.",
      specs: ["Frisos Diagonais Usinados", "Laca P.U. Estufa Industrial", "Alta Estética Arquitetônica"]
    },
    {
      id: "mr-122",
      name: "Belíssima MR-122",
      code: "MR-122",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-122jpg.jpeg",
      description: "Simetria reta e frisos horizontais duplos em laca premium. Design versátil e sofisticado.",
      specs: ["Laca P.U. Branca Premium", "Frisos Duplos CNC", "Uso Interno Residencial"]
    },
    {
      id: "mr-124",
      name: "Belíssima MR-124",
      code: "MR-124",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-124jpg.jpeg",
      description: "Design clássico-contemporâneo em laca P.U. com frisos múltiplos profundos de grande destaque.",
      specs: ["Laca Premium Estufa", "Frisos Profundos Usinados", "Batentes Reguláveis Suportados"]
    },
    {
      id: "mr-137",
      name: "Belíssima MR-137",
      code: "MR-137",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-137jpg.jpeg",
      description: "Painel laqueado de alta costura arquitetônica com usinagem geométrica impecável. Luxo puro.",
      specs: ["Laca P.U. Branca Soft", "Usinagem Geométrica Fina", "Isolamento Térmico Natural"]
    },
    {
      id: "mr-138",
      name: "Belíssima MR-138",
      code: "MR-138",
      line: "contemporanea",
      lineLabel: "Belíssima Contemporânea",
      image: "/images/linhas/linha-belissima-comtemporanea/mr-138jpg.jpeg",
      description: "Acabamento aveludado e bordas perfeitamente retilíneas. Projetado para emoldurar portas de alto padrão.",
      specs: ["Laca P.U. Anti-Amarelamento", "Bordas Seladas Milimétricas", "Resistente a Ranhuras"]
    }
  ], []);

  // Filtragem e busca reativa de alta velocidade
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

  // Contagem dinâmica de modelos por categoria para a badge de filtros
  const counts = useMemo(() => {
    const total = doorModels.length;
    const belly = doorModels.filter(d => d.line === 'belly').length;
    const inovatta = doorModels.filter(d => d.line === 'inovatta').length;
    const madeira = doorModels.filter(d => d.line === 'madeira').length;
    const laminada = doorModels.filter(d => d.line === 'laminada').length;
    const contemporanea = doorModels.filter(d => d.line === 'contemporanea').length;
    return { total, belly, inovatta, madeira, laminada, contemporanea };
  }, [doorModels]);

  return (
    <div className="page-models">
      {/* Title Banner */}
      <section className="models-banner">
        <div className="models-banner-overlay"></div>
        <div className="models-banner-glow"></div>
        <div className="container">
          <div className="models-banner-content animate-fade-in-up">
            <span className="banner-subtitle">CATÁLOGO COMPLETO</span>
            <h1 className="banner-title">Modelos & Coleções de Portas</h1>
            <p className="banner-lead">
              Navegue interativamente por todas as nossas linhas industriais. Filtre por material, busque modelos específicos e solicite orçamentos diretos de fábrica.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Explorer Section */}
      <section className="models-explorer-section">
        <div className="container">
          
          {/* Active Toolbar: Search + Sort controls */}
          <div className="explorer-toolbar animate-fade-in-up">
            <div className="search-box-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Buscar por código ou modelo (ex: Belly, Inov-800, MR-100)..." 
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
                <option value="name">Nome do Modelo</option>
                <option value="line">Coleção/Linha</option>
              </select>
            </div>
          </div>

          {/* Responsive filter tabs bar */}
          <div className="filters-tabs-container animate-fade-in-up animate-delay-100">
            <div className="filters-tabs">
              <button 
                onClick={() => setSelectedLine('all')} 
                className={`filter-tab-btn ${selectedLine === 'all' ? 'active' : ''}`}
              >
                <span>Todos os Modelos</span>
                <span className="tab-count-badge">{counts.total}</span>
              </button>
              <button 
                onClick={() => setSelectedLine('belly')} 
                className={`filter-tab-btn ${selectedLine === 'belly' ? 'active' : ''}`}
              >
                <span>Linha Belly</span>
                <span className="tab-count-badge">{counts.belly}</span>
              </button>
              <button 
                onClick={() => setSelectedLine('inovatta')} 
                className={`filter-tab-btn ${selectedLine === 'inovatta' ? 'active' : ''}`}
              >
                <span>Linha Inovatta</span>
                <span className="tab-count-badge">{counts.inovatta}</span>
              </button>
              <button 
                onClick={() => setSelectedLine('madeira')} 
                className={`filter-tab-btn ${selectedLine === 'madeira' ? 'active' : ''}`}
              >
                <span>Linha Madeira</span>
                <span className="tab-count-badge">{counts.madeira}</span>
              </button>
              <button 
                onClick={() => setSelectedLine('laminada')} 
                className={`filter-tab-btn ${selectedLine === 'laminada' ? 'active' : ''}`}
              >
                <span>Belíssima Laminada</span>
                <span className="tab-count-badge">{counts.laminada}</span>
              </button>
              <button 
                onClick={() => setSelectedLine('contemporanea')} 
                className={`filter-tab-btn ${selectedLine === 'contemporanea' ? 'active' : ''}`}
              >
                <span>Belíssima Contemporânea</span>
                <span className="tab-count-badge">{counts.contemporanea}</span>
              </button>
            </div>
          </div>

          {/* Results Info Bar */}
          <div className="results-info-bar animate-fade-in-up animate-delay-200">
            <p className="results-count-text">
              Exibindo <strong>{filteredModels.length}</strong> de <strong>{doorModels.length}</strong> modelos encontrados.
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
                      alt={`Porta PortáBelly ${model.name}`} 
                      className="model-img" 
                      loading="lazy"
                      onError={(e) => {
                        // Fallback em caso de falha de carregamento de arquivo
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
              <h3>Nenhum modelo encontrado</h3>
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
              <h3>Acabamentos, Batentes e Guarnições Reguláveis</h3>
              <p>
                Todos os modelos laqueados e laminados acima podem ser adquiridos de forma individual (folha de porta avulsa) ou montados no exclusivo **Kit Porta Pronta PortáBelly** (com batente regulável, alizares de encaixe, borrachas de amortecimento acústico alemãs e dobradiças invisíveis). Projetados sob medida para as espessuras exatas de parede da sua obra.
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
                      <li>
                        <strong>Ambiente recomendado:</strong> 
                        <span>{specs.ambiente}</span>
                      </li>
                      <li>
                        <strong>Material da Folha:</strong> 
                        <span>{specs.material}</span>
                      </li>
                      <li>
                        <strong>Estrutura Interior:</strong> 
                        <span>{specs.estrutura}</span>
                      </li>
                      <li>
                        <strong>Caixilho / Batente:</strong> 
                        <span>{specs.caixilho}</span>
                      </li>
                      <li>
                        <strong>Pintura / Acabamento:</strong> 
                        <span>{specs.pintura}</span>
                      </li>
                      <li>
                        <strong>Fechadura compatível:</strong> 
                        <span>{specs.fechadura}</span>
                      </li>
                      <li>
                        <strong>Sistema suportado:</strong> 
                        <span>{specs.sistema}</span>
                      </li>
                      <li>
                        <strong>Vistas / Guarnições:</strong> 
                        <span>{specs.vistas}</span>
                      </li>
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
        .models-banner {
          position: relative;
          background: linear-gradient(135deg, #1e0202 0%, #350101 50%, #150000 100%);
          color: var(--text-white);
          padding: 8.5rem 0 5.5rem;
          text-align: center;
          overflow: hidden;
        }

        .models-banner-overlay {
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

        .models-banner-glow {
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

        .models-banner .container {
          position: relative;
          z-index: 3;
        }

        .models-banner-content {
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
        .models-explorer-section {
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

        /* Responsive Filter Tabs */
        .filters-tabs-container {
          margin-bottom: 2.5rem;
          width: 100%;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none; /* Firefox */
        }

        .filters-tabs-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
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
          aspect-ratio: 0.72 / 1; /* Aligned with typical vertical door image shapes */
          overflow: hidden;
          background-color: var(--bg-light);
          border-bottom: 1px solid var(--border-light);
        }

        .model-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: var(--transition-smooth);
        }

        .model-card:hover .model-img {
          transform: scale(1.04);
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
          background-color: var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 280px;
          max-height: 400px;
        }

        .spec-modal-photo-panel img {
          width: 100%;
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

        /* Modal Responsive Overlay styling */
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

          .models-banner {
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
