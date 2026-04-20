import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* Police tapes décoratives */}
        <div className="police-tape police-tape-top">
          <div className="police-tape-content">
            <span>Crime Scene</span>
            <span>Do Not Cross</span>
            <span>Poulice Chicken</span>
            <span>Crispy Inside</span>
            <span>Crime Scene</span>
            <span>Do Not Cross</span>
            <span>Poulice Chicken</span>
            <span>Crispy Inside</span>
          </div>
        </div>

        <div className="hero-content">
          <h1>
            Poulice <span className="rush-flow gradient-chicken">Chicken</span>
          </h1>
          <p className="hero-subtitle">Crispy · Tanger · Depuis 2024</p>
          <p>
            Tenders croustillants, panure secrète, sauces maison.
            La recette qui rend toute la ville <strong>complice</strong>.
          </p>
          <div className="hero-cta-group">
            <a
              href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Commander sur Glovo
              <span aria-hidden>→</span>
            </a>
            <Link to="/menu" className="btn-hero-ghost">
              Voir le menu
            </Link>
          </div>
        </div>

        <div className="police-tape police-tape-bottom">
          <div className="police-tape-content">
            <span>Wanted</span>
            <span>10-25 min</span>
            <span>97% Satisfait</span>
            <span>Tanger Only</span>
            <span>Wanted</span>
            <span>10-25 min</span>
            <span>97% Satisfait</span>
            <span>Tanger Only</span>
          </div>
        </div>

        <div className="hero-meta">
          <span>Dossier #001</span>
          <span>Tanger, Maroc</span>
          <span>Livraison 5 MAD</span>
        </div>
      </section>

      {/* NOTRE RESTAURANT */}
      <section className="section-location" id="restaurant">
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">Notre adresse</span>
        </div>
        <h2 className="section-title">Le QG du <span style={{ color: 'var(--tape)', fontFamily: "'Rush Flow', cursive", display: 'inline-block', transform: 'rotate(-3deg)' }}>Crispy</span></h2>
        <p className="section-subtitle">
          Rejoignez-nous à Tanger pour vivre l'expérience authentique
          du crispy chicken — fait maison, servi chaud.
        </p>

        <div className="location-grid">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5!2d-5.8!3d35.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzEyLjAiTiA1wrA0OCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1"
              loading="lazy"
              allowFullScreen
              title="Carte Poulice Chicken"
            />
          </div>

          <div className="location-info">
            <div className="location-card">
              <h3>Tanger</h3>
              <p>P4RH+M8, Tangier, Morocco</p>
            </div>
            <div className="location-card-light">
              <div>
                <h3>Livraison</h3>
                <p>Via Glovo · 5,00 MAD</p>
              </div>
            </div>
            <div className="location-card-light">
              <div>
                <h3>Temps moyen</h3>
                <p>10 — 25 minutes</p>
              </div>
            </div>
            <div className="location-card-light">
              <div>
                <h3>Satisfaction</h3>
                <p>97% clients ravis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <h2>Passe à l'action</h2>
        <p>
          Commandez facilement vos tenders croustillants :
          livraison via Glovo directement chez vous.
        </p>
        <a
          href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          Commander en ligne
        </a>
      </section>
    </>
  )
}
