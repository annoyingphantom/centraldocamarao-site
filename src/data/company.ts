import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock,
  Factory,
  Fish,
  Globe2,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

export const company = {
  publicBrand: "Central do Camarão",
  legalName: "CAOA R F CAMARAO NO ATACADO EIRELI",
  tradeName: "JR CAMARAO NO ATACADO",
  cnpj: "35.590.632/0001-37",
  openingDate: "22/11/2019",
  foundingYear: "2019",
  domain: "centraldocamaraoatacado.com.br",
  email: "contato@centraldocamaraoatacado.com.br",
  businessDescription:
    "Distribuição de camarão salgado de qualidade para restaurantes, buffets, mercados, distribuidores e revendedores.",
  mainProduct: "Camarão salgado 12g em caixas de 25kg",
  operationVolume: "500kg a 2 toneladas distribuídas mensalmente",
  address: "Rua Bolívia, 61, Ananindeua - PA, 67115-120, Brasil",
  pickupHours: "08:00 às 17:00",
  phone: "+55 91 98098-5447",
  whatsapp: "+55 91 98098-5447",
  whatsappUrl: "https://wa.me/5591980985447",
  instagramUrl: "https://www.instagram.com/central.docamarao",
  facebookUrl: "https://www.facebook.com/acentral.docamarao",
  googleBusinessProfileUrl: "#perfil-google-empresa-pendente",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Bol%C3%ADvia%2C%2061%2C%20Ananindeua%20-%20PA%2C%2067115-120%2C%20Brasil",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Rua%20Bol%C3%ADvia%2C%2061%2C%20Ananindeua%20-%20PA%2C%2067115-120%2C%20Brasil&output=embed",
};

export const navigation = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Regiões atendidas", href: "/produtos#regioes" },
  { label: "Contato", href: "/contato" },
];

export const productImages = [
  "/images/camarao-salgado-real.jpg",
  "/images/hero-camarao-real.jpg",
  "/images/camarao-close-real.jpg",
  "/images/drive/drive-19.jpg",
  "/images/drive/drive-20.jpg",
  "/images/drive/drive-21.jpg",
];

export const products = [
  {
    caliber: "9g",
    title: "Camarão salgado 9g",
    image: productImages[0],
    packageInfo: "Atacado sob consulta",
    description: "Calibre comercial para operações de revenda e compras recorrentes.",
  },
  {
    caliber: "10g",
    title: "Camarão salgado 10g",
    image: productImages[1],
    packageInfo: "Atacado sob consulta",
    description: "Opção comercial para restaurantes, buffets, mercados e distribuidores.",
  },
  {
    caliber: "12g",
    title: "Camarão salgado 12g",
    image: productImages[2],
    packageInfo: "Produto principal • caixas de 25kg",
    featured: true,
    description: "Principal linha de distribuição da empresa, fornecida em caixas de 25kg.",
  },
  {
    caliber: "14g",
    title: "Camarão salgado 14g",
    image: productImages[3],
    packageInfo: "Atacado sob consulta",
    description: "Calibre com boa apresentação para abastecimento comercial e revenda.",
  },
  {
    caliber: "16g",
    title: "Camarão salgado 16g",
    image: productImages[4],
    packageInfo: "Atacado sob consulta",
    description: "Linha comercial para compradores que priorizam maior presença visual do produto.",
  },
];

export const regionsServed = [
  {
    name: "Pará",
    description: "Atendimento regional com retirada em Ananindeua/PA e negociação direta pelo WhatsApp.",
    detail: `Retirada: ${company.address}. Horário: ${company.pickupHours}.`,
  },
  {
    name: "Santa Catarina",
    description: "Atendimento para compradores profissionais, distribuidores e revendedores sob consulta logística.",
    detail: "Condições definidas conforme volume, disponibilidade e rota de distribuição.",
  },
  {
    name: "São Paulo",
    description: "Distribuição para restaurantes, buffets, mercados, distribuidores e revendedores.",
    detail: "Cotação direta pelo WhatsApp conforme volume, disponibilidade e prazo de compra.",
  },
  {
    name: "Outros estados sob consulta",
    description: "Análise comercial para operações B2B fora das regiões principais de atendimento.",
    detail: "Informe cidade, volume estimado e frequência de compra para avaliação da rota.",
  },
];

