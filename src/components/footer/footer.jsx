import { useState } from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError(true)
      return
    }
    setSubmitted(true)
    setError(false)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top row */}
        <div className="footer__top">
          {/* Logo + Nav */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
  <img
    src={logo}
    alt="BrandID"
    className="footer__logo-img"
  />
</a>
            <nav className="footer__nav">
              <a href="/how-we-work" className="footer__nav-link">How we work</a>
              <a href="/pricing-plans" className="footer__nav-link">Pricing plans</a>
              <a href="/showcase" className="footer__nav-link">Showcase</a>
              <a href="/about-us" className="footer__nav-link">About us</a>
              <a
                href="https://wa.me/message/6KL77QOLZ6OFK1"
                className="footer__nav-link footer__nav-link--cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started
              </a>
            </nav>
          </div>

          {/* Subscribe */}
          <div className="footer__subscribe">
            <form className="footer__form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className="footer__input"
                placeholder="Subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email subscription"
              />
              <button type="submit" className="footer__submit">→</button>
            </form>
            <p className="footer__subscribe-note">
              By subscribing you agree to with our{' '}
              <a href="#" className="footer__link">Privacy Policy</a>
            </p>

            {submitted && (
              <p className="footer__success">Thank you! Your submission has been received!</p>
            )}
            {error && (
              <p className="footer__error">Oops! Something went wrong while submitting the form.</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom row */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <a href="https://docs.google.com/document/d/e/2PACX-1vSz6DuDuzRiV06UspSgaWbzifCgCEaaAjbf9luLjquK3X9vc0DXi3TVtmFGg2ZR6Y_8h1lrQfQnbbbj/pub" className="footer__link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/e/2PACX-1vQIZ_mTu4q1CUHAiavRdrvOjFLdaCJ18pLbl7-uOClh1BzHE5skmhMMXB9Aa29ksh16RSzlzIIdTD95/pub" className="footer__link" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="#" className="footer__link">Cookies Settings</a>
          </div>
          <p className="footer__copy">© 2023 BrandID. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  )
}
