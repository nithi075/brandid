import { useEffect, useRef } from 'react'
import './Services.css'

/* Service tags */
const servicesList = [
  'Film / Video Production',
  'Automated Posting',
  'Influencer Management',
  'Graphic Design',
  'Ad Campaigns',
  'Photography',
  'Copywriting',
  'Face Filters',
  'Animated Stories',
  'UGC Content',
]

/* Media items for services */
const serviceMedia = [
  {
    type: 'video',
    src: '/videos/video9.mp4',
  },
  {
    type: 'video',
    src: '/videos/video10.mp4',
  },
  {
    type: 'video',
    src: '/videos/video8.mp4',
  },
  {
    type: 'video',
    src: '/videos/video11.mp4',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const tagsRef = useRef([])
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
    tagsRef.current.forEach((el) => { if (el) observer.observe(el) })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" ref={sectionRef}>
      <div className="services__inner">
        {/* Header */}
        <div className="services__header reveal" ref={headerRef}>
          <h2 className="services__title">Take your content to the next level 🚀</h2>
          <p className="services__desc">
            From developing the core of your social media strategy, to generating unique posts with targeted copywriting: we got you!
          </p>
        </div>

        {/* Services Tags */}
        <div className="services__tags">
          {servicesList.map((service, i) => (
            <div
              key={i}
              className="services__tag reveal"
              ref={(el) => (tagsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="services__tag-dot">🔶</span>
              <span className="services__tag-label">{service}</span>
            </div>
          ))}
        </div>

        {/* Media Grid */}
      <div className="services__media">
  {serviceMedia.map((item, i) => (
    <div key={i} className="services__media-item">
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={(e) => {
          e.target.play().catch(() => {})
        }}
      />
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
