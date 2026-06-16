import { useEffect, useRef } from 'react'
import './Manifesto.css'

/* Manifesto statements shown sequentially */
const statements = [
  'Your growth partner in the digital world 🚀',
  'Strategy, Branding, Ads, and Content working together.',
  'Design that captures attention and marketing that drives action.',
  'Every post, campaign, and story serves a clear purpose.',
  'We turn audiences into communities and communities into customers.',
  'Creative storytelling backed by data-driven decisions.',
  'Helping brands grow, scale, and stand out online.',
]
export default function Manifesto() {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('manifesto__item--visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="manifesto">
      <div className="manifesto__inner">
        {statements.map((text, i) => (
          <div
            key={i}
            className="manifesto__item"
            ref={(el) => (itemsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <p className="manifesto__text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
