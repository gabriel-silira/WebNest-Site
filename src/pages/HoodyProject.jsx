import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ArrowIcon, ExternalIcon } from '../components/Icons.jsx'

const contactUrl = 'https://wa.me/5519996587333?text=Ol%C3%A1%2C%20WebNest!%20Conheci%20o%20projeto%20Hoody%20Bot%20e%20gostaria%20de%20conversar%20sobre%20um%20site.'

export default function HoodyProject({ project }) {
  useEffect(() => { document.title = 'Hoody Bot — Projeto real | WebNest' }, [])

  return (
    <div className="hoody-project-page">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="hoody-project-hero" aria-labelledby="hoody-title">
          <div className="shell">
            <a className="back-link" href="/#projetos-reais"><ArrowIcon direction="left" /> Voltar aos projetos reais</a>
            <div className="hoody-project-hero__grid">
              <div className="hoody-project-hero__copy">
                <h1 id="hoody-title">Hoody Bot</h1>
                <span className="project-badge project-badge--real">Projeto real</span>
                <p>{project.intro}</p>
                <div className="project-facts">
                  <span><small>Produto</small>{project.segment}</span>
                  <span><small>Formato</small>{project.format}</span>
                </div>
              </div>
              <figure className="hoody-project-hero__preview">
                <img src={project.cover} alt={project.alt} fetchPriority="high" decoding="async" />
              </figure>
            </div>
          </div>
        </section>

        <section className="section hoody-overview" aria-labelledby="hoody-overview-title">
          <div className="shell hoody-overview__grid">
            <div>
              <h2 id="hoody-overview-title">Um produto técnico explicado com clareza.</h2>
              <p>O desafio era apresentar moderação, entretenimento e utilidades sem transformar o site em uma lista difícil de navegar. A experiência mostra o que acontece antes da instalação e organiza as informações para quem administra um servidor.</p>
              <ul className="hoody-proof-list">
                <li><strong>18 comandos</strong><span>divididos entre moderação, entretenimento e informações.</span></li>
                <li><strong>Comandos de barra</strong><span>com opções visíveis dentro do próprio Discord.</span></li>
                <li><strong>Respostas claras</strong><span>com resultado, duração e motivo quando necessário.</span></li>
              </ul>
            </div>
            <figure className="hoody-screen hoody-screen--permissions">
              <img src={project.permissions} alt="Seção do Hoody Bot explicando permissões e mostrando um exemplo do comando timeout" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        <section className="section hoody-commands" aria-labelledby="hoody-commands-title">
          <div className="shell">
            <div className="hoody-commands__heading">
              <h2 id="hoody-commands-title">Dezoito comandos. Uma navegação direta.</h2>
              <p>A página de comandos combina busca, categorias e exemplos de uso para reduzir o tempo entre a dúvida e a resposta.</p>
            </div>
            <figure className="hoody-screen hoody-screen--wide">
              <img src={project.commandsHome} alt="Abertura da página de comandos do Hoody Bot com busca e categorias" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        <section className="section hoody-command-gallery" aria-labelledby="hoody-gallery-title">
          <div className="shell">
            <div className="hoody-command-gallery__heading">
              <h2 id="hoody-gallery-title">O catálogo completo, sem perder a orientação.</h2>
              <p>As três categorias recebem espaço próprio para que cada comando seja encontrado pelo objetivo, não pela memória de quem navega.</p>
            </div>
            <div className="hoody-command-gallery__list">
              <figure className="hoody-command-gallery__item">
                <div className="hoody-screen"><img src={project.moderation} alt="Comandos de moderação do Hoody Bot" loading="lazy" decoding="async" /></div>
                <figcaption><strong>Moderação</strong><span>Ferramentas de gestão e proteção apresentadas com permissões e exemplos de uso.</span></figcaption>
              </figure>
              <figure className="hoody-command-gallery__item hoody-command-gallery__item--reverse">
                <div className="hoody-screen"><img src={project.entertainment} alt="Comandos de entretenimento do Hoody Bot" loading="lazy" decoding="async" /></div>
                <figcaption><strong>Entretenimento</strong><span>Interações rápidas e comandos de sorteio reunidos em uma leitura contínua.</span></figcaption>
              </figure>
              <figure className="hoody-command-gallery__item">
                <div className="hoody-screen"><img src={project.information} alt="Comandos de informações do Hoody Bot" loading="lazy" decoding="async" /></div>
                <figcaption><strong>Informações</strong><span>Ajuda, dados do bot e utilidades organizados em um único grupo.</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section hoody-close" aria-labelledby="hoody-close-title">
          <div className="shell hoody-close__grid">
            <h2 id="hoody-close-title">Uma presença digital que apresenta e orienta.</h2>
            <div>
              <p>O site do Hoody Bot une identidade, explicação do produto e documentação navegável em uma experiência coerente para quem usa Discord.</p>
              <a className="button button--primary" href={contactUrl} target="_blank" rel="noreferrer">Conversar sobre um projeto <ExternalIcon /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
