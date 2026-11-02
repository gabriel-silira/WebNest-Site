import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FaqList from '../components/FaqList.jsx'
import PlanCard from '../components/PlanCard.jsx'
import { ArrowIcon, ExternalIcon } from '../components/Icons.jsx'
import { addonExamples, customService, dashboardOffers, formatServicePrice, serviceAddons, servicePlans, serviceWhatsApp } from '../data/services.js'

const questions = [
  ['O preço anunciado é o valor final?', 'Os valores são pontos de partida para o escopo indicado. A proposta confirma o conteúdo, as funcionalidades, os materiais, o prazo e o investimento final antes do início.'],
  ['O Catálogo inclui um site institucional completo?', 'Não. O plano Catálogo parte de uma estrutura própria de catálogo em página única. Um site institucional com catálogo é orçado como solução sob medida.'],
  ['Posso editar os produtos sozinho depois?', 'Um painel administrativo não faz parte do Catálogo base. Se você precisar cadastrar ou alterar produtos pelo próprio site, essa funcionalidade deve entrar na proposta.'],
  ['Domínio e hospedagem estão incluídos?', 'Nos pacotes de sites, a previsão é de 12 meses de domínio e hospedagem. A proposta especifica a infraestrutura, o período coberto e as condições de renovação. Sistemas web têm infraestrutura definida conforme o projeto.'],
]

