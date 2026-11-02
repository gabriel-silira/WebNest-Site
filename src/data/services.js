const whatsappBase = 'https://wa.me/5519996587333?text='

export const servicePlans = [
  {
    id: 'essencial',
    name: 'Essencial',
    format: 'Landing page',
    headline: 'Uma página para apresentar e converter.',
    summary: 'Uma apresentação objetiva do seu negócio, serviço ou campanha, com caminho claro até o contato.',
    example: 'Uma página para um restaurante apresentar cardápio simples, horário e botão de WhatsApp.',
    price: 1290,
    highlights: ['Até 5 seções', 'Design responsivo', 'Contato por WhatsApp'],
    details: [
      'Página única com até 5 seções de complexidade padrão.',
      'Cardápio simples de até 12 itens, quando fizer sentido para o projeto.',
      'Design personalizado para celular, tablet e computador.',
      'Botões para WhatsApp e outros canais combinados.',
      'SEO básico técnico e publicação.',
      'Até 2 rodadas de revisão dentro do escopo.',
    ],
    message: 'Olá, WebNest! Tenho interesse no plano Essencial para uma landing page. Gostaria de receber uma proposta.',
  },
  {
    id: 'profissional',
    name: 'Profissional',
    format: 'Site institucional',
    headline: 'Mais espaço para contar a história da sua marca.',
    summary: 'Páginas próprias para organizar a empresa, os serviços e as informações que seu cliente procura.',
    example: 'Um escritório com páginas de início, sobre, serviços, equipe e contato.',
    price: 2190,
    highlights: ['Até 5 páginas', 'Navegação completa', 'Formulário simples ou WhatsApp'],
    details: [
      'Até 5 páginas institucionais de complexidade padrão.',
      'Cardápio simples pode entrar no escopo combinado.',
      'Design personalizado e navegação responsiva.',
      'Formulário simples ou contato por WhatsApp, conforme o projeto.',
      'SEO básico técnico e publicação.',
      'Até 2 rodadas de revisão dentro do escopo.',
    ],
    message: 'Olá, WebNest! Tenho interesse no plano Profissional para um site institucional. Gostaria de receber uma proposta.',
  },
  {
    id: 'catalogo',
    name: 'Catálogo',
    format: 'Catálogo digital',
    headline: 'Produtos organizados para serem encontrados.',
    summary: 'Uma estrutura própria de catálogo para apresentar seus produtos e levar o interessado ao WhatsApp.',
    example: 'Uma loja com produtos por categoria, busca e contato para pedir pelo WhatsApp.',
    price: 2890,
    highlights: ['Até 50 produtos', 'Categorias, busca e filtros', 'Contato ou pedido por WhatsApp'],
    details: [
      'Estrutura de catálogo em página única; não inclui 5 páginas institucionais.',
      'Cadastro inicial de até 50 produtos com materiais fornecidos pelo cliente.',
      'Categorias, busca e filtros simples de produtos.',
      'Botões de contato ou pedido por WhatsApp, design responsivo, SEO básico técnico e publicação.',
      'Até 2 rodadas de revisão dentro do escopo.',
    ],
    message: 'Olá, WebNest! Tenho interesse no plano Catálogo para apresentar meus produtos. Gostaria de receber uma proposta.',
  },
]

export const customService = {
  name: 'Solução sob medida',
  summary: 'Para sites que precisam de uma estrutura diferente dos três planos, como um site institucional com catálogo ou funcionalidades específicas.',
  example: 'Exemplo: um site com páginas institucionais e um catálogo integrado ao mesmo projeto.',
  message: 'Olá, WebNest! Meu projeto precisa de uma solução sob medida. Gostaria de conversar sobre o escopo.',
}

