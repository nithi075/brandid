import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

/* Navbar with blur on scroll and mobile hamburger */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={closeMenu}>
  <img
    src={logo}
    alt="Your Company Logo"
    className="navbar__logo-img"
  />
</a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          <li><a href="/how-we-work" className="navbar__link">How we work</a></li>
          <li><a href="/pricing-plans" className="navbar__link">Pricing plans</a></li>
          <li><a href="/showcase" className="navbar__link">Showcase</a></li>
          <li><a href="/about-us" className="navbar__link">About us</a></li>
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="navbar__cta">
          <a
            href="https://calendly.com/brick-socials/brick-social-information-call"
            className="navbar__btn navbar__btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a demo
          </a>
          <a
            href="https://wa.me/message/6KL77QOLZ6OFK1"
            className="navbar__btn navbar__btn--filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          <li><a href="/how-we-work" onClick={closeMenu}>How we work</a></li>
          <li><a href="/pricing-plans" onClick={closeMenu}>Pricing plans</a></li>
          <li><a href="/showcase" onClick={closeMenu}>Showcase</a></li>
          <li><a href="/about-us" onClick={closeMenu}>About us</a></li>
        </ul>
        <div className="navbar__mobile-cta">
          <a
            href="https://calendly.com/brick-socials/brick-social-information-call"
            className="navbar__btn navbar__btn--outline"
            onClick={closeMenu}
          >
            Book a demo
          </a>
          <a
            href="https://wa.me/message/6KL77QOLZ6OFK1"
            className="navbar__btn navbar__btn--filled"
            onClick={closeMenu}
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  )
}
