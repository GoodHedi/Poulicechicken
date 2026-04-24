import { useState, useEffect } from 'react'

const BURGERS = [
  { img: '/images/big_swat.jpg', name: 'BIG S.W.A.T !!!', desc: 'Pain brioché, salade, tomate, oignons rouges, 2 tenders, galette pomme de terre, bacon, 2 onion rings, 2 stick mozza, cheddar fondu, 2 sauces au choix.', calories: '1180 kcal', anecdote: "Classé « arme de destruction massive » par le Bureau du Goût. Le consommer en public peut déclencher jalousie, larmes et demandes en mariage spontanées.", price: '79,80 MAD' },
  { img: '/images/sergent_bacon.jpg', name: 'Sergent Bacon !', desc: 'Pain brioché, salade, tomate, oignons rouges, 2 tenders, bacon, 2 onion rings, cheddar fondu, 2 sauces au choix.', calories: '950 kcal', anecdote: "Promu Sergent pour services rendus à la cause du bacon. Rumeur : il aurait fait pleurer un végétarien rien qu'en passant à côté.", price: '71,40 MAD' },
  { img: '/images/mozza_bomb.jpg', name: 'Mozza BOMB !!', desc: 'Pain brioché, salade, tomate, oignons rouges, 2 tenders, galette de mozza pannée, cheddar fondu, 2 sauces au choix.', calories: '1020 kcal', anecdote: "Artefact explosif : le fromage fondu continue de couler pendant 3 à 5 secondes après la 1ère bouchée. Prévoyez des serviettes, ou pleurez.", price: '81,60 MAD' },
  { img: '/images/batata_unit.jpg', name: 'Batata Unit !', desc: 'Pain brioché, salade, tomate, oignons rouges, 2 tenders, galette pomme de terre, cheddar fondu, 2 sauces au choix.', calories: '890 kcal', anecdote: "Unité d'élite anti-faim. La galette de pomme de terre a été entraînée dans un sauna à 180°C pendant 6 mois pour atteindre ce niveau de croustillant.", price: '67,90 MAD' },
  { img: '/images/classik_poulice.jpg', name: 'Classik Poulice !', desc: 'Pain brioché, salade, tomate, oignons rouges, 2 tenders, cheddar fondu, 2 sauces au choix.', calories: '780 kcal', anecdote: "Le burger fondateur. On raconte qu'un inspecteur a démissionné après sa 1ère bouchée pour ouvrir un food truck. Légende urbaine ? Peut-être.", price: '59,50 MAD' },
]

const WRAPS = [
  { img: '/images/wrap_bacon.jpg', name: 'W.R.A.P Bacon', desc: '2 tenders, bacon, salade, tomate, oignons blancs, 2 sauces au choix.', calories: '720 kcal', anecdote: "W.R.A.P = Witness Relocation And Protection. Le bacon planqué à l'intérieur bénéficie d'une protection maximale jusqu'à la 1ère bouchée.", price: '67,90 MAD' },
  { img: '/images/wrap_batata.jpg', name: 'W.R.A.P Batata', desc: '2 tenders, galette de pomme de terre, cheddar, salade, tomate, oignons blancs, 2 sauces au choix.', calories: '810 kcal', anecdote: "Double agent : croustillant à l'extérieur, moelleux dedans, traître à tous les régimes. N'a jamais été arrêté, jamais été attrapé.", price: '67,90 MAD' },
  { img: '/images/wrap_classik.jpg', name: 'W.R.A.P Classik', desc: '2 tenders, 1 cheddar, salade, tomate, oignons blancs, 2 sauces au choix.', calories: '640 kcal', anecdote: "Le plus discret du menu. Porté par les agents infiltrés pour passer inaperçus — avant que le cheddar fondu ne trahisse tout.", price: '59,50 MAD' },
]

const TACOS = [
  { img: '/images/tacos_tenders.jpg', name: 'T.A.C.O.S Tenders + Sauce fromagère', desc: 'Galette de blé cuite au four, tenders maison, frites, sauce fromagère maison + 2 sauces au choix.', calories: '980 kcal', anecdote: "Tellement chaud qu'on le manipule avec des gants kevlar. La sauce fromagère est classée secret-défense niveau 3.", price: '69,60 MAD' },
  { img: '/images/tacos_poulet.jpg', name: 'T.A.C.O.S Poulet + Sauce fromagère', desc: 'Galette de blé cuite au four, poulet nature, frites, sauce fromagère maison + 2 sauces au choix.', calories: '920 kcal', anecdote: "Le poulet est interrogé pendant 48h avant d'être enroulé. Il finit toujours par parler… de sa tendresse.", price: '69,60 MAD' },
  { img: '/images/tacos_indy.jpg', name: 'T.A.C.O.S Indy + Sauce fromagère', desc: 'Galette de blé cuite au four, poulet curry, frites, sauce fromagère maison + 2 sauces au choix.', calories: '940 kcal', anecdote: "Le curry a voyagé en clandestin depuis Bombay dans un container. À sa sortie il ne parlait plus qu'une seule langue : le délicieux.", price: '69,60 MAD' },
]

