export default function LaMarque() {
  return (
    <>
      <div className="page-header">
        <h1 data-label="NOTRE  IDENTITÉ">La Marque</h1>
        <span className="underline-deco"></span>
      </div>

      <section className="marque-section">
        <div className="marque-wrap">
          <span className="marque-tag">Dossier #001 — Origin Story</span>
          <h2>Poulice Chicken, <span className="gold">c'est quoi ?</span></h2>
          <p>
            Née à Tanger en 2024, Poulice Chicken est la brigade officieuse du tender croustillant.
            Une équipe d'infiltrés obsédés par la panure maison, les sauces secrètes et la cuisson
            millimétrée. On ne fait pas du fast-food. On fait du fast-<em>bien</em>.
          </p>
        </div>
      </section>

      <section className="marque-section marque-section--alt">
        <div className="marque-grid">
          <div className="marque-card">
            <div className="marque-card__num">01</div>
            <h3>Panure maison</h3>
            <p>Recette gardée sous scellés. Mélange d'épices testé, approuvé et jamais divulgué.</p>
          </div>
          <div className="marque-card">
            <div className="marque-card__num">02</div>
            <h3>Poulet frais</h3>
            <p>Zéro congélation. Livraison quotidienne, mariné 24h avant passage en friteuse.</p>
          </div>
          <div className="marque-card">
            <div className="marque-card__num">03</div>
            <h3>Sauces signature</h3>
            <p>Fromagère, curry, BBQ maison. Conçues pour créer de vraies addictions légales.</p>
          </div>
          <div className="marque-card">
            <div className="marque-card__num">04</div>
            <h3>Vibes Tanger</h3>
            <p>Street food urbaine, esthétique cinématographique, énergie 100% marocaine.</p>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <h2>Prêt à rejoindre la brigade ?</h2>
        <p>Découvre le menu et passe ta commande — la suite se joue en bouche.</p>
        <a href="/menu" className="btn-cta">Voir le menu →</a>
      </section>
    </>
  )
}
