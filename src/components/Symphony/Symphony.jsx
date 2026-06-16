import './Symphony.css'

/* Partner/client logos for marquee */
const logos = [
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7913_logo-dens-alt.svg',
    alt: 'Dens',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7914_rid_logo-dot-black.svg',
    alt: 'RID',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7915_2ndhome_logo-black.svg',
    alt: '2nd Home',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78de_ratherlost.svg',
    alt: 'Ratherlost',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a791c_tt_wordmark-black.svg',
    alt: 'TT',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7916_de-zotte_logo-02-black.svg',
    alt: 'De Zotte',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7918_nbc_logo-black.svg',
    alt: 'NBC',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7919_feijoa_logo.svg',
    alt: 'Feijoa',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a791a_alrmd_logo-black1.svg',
    alt: 'ALRMD',
  },
  {
    src: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a79a2_360-logo_black.svg',
    alt: '360',
  },
]

export default function Symphony() {
  return (
    <section className="symphony">
      <div className="symphony__inner">
        {/* Header */}
        <div className="symphony__header">
          <h2 className="symphony__title">Mastering the Social Symphony 🎻</h2>
          <p className="symphony__desc">
            In a world where the digital landscape is both vast and competitive, we understand that
            the art of engagement extends far beyond just posting content.
          </p>
          <div className="symphony__buttons">
            <a
              href="/pricing-plans-old"
              className="btn-primary"
            >
              Pricing
            </a>
            <a
              href="/showcase"
              className="btn-secondary"
            >
              Showcase
            </a>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="symphony__marquee-wrapper">
          <p className="symphony__marquee-label">Trusted by these amazing companies worldwide</p>

          <div className="symphony__marquee">
            <div className="symphony__marquee-track">
              {/* Triplicated for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div key={i} className="symphony__logo">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
