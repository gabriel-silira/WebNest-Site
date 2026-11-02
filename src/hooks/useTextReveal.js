import { useLayoutEffect } from 'react'

const revealSelector = 'h1, h2, .project-card h3, .real-project-card h3, .pricing-grid header strong, .process-list h3, .next-project strong'

function prepareHeading(heading) {
  if (heading.dataset.revealPrepared) return

  const text = heading.textContent.trim().replace(/\s+/g, ' ')
  const fragment = document.createDocumentFragment()
  let characterIndex = 0

  text.split(' ').forEach((word, wordIndex, words) => {
    const wordElement = document.createElement('span')
    wordElement.className = 'text-reveal__word'
    wordElement.setAttribute('aria-hidden', 'true')

    Array.from(word).forEach((character) => {
      const characterElement = document.createElement('span')
      characterElement.className = 'text-reveal__char'
      characterElement.style.setProperty('--character-index', characterIndex)
      characterElement.textContent = character
      wordElement.appendChild(characterElement)
      characterIndex += 1
    })

    fragment.appendChild(wordElement)
    if (wordIndex < words.length - 1) fragment.appendChild(document.createTextNode(' '))
  })

  heading.replaceChildren(fragment)
  heading.setAttribute('aria-label', text)
  heading.classList.add('text-reveal', 'text-reveal--ready')
  heading.dataset.revealPrepared = 'true'
}

export default function useTextReveal() {
  useLayoutEffect(() => {
    const headings = [...document.querySelectorAll(revealSelector)]
    headings.forEach(prepareHeading)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      headings.forEach((heading) => heading.classList.add('is-revealed'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })

    headings.forEach((heading) => {
      if (heading.classList.contains('is-revealed')) return
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [])
}
