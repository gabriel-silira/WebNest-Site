import { projects, realProjects } from '../data/projects.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ArrowIcon, ExternalIcon } from '../components/Icons.jsx'
import FaqList from '../components/FaqList.jsx'
import PlanCard from '../components/PlanCard.jsx'
import { customService, dashboardOffers, servicePlans } from '../data/services.js'
import { contactEmail, contactEmailHref } from '../data/contact.js'

const whatsappBase = 'https://wa.me/5519996587333?text='
const messages = {
  general: 'Olá, WebNest! Conheci o site e gostaria de conversar sobre um projeto para o meu negócio.',
}
const whatsapp = (message) => `${whatsappBase}${encodeURIComponent(message)}`

const faqs = [
  ['Qual é a diferença entre landing page e site institucional?', 'A landing page concentra a apresentação em uma página. O site institucional distribui as informações em várias páginas. A melhor escolha depende do conteúdo e do objetivo do negócio.'],
  ['O site funciona no celular?', 'Sim. Cada projeto é planejado para funcionar bem em celular, tablet e computador, com conteúdo e navegação adaptados a cada tamanho de tela.'],
  ['Quanto tempo leva?', 'O prazo depende do escopo e dos materiais disponíveis. Ele é definido na proposta antes de começarmos.'],
  ['O que preciso enviar?', 'Nome da empresa, objetivo, serviços, contatos e os materiais disponíveis, como logo, textos e imagens. Durante a conversa, confirmamos juntos o que ainda falta.'],
]

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="hero-wrap">
        <Header />
        <main id="conteudo" tabIndex={-1}>
          <section className="hero shell" aria-labelledby="hero-title">
            <div className="hero__content">
              <h1 id="hero-title">Sua marca merece um site à altura.</h1>
              <p>Criamos sites modernos, rápidos e responsivos para apresentar seu negócio e facilitar o próximo contato.</p>
              <div className="hero__actions">
                <a className="button button--primary" href={whatsapp(messages.general)} target="_blank" rel="noreferrer">Conversar no WhatsApp <ExternalIcon /></a>
                <a className="text-link text-link--light" href="#projetos">Ver projetos <ArrowIcon /></a>
              </div>
              <a className="hero__instagram" href="https://www.instagram.com/webnest.br/" target="_blank" rel="noreferrer">Prefere o Instagram? <span>@webnest.br</span></a>
            </div>
          </section>
        </main>
      </div>

      <section className="section projects" id="projetos" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading section-heading--split"><h2 id="projects-title">Conheça nosso trabalho.</h2><p>Explore projetos demonstrativos e veja diferentes formas de apresentar uma marca na web.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.slug}>
                <a className="project-card__image" href={`/projetos/${project.slug}/`} aria-label={`Conhecer ${project.name}`}>
                  <img src={project.cover} alt={project.alt} loading="lazy" decoding="async" />
                </a>
                <div className="project-card__copy">
                  <span className="project-meta">{project.segment} · {project.format}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <a className="text-link" href={`/projetos/${project.slug}/`}>Conhecer o projeto <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section real-projects" id="projetos-reais" aria-labelledby="real-projects-title">
        <div className="shell real-projects__grid">
          <div className="section-heading">
            <h2 id="real-projects-title">Nossos projetos reais.</h2>
            <p>Trabalhos desenvolvidos para necessidades reais, apresentados com contexto e decisões de projeto.</p>
          </div>
          {realProjects.map((project) => (
            <article className="real-project-card" key={project.slug}>
              <a className="real-project-card__image" href={`/projetos/${project.slug}/`} aria-label={`Conhecer ${project.name}`}>
                <img src={project.cover} alt={project.alt} loading="lazy" decoding="async" />
              </a>
              <div className="real-project-card__copy">
                <span className="project-meta">Projeto real · {project.segment}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <a className="text-link" href={`/projetos/${project.slug}/`}>Conhecer o projeto <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing" id="investimento" aria-labelledby="pricing-title">
        <div className="shell">
          <div className="section-heading section-heading--split"><h2 id="pricing-title">Uma base para cada ideia.</h2><p>Compare os formatos de site e as soluções web disponíveis para cada etapa do negócio.</p></div>
          <div className="pricing-group-heading"><h3>Sites</h3><p>Escolha uma estrutura inicial conforme o conteúdo e o objetivo da sua presença digital.</p></div>
          <div className="plan-grid plan-grid--home plan-grid--sites">{servicePlans.map((plan) => <PlanCard key={plan.id} plan={plan} compact />)}</div>
          <div className="pricing-group-heading pricing-group-heading--systems"><h3>Sistemas Web</h3><p>Ferramentas planejadas conforme os dados, acessos e rotinas de cada operação.</p></div>
          <div className="plan-grid plan-grid--home plan-grid--systems">{dashboardOffers.map((offer) => <PlanCard key={offer.id} plan={offer} compact />)}</div>
          <div className="home-custom"><div><h3>{customService.name}</h3><p>{customService.summary}</p></div><a className="text-link" href="/servicos/#custom-offer">Entender a solução <ArrowIcon /></a></div>
          <div className="pricing-extensions"><article><div><h3>Adicionais para sites</h3><p>Exemplos de acréscimos ao plano: seção extra <strong>+ R$ 180</strong>, página extra <strong>+ R$ 350</strong> e sacola para WhatsApp <strong>+ R$ 450</strong>.</p></div><a className="text-link" href="/servicos/#adicionais">Ver todos os adicionais <ArrowIcon /></a></article></div>
          <a className="text-link pricing__all" href="/servicos/">Ver todos os detalhes dos serviços <ArrowIcon /></a>
          <p className="pricing__note">Os preços são iniciais. O escopo, o valor final e as condições são confirmados na proposta.</p>
        </div>
      </section>

      <section className="section process" id="processo" aria-labelledby="process-title"><div className="shell"><div className="section-heading"><h2 id="process-title">Da primeira conversa ao site no ar.</h2><p>Um processo direto, com decisões claras em cada etapa.</p></div><ol className="process-list"><li><span>01</span><div><h3>Entender o negócio</h3><p>Conversamos sobre objetivo, público e materiais disponíveis.</p></div></li><li><span>02</span><div><h3>Definir o projeto</h3><p>Apresentamos escopo, investimento e condições para aprovação.</p></div></li><li><span>03</span><div><h3>Criar e revisar</h3><p>Desenvolvemos a estrutura e o visual com os pontos de revisão combinados.</p></div></li><li><span>04</span><div><h3>Preparar a publicação</h3><p>Conferimos conteúdo, navegação e contatos antes de colocar o site no ar.</p></div></li></ol></div></section>

      <section className="section about" aria-labelledby="about-title"><div className="shell about__grid"><h2 id="about-title">Design, tecnologia e estratégia para a sua presença digital.</h2><div><p>A WebNest cria sites modernos, rápidos e responsivos para marcas que querem crescer. Cada detalhe é pensado para apresentar o negócio com clareza e criar uma experiência agradável para quem navega.</p><div className="about__values"><span>Design com propósito</span><span>Experiência responsiva</span><span>Comunicação clara</span></div></div></div></section>

      <section className="section faq" aria-labelledby="faq-title"><div className="shell faq__grid"><div className="section-heading"><h2 id="faq-title">Antes de começar, vale saber.</h2><p>As respostas essenciais para transformar a ideia em um projeto bem definido.</p></div><FaqList items={faqs} /></div></section>

      <section className="contact" id="contato" aria-labelledby="contact-title"><div className="shell contact__inner"><div><h2 id="contact-title">Vamos conversar sobre o site do seu negócio?</h2><p>Conte o que você faz e o que gostaria de apresentar. Podemos começar pelo WhatsApp, Instagram ou e-mail.</p></div><div className="contact__actions"><a className="button button--primary" href={whatsapp(messages.general)} target="_blank" rel="noreferrer">Conversar no WhatsApp <ExternalIcon /></a><a className="button button--outline" href="https://www.instagram.com/webnest.br/" target="_blank" rel="noreferrer">Chamar no Instagram <ExternalIcon /></a><a className="contact__email" href={contactEmailHref}>Enviar e-mail: {contactEmail}</a></div></div></section>
      <Footer />
    </>
  )
}
