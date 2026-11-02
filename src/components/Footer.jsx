import Brand from './Brand.jsx'
import { ExternalIcon } from './Icons.jsx'
import { contactEmail, contactEmailHref } from '../data/contact.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer__grid">
        <div><Brand /><p>Sites modernos para marcas que querem crescer.</p></div>
        <nav aria-label="Navegação do rodapé">
          <a href="/#projetos">Projetos demonstrativos</a><a href="/#projetos-reais">Projetos reais</a><a href="/servicos/">Serviços e investimentos</a><a href="/#processo">Como funciona</a><a href="/privacidade/">Privacidade</a>
        </nav>
        <div className="footer__contacts">
          <a href="https://wa.me/5519996587333" target="_blank" rel="noreferrer">WhatsApp <ExternalIcon /></a>
          <a href="https://www.instagram.com/webnest.br/" target="_blank" rel="noreferrer">Instagram <ExternalIcon /></a>
          <a href={contactEmailHref}>{contactEmail} <ExternalIcon /></a>
        </div>
      </div>
      <div className="shell footer__base"><span>© {new Date().getFullYear()} WebNest.</span><span>Design, tecnologia e estratégia.</span></div>
    </footer>
  )
}
