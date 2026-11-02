import { useState } from 'react'
import { DisclosureIcon } from './Icons.jsx'

export default function FaqList({ items, idPrefix = 'faq' }) {
  const [openItems, setOpenItems] = useState({})

  return <div className="faq__list">{items.map(([question, answer], index) => {
    const isOpen = Boolean(openItems[index])
    const questionId = `${idPrefix}-question-${index}`
    const answerId = `${idPrefix}-answer-${index}`

    return <div className="faq__item" key={question}>
      <button className="faq__question" id={questionId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenItems((current) => ({ ...current, [index]: !current[index] }))}>
        {question}<span aria-hidden="true"><DisclosureIcon /></span>
      </button>
      <div className={`faq__answer${isOpen ? ' is-open' : ''}`} id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen}>
        <div className="faq__answer-inner"><p>{answer}</p></div>
      </div>
    </div>
  })}</div>
}
