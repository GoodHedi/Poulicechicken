export default function Contact() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Contact</h1>
        <span className="underline-deco"></span>
      </div>

      {/* FORMULAIRE */}
      <section className="contact-form-section">
        <form className="contact-form" action="#" method="POST">
          <div className="form-row">
            <select name="civilite">
              <option>Monsieur</option>
              <option>Madame</option>
            </select>
            <input type="text" name="nom" placeholder="Nom et Pr&eacute;nom*" required />
          </div>
          <input type="tel" name="telephone" placeholder="T&eacute;l&eacute;phone" />
          <input type="email" name="email" placeholder="Email*" required />
          <input type="text" name="sujet" placeholder="Sujet*" required />
          <textarea name="message" placeholder="Votre message*" required></textarea>
          <label className="checkbox">
            <input type="checkbox" required />
            J'accepte que mes donn&eacute;es personnelles soient trait&eacute;es.
          </label>
          <button type="submit" className="btn-submit">Soumettre</button>
        </form>
      </section>
    </>
  )
}
