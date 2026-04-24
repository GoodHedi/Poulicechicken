export default function Franchise() {
  return (
    <>
      <div className="page-header">
        <h1 data-label="REJOINDRE  LA  BRIGADE">Franchise</h1>
        <span className="underline-deco"></span>
      </div>

      <section className="marque-section">
        <div className="marque-wrap">
          <span className="marque-tag">Opportunité — Recrutement</span>
          <h2>Ouvre ta propre <span className="gold">brigade</span></h2>
          <p>
            Tu crois au concept ? Tu veux porter les couleurs de Poulice Chicken dans ta ville ?
            On recrute des partenaires sérieux pour étendre la brigade. Formation, recettes,
            accompagnement : on te donne tout ce qu'il faut pour réussir.
          </p>
        </div>
      </section>

      <section className="marque-section marque-section--alt">
        <div className="marque-grid">
          <div className="marque-card">
            <div className="marque-card__num">01</div>
            <h3>Concept prouvé</h3>
            <p>Un positionnement unique, une identité forte et une clientèle déjà conquise.</p>
          </div>
          <div className="marque-card">
            <div className="marque-card__num">02</div>
            <h3>Formation complète</h3>
            <p>2 semaines d'immersion au QG, recettes, gestion et service de A à Z.</p>
          </div>
          <div className="marque-card">
            <div className="marque-card__num">03</div>
            <h3>Support continu</h3>
            <p>Marketing, approvisionnement, opérations. On reste à tes côtés après l'ouverture.</p>
          </div>
          <div className="marque-card">
            <div className="marque-card__num">04</div>
            <h3>Rentabilité rapide</h3>
            <p>Modèle éprouvé, panier moyen solide, volumes importants dès les premiers mois.</p>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <h2>Candidate à la franchise</h2>
        <p>Envoie-nous ton profil via le formulaire de contact — on revient vers toi rapidement.</p>
        <a href="/contact" className="btn-cta">Nous contacter →</a>
      </section>
    </>
  )
}
