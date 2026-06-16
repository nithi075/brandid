import { useState, useRef, useEffect } from 'react'
import './BrickAgency.css'
import logo from '../../assets/logo.png'

const agencyServices = [
  {
    number: '01',
    label: 'Strategy',
    title: 'Building a roadmap for sustainable growth',
    description:
      'We create data-driven strategies that help brands reach the right audience, strengthen their digital presence, and achieve measurable business goals.',
    video: '/videos/video1.mp4',
  },
  {
    number: '02',
    label: 'Branding',
    title: 'Creating brands people remember',
    description:
      'From logo design to complete visual identity systems, we build memorable brands that connect with audiences and stand out from the competition.',
    video: '/videos/video2.mp4',
  },
  {
    number: '03',
    label: 'Marketing',
    title: 'Turning attention into business growth',
    description:
      'Using social media marketing, paid advertising, and growth-focused campaigns, we help businesses attract, engage, and convert customers.',
    video: '/videos/video3.mp4',
  },
  {
    number: '04',
    label: 'Content',
    title: 'Stories that inspire action',
    description:
      'Our team creates engaging content, creative visuals, videos, and storytelling experiences that build trust and drive meaningful engagement.',
    video: '/videos/video4.mp4',
  },
]
export default function BrickAgency() {
  const [activeIndex, setActiveIndex] = useState(0)
  const headerRef = useRef(null)

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
    return () => observer.disconnect()
  }, [])

  return (
    <section className="brick-agency">
      <div className="brick-agency__inner">
       <div className="brick-agency__brand">
  <img
    src={logo}
    alt="BrandID"
    className="brick-agency__brand-logo"
  />
</div>

        {/* Header */}
        <div className="brick-agency__header reveal" ref={headerRef}>
          <div className="brick-agency__header-left">
<h2 className="brick-agency__title">
  Everything your brand needs to grow
</h2>          </div>
          <div className="brick-agency__header-right">
           <p className="brick-agency__desc">
  We combine strategy, branding, marketing, and content creation to help
  businesses build a strong digital presence, attract the right audience,
  and achieve sustainable growth.
</p>
            <div className="brick-agency__header-links">
              <a
                href="https://brickagency.com/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Brandid Agency
              </a>
              <a
                href="https://brickagency.com/work/"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Studies
              </a>
            </div>
          </div>
        </div>

        {/* Accordion + Image */}
        <div className="brick-agency__content">
          {/* Left: Accordion list */}
          <div className="brick-agency__accordion">
            {agencyServices.map((service, i) => (
              <div
                key={i}
                className={`brick-agency__item ${activeIndex === i ? 'brick-agency__item--active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="brick-agency__item-header">
                  <span className="brick-agency__number">{service.number}</span>
                  <div className="brick-agency__item-labels">
                    <span className="brick-agency__label-normal">{service.label}</span>
                    <span className="brick-agency__label-hover">{service.label}</span>
                  </div>
                </div>

                {/* Expanded content (mobile) */}
                <div
                  className="brick-agency__panel"
                  style={{ maxHeight: activeIndex === i ? '400px' : '0' }}
                >
                  <div className="brick-agency__panel-inner">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                <div className="brick-agency__panel-image">
  <video
    src={service.video}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  />
</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Active image (desktop) */}
          <div className="brick-agency__image-panel">
            {agencyServices.map((service, i) => (
              <div
                key={i}
                className={`brick-agency__image-wrap ${activeIndex === i ? 'brick-agency__image-wrap--active' : ''}`}
              >
                <div className="brick-agency__image-info">
                  <h3 className="brick-agency__image-title">{service.title}</h3>
                  <p className="brick-agency__image-desc">{service.description}</p>
                </div>
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
