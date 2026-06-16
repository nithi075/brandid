import { useEffect, useRef } from 'react'
import './Hero.css'

const galleryItems = [
  { type: 'video', src: '/videos/video1.mp4' },
  { type: 'video', src: '/videos/video2.mp4' },
  { type: 'video', src: '/videos/video3.mp4' },
  { type: 'video', src: '/videos/video4.mp4' },
  { type: 'video', src: '/videos/video5.mp4' },
  { type: 'video', src: '/videos/video6.mp4' },
  { type: 'video', src: '/videos/video7.mp4' },
  { type: 'video', src: '/videos/video8.mp4' },
  { type: 'video', src: '/videos/video9.mp4' },
  { type: 'video', src: '/videos/video10.mp4' },
]

function GalleryItem({ item }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const playVideo = async () => {
      try {
        video.muted = true
        await video.play()
      } catch (error) {
        console.log('Video autoplay prevented:', error)
      }
    }

    playVideo()
  }, [])

  return (
    <div className="hero__gallery-item hero__gallery-item--video">
      <video
        ref={videoRef}
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
  )
}

export default function Hero() {
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)
  const animFrameRef = useRef(null)

  const pos1Ref = useRef(0)
  const pos2Ref = useRef(0)

  const half = Math.ceil(galleryItems.length / 2)

  const col1Items = galleryItems.slice(0, half)
  const col2Items = galleryItems.slice(half)

  useEffect(() => {
    const speed = 0.5

    const animate = () => {
      pos1Ref.current -= speed
      pos2Ref.current += speed

      if (track1Ref.current) {
        const height = track1Ref.current.scrollHeight / 2

        if (Math.abs(pos1Ref.current) >= height) {
          pos1Ref.current = 0
        }

        track1Ref.current.style.transform =
          `translateY(${pos1Ref.current}px)`
      }

      if (track2Ref.current) {
        const height = track2Ref.current.scrollHeight / 2

        if (pos2Ref.current >= height) {
          pos2Ref.current = 0
        }

        track2Ref.current.style.transform =
          `translateY(${pos2Ref.current}px)`
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero__content">
        <h1 className="hero__title">
          Unleash the full potential of your Social Media Possibilities
        </h1>

        <p className="hero__subtitle">
          Through optimal Social Media Management and effective Content
          Creation we can let you reach out to whomever you desire as
          your customers.
        </p>

        <div className="hero__buttons">
          <a
            href="https://wa.me/message/6KL77QOLZ6OFK1"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>

          <a
            href="https://calendly.com/brick-socials/brick-social-information-call"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </a>
        </div>
      </div>

      {/* Right Gallery */}
      <div className="hero__gallery" aria-hidden="true">
        {/* Column 1 */}
        <div className="hero__gallery-col">
          <div
            className="hero__gallery-track"
            ref={track1Ref}
          >
            {[...col1Items, ...col1Items].map((item, index) => (
              <GalleryItem
                key={`col1-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="hero__gallery-col">
          <div
            className="hero__gallery-track"
            ref={track2Ref}
          >
            {[...col2Items, ...col2Items].map((item, index) => (
              <GalleryItem
                key={`col2-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}