export const serviceAddons = [
  { name: 'Seção extra', price: '+ R$ 180 / seção', description: 'Além das 5 seções do Essencial, com conteúdo fornecido pelo cliente.', example: 'Uma área de perguntas frequentes na landing page.' },
  { name: 'Página extra', price: '+ R$ 350 / página', description: 'Página institucional de complexidade semelhante às já contratadas.', example: 'Uma página de equipe além das 5 incluídas.' },
  { name: '10 produtos adicionais', price: '+ R$ 120 / lote', description: 'Cadastro inicial com fotos, textos e preços prontos, fornecidos pelo cliente.', example: 'Ampliar o Catálogo de 50 para 60 produtos.' },
  { name: 'Busca e filtros', price: '+ R$ 350', description: 'Busca por nome e filtros simples. Já incluídos no Catálogo.', example: 'Localizar um item pelo nome e filtrar por categoria.' },
  { name: 'Sacola para WhatsApp', price: '+ R$ 450', description: 'Reúne itens, soma valores e prepara uma mensagem de pedido; não processa pagamentos.', example: 'Selecionar dois produtos e enviar um pedido único.' },
  { name: 'Painel administrativo básico', price: 'A partir de + R$ 1.800', description: 'Login e edição de produtos pelo cliente. Requer avaliação de dados, segurança e infraestrutura.', example: 'Atualizar a foto ou o preço de um produto pelo painel.' },
  { name: 'Pagamento online / checkout', price: 'A partir de + R$ 2.000', description: 'Integração com provedor de pagamentos, conforme viabilidade. Taxas do provedor à parte.', example: 'Concluir uma compra usando um provedor de pagamento.' },
  { name: 'ERP, estoque avançado ou API externa', price: 'Sob orçamento', description: 'Integrações dependem da documentação, dos acessos e da complexidade.', example: 'Sincronizar disponibilidade com um sistema de estoque existente.' },
]

export const addonExamples = [
  { project: 'Landing page com sacola para WhatsApp', calculation: 'R$ 1.290 + R$ 450', total: 'R$ 1.740' },
  { project: 'Site institucional com 2 páginas extras', calculation: 'R$ 2.190 + 2 × R$ 350', total: 'R$ 2.890' },
  { project: 'Catálogo com 20 produtos extras', calculation: 'R$ 2.890 + 2 × R$ 120', total: 'R$ 3.130' },
  { project: 'Catálogo com painel de produtos', calculation: 'R$ 2.890 + a partir de R$ 1.800', total: 'A partir de R$ 4.690' },
]

export const dashboardOffers = [
  {
    id: 'dashboard-indicadores',
    name: 'Dashboard de indicadores',
    format: 'Sistemas Web',
    description: 'Gráficos, indicadores e relatórios alimentados por uma fonte de dados definida no projeto.',
    summary: 'Visualize os principais números do negócio em um painel organizado para acompanhamento.',
    example: 'Uma loja acompanha pedidos e vendas a partir de dados fornecidos pela operação.',
    priceLabel: 'Sob orçamento',
    startingPrice: 4900,
    highlights: ['Indicadores e gráficos', 'Filtros definidos no projeto', 'Visualização responsiva'],
    href: '/servicos/#sistemas',
  },
  {
    id: 'dashboard-integracoes',
    name: 'Dashboard com integrações',
    format: 'Sistemas Web',
    description: 'Painel com acesso autenticado, filtros por período e integração com APIs autorizadas, conforme viabilidade técnica.',
    summary: 'Reúna dados autorizados de diferentes fontes em uma área protegida e personalizada.',
    example: 'Uma agência reúne métricas de contas autorizadas e filtra os resultados por período.',
    priceLabel: 'Sob orçamento',
    startingPrice: 7900,
    highlights: ['Acesso autenticado', 'Integrações autorizadas', 'Filtros por período'],
    href: '/servicos/#sistemas',
  },
  {
    id: 'sistema-personalizado',
    name: 'Sistema personalizado',
    format: 'Sistemas Web',
    description: 'Fluxos, permissões e módulos criados para uma rotina própria do negócio.',
    summary: 'Organize uma operação específica com fluxos, acessos e ferramentas feitos para o negócio.',
    example: 'Uma empresa de serviços organiza clientes, tarefas e níveis de acesso em um painel interno.',
    priceLabel: 'Sob orçamento',
    startingPrice: 10000,
    highlights: ['Fluxos personalizados', 'Perfis e permissões', 'Módulos conforme o escopo'],
    href: '/servicos/#sistemas',
  },
]

export const serviceWhatsApp = (message) => `${whatsappBase}${encodeURIComponent(message)}`
export const formatServicePrice = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value)
