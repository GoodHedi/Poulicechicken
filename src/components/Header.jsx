import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo-mobile" onClick={close}>
          <img src="/images/logo-crop.png" alt="Poulice Chicken" />
        </Link>
        <div className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
          <div className="nav-left">
            <Link to="/" onClick={close}>Accueil</Link>
            <Link to="/la-marque" onClick={close}>La Marque</Link>
            <Link to="/menu" onClick={close}>Le Menu</Link>
          </div>
          <Link to="/" className="nav-logo" onClick={close}>
            <img src="/images/logo-crop.png" alt="Poulice Chicken" />
          </Link>
          <div className="nav-right">
            <Link to="/franchise" onClick={close}>Franchise</Link>
            <Link to="/contact" onClick={close}>Contact</Link>
            <a href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng" target="_blank" rel="noopener noreferrer" className="btn-commander" onClick={close}>
              <div><span>Commander</span></div>
            </a>
          </div>
        </div>

        {/* Commander button mobile - shows in mobile nav */}
        <a href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng" target="_blank" rel="noopener noreferrer" className="btn-commander-mobile">
          <span>Commander</span>
        </a>

        <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  )
}
