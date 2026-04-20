import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo-mobile">
          <img src="/images/logo-crop.png" alt="Poulice Chicken" />
        </Link>
        <div className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
          <div className="nav-left">
            <Link to="/">Accueil</Link>
            <Link to="/menu">Le Menu</Link>
          </div>
          <Link to="/" className="nav-logo">
            <img src="/images/logo-crop.png" alt="Poulice Chicken" />
          </Link>
          <div className="nav-right">
            <Link to="/contact">Contact</Link>
            <a href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng" target="_blank" rel="noopener noreferrer" className="btn-commander">
              <div><span>Commander</span></div>
            </a>
          </div>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  )
}