const TENDERS = [
  { img: '/images/tenders_x10.jpg', name: 'Tenders X10', desc: '10 filets de tenders, 3 sauces au choix.', calories: '1250 kcal', anecdote: "Format commando. Se partage… ou pas. Des amitiés ont été brisées pour 1 tender en moins.", price: '129,00 MAD' },
  { img: '/images/tenders_x5.jpg', name: 'Tenders X5', desc: '5 filets de tenders, 2 sauces au choix.', calories: '625 kcal', anecdote: "Le pack « je pensais partager, finalement non ». Testé et approuvé par 100% des égoïstes.", price: '69,00 MAD' },
  { img: '/images/tenders_x3.jpg', name: 'Tenders X3', desc: '3 filets de tenders, 1 sauce au choix.', calories: '375 kcal', anecdote: "Trio infernal. Comme les mousquetaires, mais en plus croustillant et avec moins d'épée.", price: '49,00 MAD' },
  { img: '/images/tenders_x2.jpg', name: 'Tenders X2', desc: '2 filets de tenders maison, 1 sauce au choix.', calories: '250 kcal', anecdote: "Le duo complice. L'un sert de leurre pendant que l'autre s'échappe dans votre estomac.", price: '39,00 MAD' },
  { img: '/images/tenders_x1.jpg', name: 'Tenders X1', desc: '1 filet de tenders maison.', calories: '125 kcal', anecdote: "Le solo. Personne ne commande jamais qu'un seul. Et pourtant il existe, comme une énigme.", price: '19,00 MAD' },
]

const TEXMEX = [
  { img: '/images/mozza_cube_x5.jpg', name: 'Mozza Cube x5', desc: '5 carrés mozza fondants fait maison.', calories: '420 kcal', anecdote: "5 cubes, 5 chances de se brûler la langue. Ça s'appelle l'adrénaline, c'est offert avec.", price: '36,75 MAD' },
  { img: '/images/mozza_cube_x3.jpg', name: 'Mozza Cube x3', desc: '3 carrés mozza fondants fait maison.', calories: '252 kcal', anecdote: "Le format « je teste juste ». Spoiler : vous reviendrez pour le x5.", price: '29,25 MAD' },
  { img: '/images/frite_fromagere_bacon.jpg', name: 'Frites fromagère + Bacon', desc: 'Frites sauce fromagère maison (type tacos) + bacon.', calories: '680 kcal', anecdote: "Combo illégal dans 3 pays imaginaires. Fromage fondu + bacon = dossier classifié niveau ultra-délicieux.", price: '35,00 MAD' },
  { img: '/images/frite_fromagere_pepperoni.jpg', name: 'Frites fromagère + Pepperoni', desc: 'Frites sauce fromagère maison (type tacos) + pepperoni.', calories: '660 kcal', anecdote: "Le pepperoni a quitté la pizza pour rejoindre la frite. Trahison culinaire de l'année.", price: '35,00 MAD' },
  { img: '/images/frite_cheddar_bacon.jpg', name: 'Frites Cheddar Bacon', desc: 'Généreuse portion de frites cheddar bacon.', calories: '590 kcal', anecdote: "Le bacon s'invite dans le cheddar qui s'invite sur les frites. Un squat délicieux, personne ne porte plainte.", price: '29,00 MAD' },
  { img: '/images/frite_cheddar_pepperoni.jpg', name: 'Frites Cheddar Pepperoni', desc: 'Généreuse portion de frites cheddar pepperoni.', calories: '570 kcal', anecdote: "Les frites, le cheddar et le pepperoni ont signé un pacte. Aucune bouchée n'en est jamais revenue intacte.", price: '29,00 MAD' },
  { img: '/images/frite_fromagere.jpg', name: 'Frites Sauce Fromagère', desc: 'Frites sauce fromagère maison (type tacos).', calories: '510 kcal', anecdote: "La sauce fromagère est tellement addictive qu'elle figure sur une liste de surveillance gastronomique.", price: '29,00 MAD' },
  { img: '/images/frite_cheddar.jpg', name: 'Frites Cheddar', desc: 'Généreuse portion de frites cheddar.', calories: '480 kcal', anecdote: "Le classique indétrônable. Mangé les yeux fermés par 9 inspecteurs sur 10.", price: '20,00 MAD' },
]

const DESSERTS = [
  { img: '/images/tiramisu_oreo.jpg', name: 'Tiramisu Oréo', desc: 'Tiramisu goût Oréo fait maison.', calories: '420 kcal', anecdote: "Un Oréo italien a épousé un tiramisu marocain. Le mariage se déguste à la petite cuillère.", price: '29,25 MAD' },
  { img: '/images/tiramisu_speculos.jpg', name: 'Tiramisu Spéculos', desc: 'Tiramisu goût Spéculos fait maison.', calories: '430 kcal', anecdote: "Le spéculos a été kidnappé pendant une pause café. Rançon payée : votre self-control.", price: '29,25 MAD' },
  { img: '/images/brookie.jpg', name: 'Brookie', desc: 'Savoureux mélange de brownie et de cookie, une part généreuse.', calories: '510 kcal', anecdote: "Brownie + Cookie = Brookie. Le crossover que personne n'attendait, que tout le monde réclame.", price: '39,00 MAD' },
]

