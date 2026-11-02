import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ArrowIcon } from '../components/Icons.jsx'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada — WebNest'
  }, [])

  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><div className="not-found__top"><Header /><main id="conteudo" tabIndex={-1} className="not-found shell"><span>404</span><h1>Esta página não encontrou um lugar na teia.</h1><p>Talvez o endereço tenha mudado. Você pode voltar para a página inicial ou explorar nossos projetos.</p><div><a className="button button--primary" href="/">Voltar ao início</a><a className="text-link text-link--light" href="/#projetos">Ver projetos <ArrowIcon /></a></div></main></div><Footer /></>
}
