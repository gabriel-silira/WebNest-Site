import { useEffect, useState } from 'react'
import Brand from './Brand.jsx'
import { MenuIcon } from './Icons.jsx'

const siteLinks = [
  ['Projetos', '/#projetos'],
  ['Serviços', '/servicos/'],
  ['Investimento', '/#investimento'],
  ['Como funciona', '/#processo'],
]

const servicesLinks = [
  ['Início', '/'],
  ['Sites', '#planos'],
  ['Adicionais', '#adicionais'],
  ['Sistemas Web', '#sistemas'],
  ['Condições', '#condicoes'],
  ['Dúvidas', '#duvidas'],
]

export default function Header({ solid = false, variant = 'site' }) {
  const [open, setOpen] = useState(false)
  const links = variant === 'services' ? servicesLinks : siteLinks

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className={`site-header${solid ? ' site-header--solid' : ''}`}>
      <div className="shell header__inner">
        <Brand />
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <MenuIcon open={open} />
        </button>
        <nav id="site-menu" className={`site-nav${open ? ' is-open' : ''}`} aria-label={variant === 'services' ? 'Navegação de serviços' : 'Navegação principal'}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button--outline header__cta" href="/#contato" onClick={() => setOpen(false)}>Vamos conversar</a>
        </nav>
      </div>
    </header>
  )
}
