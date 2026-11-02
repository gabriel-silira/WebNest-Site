import { ArrowIcon, ExternalIcon } from './Icons.jsx'
import { formatServicePrice, serviceWhatsApp } from '../data/services.js'

export default function PlanCard({ plan, compact = false }) {
  const hasFixedStartingPrice = typeof plan.price === 'number'

  return (
    <article className={`plan-card${compact ? ' plan-card--compact' : ''}`} id={`plano-${plan.id}`}>
      <div className="plan-card__top">
        <span className="plan-card__format">{plan.format}</span>
        <h3>{plan.name}</h3>
        <p>{compact ? plan.summary : plan.headline}</p>
      </div>
      <p className="plan-card__price">
        <span>{hasFixedStartingPrice ? 'A partir de' : 'Investimento'}</span>
        {hasFixedStartingPrice ? (
          <data value={plan.price}>{formatServicePrice(plan.price)}</data>
        ) : (
          <>
            <strong className="plan-card__price-label">{plan.priceLabel}</strong>
            {plan.startingPrice && <span className="plan-card__starting-price">A partir de <data value={plan.startingPrice}>{formatServicePrice(plan.startingPrice)}</data></span>}
          </>
        )}
      </p>
      {compact ? (
        <ul className="plan-card__list">{plan.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
      ) : (
        <>
          <p className="plan-card__summary">{plan.summary}</p>
          <p className="plan-card__example"><strong>Exemplo de uso:</strong> {plan.example}</p>
          <ul className="plan-card__list">{plan.details.map((item) => <li key={item}>{item}</li>)}</ul>
        </>
      )}
      {compact ? (
        <a className="text-link" href={plan.href ?? '/servicos/#planos'}>Ver detalhes <ArrowIcon /></a>
      ) : (
        <a className="button button--primary" href={serviceWhatsApp(plan.message)} target="_blank" rel="noreferrer">Pedir proposta <ExternalIcon /></a>
      )}
    </article>
  )
}