export const businessAdvantages = [
  "Fornecimento regular",
  "Condições comerciais competitivas",
  "Atendimento direto e ágil",
  "Consistência e qualidade",
];

export const highlights = [
  {
    icon: BadgeCheck,
    title: "Qualidade consistente",
    text: "Distribuição de camarão salgado com padrão adequado para operações que dependem de regularidade.",
  },
  {
    icon: Factory,
    title: "Atacado especializado",
    text: "Atendimento voltado para restaurantes, buffets, mercados, distribuidores e revendedores.",
  },
  {
    icon: PackageCheck,
    title: "Produto em volume",
    text: "Produto principal em caixas de 25kg para planejamento de estoque e compra comercial.",
  },
  {
    icon: Truck,
    title: "Atendimento regional",
    text: "Operação com atendimento para Pará, Santa Catarina, São Paulo e outros estados sob consulta.",
  },
];

export const businessFacts = [
  { icon: Building2, label: "Marca pública", value: company.publicBrand },
  { icon: ShieldCheck, label: "Razão social", value: company.legalName },
  { icon: BadgeCheck, label: "Nome fantasia no CNPJ", value: company.tradeName },
  { icon: PackageCheck, label: "CNPJ", value: company.cnpj },
  { icon: CalendarDays, label: "Data de abertura", value: company.openingDate },
  { icon: Globe2, label: "Domínio oficial", value: company.domain },
  { icon: Fish, label: "Produto principal", value: company.mainProduct },
  { icon: Truck, label: "Volume mensal", value: company.operationVolume },
  { icon: MapPin, label: "Retirada Belém/PA", value: company.address },
  { icon: Clock, label: "Horário de retirada", value: company.pickupHours },
  { icon: Phone, label: "WhatsApp", value: company.whatsapp },
  { icon: Mail, label: "E-mail", value: company.email },
];

export const businessNumbers = [
  { label: "Operando desde", value: company.foundingYear, note: `Atuação iniciada em ${company.openingDate}` },
  { label: "Distribuição mensal", value: "500kg a 2t", note: "Volume variável conforme demanda e disponibilidade" },
  { label: "Produto principal", value: "12g", note: "Camarão salgado em caixas de 25kg" },
  { label: "Regiões", value: "PA • SC • SP", note: "Pará, Santa Catarina e São Paulo" },
];

export const structureItems = [
  {
    title: "Atendimento B2B",
    text: "Fornecimento para restaurantes, buffets, mercados, distribuidores e revendedores.",
    icon: Users,
  },
  {
    title: "Retirada em Ananindeua/PA",
    text: `${company.address}. Atendimento para retirada das ${company.pickupHours}.`,
    icon: MapPin,
  },
  {
    title: "Canais oficiais",
    text: `WhatsApp ${company.whatsapp}, e-mail ${company.email} e domínio ${company.domain}.`,
    icon: Globe2,
  },
];

export const faqs = [
  {
    question: "Qual é o produto principal da Central do Camarão?",
    answer: `O produto principal é ${company.mainProduct}, voltado para compras em volume por empresas e revendedores.`,
  },
  {
    question: "Quais regiões são atendidas?",
    answer: "A operação atende Pará, Santa Catarina, São Paulo e outros estados sob consulta comercial e logística.",
  },
  {
    question: "Como solicitar uma cotação?",
    answer:
      "A cotação deve ser solicitada pelo WhatsApp oficial, informando região, volume desejado, tipo de cliente e prazo de compra.",
  },
  {
    question: "Qual é o volume mensal de distribuição?",
    answer: `A operação distribui aproximadamente ${company.operationVolume}, conforme disponibilidade e demanda mensal.`,
  },
  {
    question: "Onde é feita a retirada no Pará?",
    answer: `A retirada para Belém/PA ocorre em ${company.address}, no horário de ${company.pickupHours}.`,
  },
  {
    question: "Qual é a identificação legal da empresa?",
    answer: `A razão social é ${company.legalName}, nome fantasia ${company.tradeName}, CNPJ ${company.cnpj}.`,
  },
];

