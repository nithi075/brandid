import { useRef, useEffect } from 'react'
import './CTA.css'

export default function CTA() {
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )
    if (ctaRef.current) observer.observe(ctaRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta">
      <div className="cta__inner reveal" ref={ctaRef}>
        <h2 className="cta__title">Let's get your socials burning 🔥</h2>
        <p className="cta__subtitle">
          Take your business to new heights with a killer social media marketing plan.
        </p>
        <div className="cta__buttons">
          <a
            href="https://wa.me/message/6KL77QOLZ6OFK1"
            className="cta__btn cta__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started
          </a>
          <a
            href="https://calendly.com/brick-socials/brick-social-information-call"
            className="cta__btn cta__btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  )
}
