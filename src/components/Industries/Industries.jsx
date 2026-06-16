import { useRef, useEffect } from 'react'
import './Industries.css'

const industries = [
  'Hi-Tech',
  'Hospitality',
  'Corporate',
  'SaaS',
  'Entertainment',
  'Non-profit',
  'Real Estate',
  'Fitness',
]

export default function Industries() {
  const headerRef = useRef(null)
  const pillsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    pillsRef.current.forEach((el) => { if (el) observer.observe(el) })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="industries">
      <div className="industries__inner">
        {/* Header */}
        <div className="industries__header reveal" ref={headerRef}>
          <div className="industries__header-left">
            <h2 className="industries__title">
              Some of the industries we love to work with 🧡
            </h2>
          </div>
          <div className="industries__header-right">
            <p className="industries__desc">
              These are just some of the industries we help on a regular basis. Learn how we work with them, or just hit us up if you have other needs.
            </p>
            <div className="industries__links">
              <a href="/how-we-work" className="btn-primary">How we work</a>
              <a href="/about-us" className="btn-secondary">About us</a>
            </div>
          </div>
        </div>

        {/* Industry Tags */}
        <div className="industries__grid">
          {industries.map((name, i) => (
            <div
              key={i}
              className="industries__pill reveal"
              ref={(el) => (pillsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
