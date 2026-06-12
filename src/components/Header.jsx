import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'
import './Header.css'

/**
 * Sticky header (reference: .header-3 — logo left, nav centered).
 * Becomes solid/compact after scrolling past a threshold (reference .-sticky state).
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-sticky' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="branding" onClick={handleNavClick}>
          <span className="branding-title">Daria Sobko</span>
        </a>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`}>
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href} className="nav-item">
                <a href={item.href} onClick={handleNavClick}>
                  <span className="nav-slash">//</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' is-active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>
    </header>
  )
}
