import pizzaCover from '../assets/pizza-home.webp'
import pizzaDetail from '../assets/pizza-cardapio.webp'
import refrizCover from '../assets/refriz-home.webp'
import refrizDetail from '../assets/refriz-sabores.webp'
import burguerCover from '../assets/burguer-home.webp'
import burguerDetail from '../assets/burguer-historia.webp'
import hoodyCover from '../assets/hoody-home.webp'
import hoodyPermissions from '../assets/hoody-permissions.webp'
import hoodyCommandsHome from '../assets/hoody-commands-home.webp'
import hoodyModeration from '../assets/hoody-moderation.webp'
import hoodyEntertainment from '../assets/hoody-entertainment.webp'
import hoodyInformation from '../assets/hoody-information.webp'

export const projects = [
  {
    slug: 'pizza',
    name: 'WebNest Pizza',
    segment: 'Pizzaria',
    format: 'Site institucional',
    summary: 'Um site de pizzaria com apresentação da marca, cardápio e história em páginas próprias.',
    intro: 'Uma experiência calorosa que organiza a história, o cardápio e a atmosfera da marca em um site fácil de explorar.',
    cover: pizzaCover,
    detail: pizzaDetail,
    alt: 'Página inicial do projeto demonstrativo WebNest Pizza',
    detailAlt: 'Cardápio do projeto demonstrativo WebNest Pizza',
    challenge: 'Apresentar a experiência da pizzaria sem perder a clareza das informações que ajudam na escolha.',
    solution: 'A navegação distribui marca, cardápio e história em páginas próprias, com imagens de produto e hierarquia direta.',
  },
  {
    slug: 'refriz',
    name: 'Refriz',
    segment: 'Bebidas',
    format: 'Landing page',
    summary: 'Uma landing page que usa produtos e sabores para construir uma apresentação visual de marca.',
    intro: 'Uma página de lançamento vibrante em que o produto, os sabores e a chamada para experimentar conduzem a navegação.',
    cover: refrizCover,
    detail: refrizDetail,
    alt: 'Abertura da landing page demonstrativa Refriz',
    detailAlt: 'Seção de sabores da landing page demonstrativa Refriz',
    challenge: 'Dar personalidade a três sabores e manter uma mensagem de lançamento simples de entender.',
    solution: 'A página usa uma abertura objetiva, fotografia de produto e um ritmo visual que apresenta cada sabor sem desviar do foco.',
  },
  {
    slug: 'burguer',
    name: 'WebNest Burguer',
    segment: 'Hamburgueria',
    format: 'Landing page',
    summary: 'Uma landing page de hamburgueria que reúne identidade, apresentação do negócio e cardápio.',
    intro: 'Uma landing page de personalidade forte para apresentar o espaço, os hambúrgueres e o jeito da marca.',
    cover: burguerCover,
    detail: burguerDetail,
    alt: 'Página inicial do projeto demonstrativo WebNest Burguer',
    detailAlt: 'Seção Nossa história do projeto demonstrativo WebNest Burguer',
    challenge: 'Equilibrar uma identidade marcante com uma navegação rápida para quem quer conhecer o negócio e o cardápio.',
    solution: 'Grandes imagens, textos curtos e seções bem marcadas tornam o projeto expressivo sem esconder o conteúdo principal.',
  },
]

export const realProjects = [
  {
    slug: 'hoody',
    name: 'Hoody Bot',
    segment: 'Bot para Discord',
    format: 'Site institucional',
    summary: 'Um site para apresentar o bot, explicar seu funcionamento e organizar 18 comandos de forma acessível.',
    intro: 'Uma presença digital criada para apresentar o Hoody Bot, explicar suas permissões e ajudar cada pessoa a encontrar o comando certo.',
    cover: hoodyCover,
    permissions: hoodyPermissions,
    commandsHome: hoodyCommandsHome,
    moderation: hoodyModeration,
    entertainment: hoodyEntertainment,
    information: hoodyInformation,
    alt: 'Página inicial do site real Hoody Bot',
  },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getRealProject(slug) {
  return realProjects.find((project) => project.slug === slug)
}