export default function Services() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header solid variant="services" />
      <main id="conteudo" tabIndex={-1} className="services-page">
        <section className="services-intro" aria-labelledby="services-page-title">
          <div className="shell services-intro__inner">
            <a className="back-link" href="/">← Voltar para a página inicial</a>
            <div className="services-intro__grid">
              <h1 id="services-page-title">Serviços e investimentos.</h1>
              <div><p>De um site de apresentação a um painel de dados, cada projeto começa com um escopo claro. Conheça os formatos e os acréscimos possíveis.</p><div className="services-intro__links"><a className="text-link" href="#planos">Explorar sites <ArrowIcon /></a><a className="text-link" href="#sistemas">Explorar sistemas web <ArrowIcon /></a></div></div>
            </div>
          </div>
        </section>

        <section className="services-plans" id="planos" aria-labelledby="services-plans-title">
          <div className="shell">
            <div className="section-heading section-heading--split"><h2 id="services-plans-title">Sites para apresentar, explicar e vender.</h2><p>Da apresentação enxuta ao catálogo de produtos, compare o que cada formato contempla.</p></div>
            <div className="plan-grid">{servicePlans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}</div>
            <p className="services-plans__note">Os preços são iniciais. O valor final varia conforme o conteúdo, as funcionalidades e os materiais disponíveis. Você recebe uma proposta antes de começar.</p>
          </div>
        </section>

        <section className="services-addons" id="adicionais" aria-labelledby="services-addons-title">
          <div className="shell">
            <div className="section-heading section-heading--split"><h2 id="services-addons-title">Complemente seu site.</h2><p>Adicionais são opcionais e acrescentados ao valor do plano escolhido, após aprovação do escopo.</p></div>
            <div className="services-addons__list">{serviceAddons.map((addon) => <article className="services-addons__item" key={addon.name}><div><h3>{addon.name}</h3><p>{addon.description}</p><p className="services-addons__example"><strong>Exemplo:</strong> {addon.example}</p></div><strong>{addon.price}</strong></article>)}</div>
            <p className="services-addons__note">O botão comum de WhatsApp já está incluído nos três planos; a sacola permite reunir vários produtos em um pedido. Busca e filtros já fazem parte do Catálogo. Painel, checkout e integrações exigem avaliação técnica e podem ter custos de infraestrutura ou terceiros separados.</p>
            <div className="services-examples" aria-labelledby="services-examples-title"><div><h3 id="services-examples-title">Como o acréscimo entra no orçamento.</h3><p>Exemplos ilustrativos com os valores iniciais. O total final depende do escopo e da proposta.</p></div><div className="services-examples__list">{addonExamples.map((example) => <div className="services-examples__item" key={example.project}><span>{example.project}</span><small>{example.calculation}</small><strong>{example.total}</strong></div>)}</div></div>
          </div>
        </section>

        <section className="custom-offer" id="custom-offer" aria-labelledby="custom-offer-title">
          <div className="shell custom-offer__inner">
            <div><h2 id="custom-offer-title">{customService.name}</h2><p>{customService.summary}</p><p className="custom-offer__example">{customService.example}</p></div>
            <div className="custom-offer__action"><strong>Sob orçamento</strong><a className="button button--primary" href={serviceWhatsApp(customService.message)} target="_blank" rel="noreferrer">Conversar sobre o projeto <ExternalIcon /></a></div>
          </div>
        </section>

        <section className="services-systems" id="sistemas" aria-labelledby="services-systems-title"><div className="shell"><div className="section-heading section-heading--split"><h2 id="services-systems-title">Sistemas Web para trabalhar com seus dados.</h2><p>Dashboards e sistemas internos são planejados conforme as fontes de dados, acessos e tarefas de cada negócio.</p></div><div className="services-systems__grid">{dashboardOffers.map((offer) => <article key={offer.id}><h3>{offer.name}</h3><p>{offer.description}</p><p className="services-systems__example"><strong>Exemplo de uso:</strong> {offer.example}</p><div className="services-systems__price"><strong>{offer.priceLabel}</strong><span>A partir de <data value={offer.startingPrice}>{formatServicePrice(offer.startingPrice)}</data></span></div></article>)}</div><div className="services-systems__end"><p>Telas, permissões, APIs, operação e infraestrutura são definidos no levantamento do projeto. O uso de dados de terceiros depende dos acessos e das regras de cada fornecedor.</p><a className="button button--primary" href={serviceWhatsApp('Olá, WebNest! Gostaria de conversar sobre um dashboard ou sistema web para o meu negócio.')} target="_blank" rel="noreferrer">Conversar sobre um sistema <ExternalIcon /></a></div></div></section>

        <section className="services-scope" aria-labelledby="services-scope-title">
          <div className="shell"><h2 id="services-scope-title">O que entra na proposta.</h2><div className="services-scope__grid">
            <div><h3>A base dos três planos</h3><p>Design responsivo, SEO básico técnico, publicação e até duas rodadas de revisão dentro do escopo aprovado. O cliente fornece as informações e os materiais do negócio em formato utilizável.</p></div>
            <div><h3>O que precisa ser combinado</h3><p>Recursos adicionais, renovação e manutenção são definidos na proposta. Painel de edição, carrinho, checkout, pagamento online, estoque e integrações não fazem parte do Catálogo base.</p></div>
          </div></div>
        </section>

        <section className="services-steps" aria-labelledby="services-steps-title"><div className="shell"><h2 id="services-steps-title">Da ideia à proposta.</h2><ol><li><strong>Conte o que você precisa</strong><span>Objetivo, conteúdo e materiais disponíveis.</span></li><li><strong>Definimos o escopo</strong><span>Escolhemos um plano base ou uma solução sob medida.</span></li><li><strong>Você aprova antes de começar</strong><span>Prazo, investimento e condições ficam claros na proposta.</span></li></ol></div></section>

        <section className="services-terms" id="condicoes" aria-labelledby="services-terms-title"><div className="shell"><div className="section-heading section-heading--split"><h2 id="services-terms-title">Condições do projeto, sem surpresas.</h2><p>Estas condições orientam a proposta. Escopo, valores, infraestrutura e responsabilidades são confirmados por escrito antes do início.</p></div><dl className="services-terms__list"><div><dt>Pagamento</dt><dd>50% na contratação e 50% na aprovação final, antes da publicação.</dd></div><div><dt>Revisões</dt><dd>2 rodadas de ajustes dentro do escopo aprovado.</dd></div><div><dt>Garantia e alterações</dt><dd>O prazo de garantia e a correção de defeitos são definidos em contrato conforme a legislação; mudanças de conteúdo ou novas funcionalidades são orçadas separadamente.</dd></div><div><dt>Materiais e prazo</dt><dd>Textos, fotos, marca e informações são fornecidos pelo cliente ou contratados à parte. O prazo começa após a confirmação do projeto e o recebimento dos materiais necessários.</dd></div><div><dt>Domínio e hospedagem</dt><dd>Os pacotes de sites preveem 12 meses, com condições de renovação informadas na proposta. Sistemas web têm infraestrutura definida caso a caso.</dd></div><div><dt>Manutenção e entrega</dt><dd>Manutenção é opcional e contratada separadamente. Propriedade, acessos e entrega ao cliente são descritos na proposta ou no contrato.</dd></div></dl></div></section>

        <section className="services-questions" id="duvidas" aria-labelledby="services-questions-title"><div className="shell services-questions__grid"><h2 id="services-questions-title">Dúvidas comuns.</h2><FaqList items={questions} idPrefix="services-faq" /></div></section>
      </main>
      <Footer />
    </>
  )
}
