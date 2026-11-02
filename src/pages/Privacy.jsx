import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { contactEmail, contactEmailHref } from '../data/contact.js'

export default function Privacy() {
  useEffect(() => { document.title = 'Privacidade — WebNest' }, [])
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header solid /><main id="conteudo" tabIndex={-1} className="legal shell"><a className="back-link" href="/">← Voltar para a página inicial</a><h1>Privacidade</h1><p className="legal__lead">Esta versão do site não possui formulário, login, cookies de publicidade ou ferramentas de análise.</p><section><h2>Canais de contato</h2><p>Ao escolher conversar pelo WhatsApp ou Instagram, você acessa plataformas externas e passa a estar sujeito às políticas dessas empresas. Você também pode escrever para <a href={contactEmailHref}>{contactEmail}</a>. Nenhuma mensagem é enviada automaticamente pelo site.</p></section><section><h2>Dados informados por você</h2><p>Os dados que você decidir compartilhar durante uma conversa são usados apenas para entender e responder ao seu pedido. As condições comerciais e o tratamento de dados serão detalhados antes da publicação definitiva.</p></section><section><h2>Atualizações</h2><p>Esta página será revisada se o site passar a usar formulários, métricas, cookies ou outras ferramentas que tratem dados.</p></section></main><Footer /></>
}
