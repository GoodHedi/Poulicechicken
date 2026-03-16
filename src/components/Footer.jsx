import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src="/images/logo-crop.png" alt="Poulice Chicken" />
        </div>
        <div>
          <h4>Pages</h4>
          <Link to="/">Page d'Accueil</Link>
          <Link to="/menu">Notre Menu</Link>
          <Link to="/contact">Contactez-nous</Link>
        </div>
        <div>
          <h4>Infos</h4>
          <a href="#">Mentions L&eacute;gales</a>
          <a href="#">Politique de confidentialit&eacute;</a>
        </div>
        <div className="footer-social">
          <h4>Nos R&eacute;seaux</h4>
          <a href="#">&#128247; poulice_chicken</a>
          <a href="#">&#127925; poulice_chicken</a>
          <a href="#">&#128216; Poulice Chicken</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Poulice Chicken. Tous droits r&eacute;serv&eacute;s.
      </div>
    </footer>
  )
}
