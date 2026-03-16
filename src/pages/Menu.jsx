export default function Menu() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Le Menu</h1>
        <span className="underline-deco"></span>
      </div>

      {/* LES BURGERS */}
      <section className="menu-category">
        <h2 className="category-title">Nos <span>Burgers</span></h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/big_swat.jpg" alt="BIG S.W.A.T" />
            <h3>BIG S.W.A.T !!!</h3>
            <p className="description">Pain brioch&eacute;, salade, tomate, oignons rouges, 2 tenders, galette pomme de terre, bacon, 2 onion rings, 2 stick mozza, cheddar fondu, 2 sauces au choix.</p>
            <div className="price">79,80 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/sergent_bacon.jpg" alt="Sergent Bacon" />
            <h3>Sergent Bacon !</h3>
            <p className="description">Pain brioch&eacute;, salade, tomate, oignons rouges, 2 tenders, bacon, 2 onion rings, cheddar fondu, 2 sauces au choix.</p>
            <div className="price">71,40 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/mozza_bomb.jpg" alt="Mozza BOMB" />
            <h3>Mozza BOMB !!</h3>
            <p className="description">Pain brioch&eacute;, salade, tomate, oignons rouges, 2 tenders, galette de mozza pann&eacute;e, cheddar fondu, 2 sauces au choix.</p>
            <div className="price">81,60 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/batata_unit.jpg" alt="Batata Unit" />
            <h3>Batata Unit !</h3>
            <p className="description">Pain brioch&eacute;, salade, tomate, oignons rouges, 2 tenders, galette pomme de terre, cheddar fondu, 2 sauces au choix.</p>
            <div className="price">67,90 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/classik_poulice.jpg" alt="Classik Poulice" />
            <h3>Classik Poulice !</h3>
            <p className="description">Pain brioch&eacute;, salade, tomate, oignons rouges, 2 tenders, cheddar fondu, 2 sauces au choix.</p>
            <div className="price">59,50 MAD</div>
          </div>
        </div>
      </section>

      {/* LES WRAPS */}
      <section className="menu-category">
        <h2 className="category-title">Les <span>Wraps</span></h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/wrap_bacon.jpg" alt="W.R.A.P Bacon" />
            <h3>W.R.A.P Bacon</h3>
            <p className="description">2 tenders, bacon, salade, tomate, oignons blancs, 2 sauces au choix.</p>
            <div className="price">67,90 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/wrap_batata.jpg" alt="W.R.A.P Batata" />
            <h3>W.R.A.P Batata</h3>
            <p className="description">2 tenders, galette de pomme de terre, cheddar, salade, tomate, oignons blancs, 2 sauces au choix.</p>
            <div className="price">67,90 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/wrap_classik.jpg" alt="W.R.A.P Classik" />
            <h3>W.R.A.P Classik</h3>
            <p className="description">2 tenders, 1 cheddar, salade, tomate, oignons blancs, 2 sauces au choix.</p>
            <div className="price">59,50 MAD</div>
          </div>
        </div>
      </section>

      {/* LES TACOS AU FOUR */}
      <section className="menu-category">
        <h2 className="category-title">Les <span>Tacos</span> au four</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/tacos_tenders.jpg" alt="T.A.C.O.S Tenders" />
            <h3>T.A.C.O.S Tenders + Sauce fromag&egrave;re</h3>
            <p className="description">Galette de bl&eacute; cuite au four, tenders maison, frites, sauce fromag&egrave;re maison + 2 sauces au choix.</p>
            <div className="price">69,60 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tacos_poulet.jpg" alt="T.A.C.O.S Poulet" />
            <h3>T.A.C.O.S Poulet + Sauce fromag&egrave;re</h3>
            <p className="description">Galette de bl&eacute; cuite au four, poulet nature, frites, sauce fromag&egrave;re maison + 2 sauces au choix.</p>
            <div className="price">69,60 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tacos_indy.jpg" alt="T.A.C.O.S Indy" />
            <h3>T.A.C.O.S Indy + Sauce fromag&egrave;re</h3>
            <p className="description">Galette de bl&eacute; cuite au four, poulet curry, frites, sauce fromag&egrave;re maison + 2 sauces au choix.</p>
            <div className="price">69,60 MAD</div>
          </div>
        </div>
      </section>

      {/* CHICKEN / TENDERS */}
      <section className="menu-category">
        <h2 className="category-title"><span>Chicken</span> Tenders</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/tenders_x10.jpg" alt="Tenders X10" />
            <h3>Tenders X10</h3>
            <p className="description">10 filets de tenders, 3 sauces au choix.</p>
            <div className="price">129,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tenders_x5.jpg" alt="Tenders X5" />
            <h3>Tenders X5</h3>
            <p className="description">5 filets de tenders, 2 sauces au choix.</p>
            <div className="price">69,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tenders_x3.jpg" alt="Tenders X3" />
            <h3>Tenders X3</h3>
            <p className="description">3 filets de tenders, 1 sauce au choix.</p>
            <div className="price">49,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tenders_x2.jpg" alt="Tenders X2" />
            <h3>Tenders X2</h3>
            <p className="description">2 filets de tenders maison, 1 sauce au choix.</p>
            <div className="price">39,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tenders_x1.jpg" alt="Tenders X1" />
            <h3>Tenders X1</h3>
            <p className="description">1 filet de tenders maison.</p>
            <div className="price">19,00 MAD</div>
          </div>
        </div>
      </section>

      {/* TEX MEX & FRITES */}
      <section className="menu-category">
        <h2 className="category-title">Tex Mex &amp; <span>Frites</span></h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/mozza_cube_x5.jpg" alt="Mozza Cube x5" />
            <h3>Mozza Cube x5</h3>
            <p className="description">5 carr&eacute;s mozza fondants fait maison.</p>
            <div className="price">36,75 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/mozza_cube_x3.jpg" alt="Mozza Cube x3" />
            <h3>Mozza Cube x3</h3>
            <p className="description">3 carr&eacute;s mozza fondants fait maison.</p>
            <div className="price">29,25 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/frite_fromagere_bacon.jpg" alt="Frites sauce fromagère + Bacon" />
            <h3>Frites fromag&egrave;re + Bacon</h3>
            <p className="description">Frites sauce fromag&egrave;re maison (type tacos) + bacon.</p>
            <div className="price">35,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/frite_fromagere_pepperoni.jpg" alt="Frites sauce fromagère + Pepperoni" />
            <h3>Frites fromag&egrave;re + Pepperoni</h3>
            <p className="description">Frites sauce fromag&egrave;re maison (type tacos) + pepperoni.</p>
            <div className="price">35,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/frite_cheddar_bacon.jpg" alt="Frites Cheddar Bacon" />
            <h3>Frites Cheddar Bacon</h3>
            <p className="description">G&eacute;n&eacute;reuse portion de frites cheddar bacon.</p>
            <div className="price">29,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/frite_cheddar_pepperoni.jpg" alt="Frites Cheddar Pepperoni" />
            <h3>Frites Cheddar Pepperoni</h3>
            <p className="description">G&eacute;n&eacute;reuse portion de frites cheddar pepperoni.</p>
            <div className="price">29,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/frite_fromagere.jpg" alt="Frites sauce fromagère" />
            <h3>Frites Sauce Fromag&egrave;re</h3>
            <p className="description">Frites sauce fromag&egrave;re maison (type tacos).</p>
            <div className="price">29,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/frite_cheddar.jpg" alt="Frites Cheddar" />
            <h3>Frites Cheddar</h3>
            <p className="description">G&eacute;n&eacute;reuse portion de frites cheddar.</p>
            <div className="price">20,00 MAD</div>
          </div>
        </div>
      </section>

      {/* DESSERTS MAISON */}
      <section className="menu-category">
        <h2 className="category-title"><span>Desserts</span> Maison</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/tiramisu_oreo.jpg" alt="Tiramisu Oréo" />
            <h3>Tiramisu Or&eacute;o</h3>
            <p className="description">Tiramisu go&ucirc;t Or&eacute;o fait maison.</p>
            <div className="price">29,25 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/tiramisu_speculos.jpg" alt="Tiramisu Spéculos" />
            <h3>Tiramisu Sp&eacute;culos</h3>
            <p className="description">Tiramisu go&ucirc;t Sp&eacute;culos fait maison.</p>
            <div className="price">29,25 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/brookie.jpg" alt="Brookie" />
            <h3>Brookie</h3>
            <p className="description">Savoureux m&eacute;lange de brownie et de cookie, une part g&eacute;n&eacute;reuse.</p>
            <div className="price">39,00 MAD</div>
          </div>
        </div>
      </section>

      {/* BOISSONS */}
      <section className="menu-category">
        <h2 className="category-title">Les <span>Boissons</span></h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/fanta_citron.png" alt="Fanta Citron" />
            <h3>Fanta Citron 25cl</h3>
            <div className="price">15,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/fanta_orange.jpg" alt="Fanta Orange" />
            <h3>Fanta Orange 25cl</h3>
            <div className="price">15,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/hawai_ananas.jpg" alt="Hawai Ananas" />
            <h3>Hawai Ananas 25cl</h3>
            <div className="price">15,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/schweppes_mojito.jpg" alt="Schweppes Mojito" />
            <h3>Schweppes Mojito 25cl</h3>
            <div className="price">15,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/miranda_pomme.jpg" alt="Miranda Pomme" />
            <h3>Miranda Pomme</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/miranda_orange.jpg" alt="Miranda Orange" />
            <h3>Miranda Orange</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/miranda_citron.jpg" alt="Miranda Citron" />
            <h3>Miranda Citron</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/coca_cola.jpg" alt="Coca Cola" />
            <h3>Coca Cola 25cl</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/pepsi.jpg" alt="Pepsi" />
            <h3>Pepsi 25cl</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/poms.png" alt="Pom's" />
            <h3>Pom's 25cl</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/seven_up.jpg" alt="Seven-Up" />
            <h3>Seven-Up 25cl</h3>
            <div className="price">12,00 MAD</div>
          </div>
          <div className="menu-item">
            <img src="/images/eau.jpg" alt="Eau" />
            <h3>Eau 33cl</h3>
            <div className="price">8,00 MAD</div>
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
