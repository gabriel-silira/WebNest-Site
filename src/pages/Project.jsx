import { useEffect } from 'react'
import { projects } from '../data/projects.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ArrowIcon, ExternalIcon } from '../components/Icons.jsx'

export default function Project({ project }) {
  useEffect(() => { document.title = `${project.name} — Projeto demonstrativo | WebNest` }, [project])
  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="project-page__top"><Header /><main id="conteudo" tabIndex={-1} className="shell project-hero"><a className="back-link" href="/#projetos"><ArrowIcon direction="left" /> Voltar aos projetos</a><div className="project-hero__grid"><div><h1>{project.name}</h1><span className="project-badge">Projeto demonstrativo</span><p>{project.intro}</p><div className="project-facts"><span><small>Segmento</small>{project.segment}</span><span><small>Formato</small>{project.format}</span></div></div><figure className="project-preview"><img src={project.cover} alt={project.alt} fetchPriority="high" decoding="async" /></figure></div></main></div>
    <section className="section case-story"><div className="shell case-story__grid"><article><h2>Uma presença digital com identidade e direção.</h2><span>O desafio</span><p>{project.challenge}</p></article><article><h2>Conteúdo organizado para conduzir a navegação.</h2><span>A solução</span><p>{project.solution}</p></article></div></section>
    <section className="case-image"><div className="shell"><img src={project.detail} alt={project.detailAlt} loading="lazy" decoding="async" /></div></section>
    <section className="section case-note"><div className="shell case-note__grid"><h2>Um estudo de design e desenvolvimento.</h2><div><p>Este é um projeto demonstrativo criado para explorar possibilidades de apresentação digital. Ele não representa um cliente ou resultado comercial.</p><a className="button button--dark" href="https://wa.me/5519996587333?text=Ol%C3%A1%2C%20WebNest!%20Vi%20um%20projeto%20demonstrativo%20e%20gostaria%20de%20conversar%20sobre%20um%20site%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noreferrer">Conversar sobre meu site <ExternalIcon /></a></div></div></section>
    <a className="next-project" href={`/projetos/${next.slug}/`}>
      <div className="next-project__inner">
        <div className="next-project__copy">
          <span>Próximo projeto</span>
          <strong>{next.name}</strong>
        </div>
        <ArrowIcon />
      </div>
    </a>
    <Footer />
  </>
}
