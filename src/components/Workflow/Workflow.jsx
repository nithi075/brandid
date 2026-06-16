import { useState, useEffect, useRef } from 'react'
import './Workflow.css'

const workflowOptions = [
  {
    id: 'single',
    label: 'Single Account Management',
    description:
      'Perfect for businesses or individuals managing a single brand presence. We provide dedicated management, content creation, scheduling, and analytics for one social media account across all relevant platforms.',
  },
  {
    id: 'multiple',
    label: 'Multiple or Complex Accounts Management',
    description:
      'Designed for agencies, enterprises, or multi-brand businesses. We handle complex social media ecosystems spanning multiple accounts, brands, or markets with coordinated strategy, tailored content, and unified reporting.',
  },
]

export default function Workflow() {
  const [activeId, setActiveId] = useState('single')
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (headerRef.current) observer.observe(headerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="workflow" ref={sectionRef}>
      <div className="workflow__inner">
        {/* Header */}
        <div className="workflow__header reveal" ref={headerRef}>
          <h2 className="workflow__title">
            Unleash your potential with the right marketing strategy ✨
          </h2>
          <p className="workflow__desc">
            We have super clear workflows to make your social media pop out! We know how to work with your brand and team like no other would. Our organization is adaptable to your needs!
          </p>
        </div>

        {/* Accordion Options */}
        <div className="workflow__accordion">
          {workflowOptions.map((option, i) => (
            <div
              key={option.id}
              className={`workflow__item ${activeId === option.id ? 'workflow__item--active' : ''}`}
            >
              <button
                className="workflow__trigger"
                onClick={() => setActiveId(activeId === option.id ? null : option.id)}
                aria-expanded={activeId === option.id}
              >
                <span className="workflow__trigger-dot">🔶</span>
                <span className="workflow__trigger-label">{option.label}</span>
                <span className="workflow__trigger-icon">
                  {activeId === option.id ? '−' : '+'}
                </span>
              </button>

              <div
                className="workflow__panel"
                style={{
                  maxHeight: activeId === option.id ? '300px' : '0',
                }}
              >
                <div className="workflow__panel-inner">
                  <p>{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
