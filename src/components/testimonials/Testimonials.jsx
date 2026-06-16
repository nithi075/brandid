import './Testimonials.css'

const testimonials = [
  {
    quote:
      'Professional team of creatives with high attention for detail and willingness to think along with specific wishes of the client.',
    avatar:
      'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fd_bs_revirew_J.png',
    name: 'Arjun',
    role: 'Event Programmer, Ratherlost',
  },
  {
    quote:
      'Dream team! They helped us so much setting up our social media strategy. Really recommend them if you need professionals ;-)',
    avatar:
      'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fb_bs_revirew_K.png',
    name: 'Simon',
    role: 'Manager, Leadership Training',
  },
  {
    quote:
      'Amazing service, worked with Brick on some projects that needed a professional and great design. Executed perfectly! 10/10 would recommend!',
    avatar:
      'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fc_bs_revirew_L.png',
    name: 'Anitha',
    role: 'CEO, NoBrands',
  },
  {
    quote:
      'Top notch agency with a team that knows how to strike the balance between pushing their own creativity and fulfilling their clients needs.',
    avatar:
      'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78ff_bs_revirew_K_1.png',
    name: 'Kumar',
    role: 'Co-founder, Hittegolf-media',
  },
  {
    quote:
      'Without BRICK Socials we would not be who we are today. The place to be when you need consistency!',
    avatar:
      'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fc_bs_revirew_L.png',
    name: 'Santhosh',
    role: 'Founder/CEO, Social Training Club',
  },
  {
    quote:
      'The agency has a mix range of talented graphic designers, videographers and social media managers. Very hands on and amazing to work with!',
    avatar:
      'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fe_bs_revirew_S.png',
    name: 'Ravi',
    role: 'Manager, Tacos&Tequila',
  },
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial__card">
      <p className="testimonial__quote">"{testimonial.quote}"</p>
      <div className="testimonial__author">
        <img
          className="testimonial__avatar"
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
        />
        <div className="testimonial__info">
          <span className="testimonial__name">{testimonial.name}</span>
          <span className="testimonial__role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  /* Duplicate for seamless marquee */
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h2 className="testimonials__title">The word on the street is ...</h2>
        <p className="testimonials__subtitle">
          You can't just take our word for it. Our clients vow for us :)
        </p>
      </div>

      {/* Scrolling marquee row */}
      <div className="testimonials__marquee-wrapper">
        <div className="testimonials__marquee-track">
          {doubledTestimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