const BOISSONS = [
  { img: '/images/fanta_citron.png', name: 'Fanta Citron 25cl', price: '15,00 MAD' },
  { img: '/images/fanta_orange.jpg', name: 'Fanta Orange 25cl', price: '15,00 MAD' },
  { img: '/images/hawai_ananas.jpg', name: 'Hawai Ananas 25cl', price: '15,00 MAD' },
  { img: '/images/schweppes_mojito.jpg', name: 'Schweppes Mojito 25cl', price: '15,00 MAD' },
  { img: '/images/miranda_pomme.jpg', name: 'Miranda Pomme', price: '12,00 MAD' },
  { img: '/images/miranda_orange.jpg', name: 'Miranda Orange', price: '12,00 MAD' },
  { img: '/images/miranda_citron.jpg', name: 'Miranda Citron', price: '12,00 MAD' },
  { img: '/images/coca_cola.jpg', name: 'Coca Cola 25cl', price: '12,00 MAD' },
  { img: '/images/pepsi.jpg', name: 'Pepsi 25cl', price: '12,00 MAD' },
  { img: '/images/poms.png', name: "Pom's 25cl", price: '12,00 MAD' },
  { img: '/images/seven_up.jpg', name: 'Seven-Up 25cl', price: '12,00 MAD' },
  { img: '/images/eau.jpg', name: 'Eau 33cl', price: '8,00 MAD' },
]

function MenuItem({ item, onClick }) {
  return (
    <div className={`menu-item${onClick ? ' menu-item--clickable' : ''}`} onClick={onClick}>
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      {item.desc && <p className="description">{item.desc}</p>}
    </div>
  )
}

function ProductModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="product-modal__img-wrap">
          <img src={item.img} alt={item.name} />
          {item.calories && (
            <div className="product-modal__calories-badge">
              <span className="product-modal__cal-value">{item.calories}</span>
              <span className="product-modal__cal-label">Estimé</span>
            </div>
          )}
        </div>

        <div className="product-modal__body">
          <div className="product-modal__tag">Dossier confidentiel</div>
          <h2 className="product-modal__name">{item.name}</h2>

          <div className="product-modal__section">
            <h4 className="product-modal__section-title">Composition</h4>
            <p className="product-modal__desc">{item.desc}</p>
          </div>

          {item.anecdote && (
            <div className="product-modal__anecdote">
              <div className="product-modal__anecdote-icon">?!</div>
              <div>
                <h4 className="product-modal__section-title">Le saviez-vous ?</h4>
                <p className="product-modal__anecdote-text">{item.anecdote}</p>
              </div>
            </div>
          )}

          <a
            href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng"
            target="_blank"
            rel="noopener noreferrer"
            className="product-modal__order"
          >
            Commander sur Glovo →
          </a>
        </div>
      </div>
    </div>
  )
}

function MenuSection({ title, titleSpan, items, onOpen, spanClass }) {
  return (
    <section className="menu-category">
      <h2 className="category-title">{title} <span className={spanClass}>{titleSpan}</span></h2>
      <div className="menu-grid">
        {items.map((item, i) => (
          <MenuItem key={i} item={item} onClick={onOpen ? () => onOpen(item) : undefined} />
        ))}
      </div>
    </section>
  )
}

export default function Menu() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="page-header">
        <h1 data-label="MENU  OFFICIEL">Le Menu</h1>
        <span className="underline-deco"></span>
      </div>

      <MenuSection title="Nos" titleSpan="Burgers" items={BURGERS} onOpen={setSelected} spanClass="cimo-italic" />
      <MenuSection title="Les" titleSpan="Wraps" items={WRAPS} onOpen={setSelected} />
      <MenuSection title="Les" titleSpan="Tacos" items={TACOS} onOpen={setSelected} />
      <MenuSection title="Chicken" titleSpan="Tenders" items={TENDERS} onOpen={setSelected} />
      <MenuSection title="Tex Mex &" titleSpan="Frites" items={TEXMEX} onOpen={setSelected} />
      <MenuSection title="" titleSpan="Desserts Maison" items={DESSERTS} onOpen={setSelected} />
      <MenuSection title="Les" titleSpan="Boissons" items={BOISSONS} onOpen={null} />

      <section className="section-cta">
        <h2>Passe ta commande !</h2>
        <p>Commandez facilement vos tenders croustillants : livraison via Glovo directement chez vous.</p>
        <a href="https://glovoapp.com/en/ma/tanger/stores/poulice-chicken-tng" target="_blank" rel="noopener noreferrer" className="btn-cta">Commander en ligne</a>
      </section>

      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
