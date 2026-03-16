import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Home() {
  const macmozzaRef = useRef(null)

  const handleImpact = () => {
    const el = macmozzaRef.current
    if (el) {
      el.classList.remove('impact-shake')
      void el.offsetWidth
      el.classList.add('impact-shake')
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/images/backgroundvideo1.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
        </div>

        <div className="hero-macmozza-wrapper" ref={macmozzaRef} onClick={handleImpact}>
          <img src="/images/Macmozza.png" alt="Mac Mozza" className="hero-macmozza" />
        </div>
      </section>


      {/* NOTRE RESTAURANT */}
      <section className="section-location" id="restaurant">
        <h2 className="section-title">Notre Restaurant</h2>
        <p className="section-subtitle">Rejoignez-nous &agrave; Tanger pour vivre l'exp&eacute;rience authentique du crispy chicken</p>
        <div className="location-grid">
          <div className="location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5!2d-5.8!3d35.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzEyLjAiTiA1wrA0OCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1" loading="lazy" allowFullScreen></iframe>
          </div>
          <div className="location-info">
            <div className="location-card">
              <h3>Tanger</h3>
              <p>P4RH+M8, Tangier, Morocco</p>
            </div>
            <div className="location-card-light">
              <h3>Livraison</h3>
              <p>Via Glovo - 5,00 MAD</p>
            </div>
            <div className="location-card-light">
              <h3>Temps de livraison</h3>
              <p>10 - 25 minutes</p>
            </div>
            <div className="location-card-light">
              <h3>Note clients</h3>
              <p>97% de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <h2>Passe ta commande !</h2>
        <p>Commandez facilement vos tenders croustillants : livraison via Glovo directement chez vous.</p>
        <a href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng" target="_blank" rel="noopener noreferrer" className="btn-cta">Commander en ligne</a>
      </section>
    </>
  )
}
