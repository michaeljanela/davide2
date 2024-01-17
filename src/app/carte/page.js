import Image from "next/image";
import styles from "./page.module.scss";

export default function Carte() {
  return (
    <div>
      <aside className={styles.aside}>
        <img src="/carte/5.jpg" alt="assiet poulet frites" />
      </aside>
      <nav className={styles.chooseLocations}>
        <div className={`${styles.btn} ${styles.btn_dineIn}`}>
          <p>Sur place</p>
        </div>
        <div className={`${styles.btn} ${styles.btn_takeOut}`}>
          <p>A emporter</p>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.dineIn}>
          <h1>Sur Place</h1>
          <p>
            Découvrez nos menus et plats à déguster sur place. N’hésitez pas à
            nous téléphoner au 01 48 86 65 29 pour réserver votre table.
          </p>
          <h2>Les Entrées</h2>

          <ul>
            <li>Beignets de morue 7,50€</li>
            <li>Beignets de viande 7,50€</li>
            <li>Beignets de Crevette 7,50€</li>
            <li>Assiette de Chorizo Braisé 11,00€</li>
          </ul>
          <h2>
            Les Formules <span>(Uniquement en semaine)</span>
          </h2>
          <p>
            Toutes nos formules sont accompagnées de frites, riz et salade,
            ainsi qu’une boisson et un café.
          </p>
          <ul>
            <li>Poulet (halal) Midi = 15,00€ Soir = 18,50€</li>
            <li>3 viandes Midi = 21,00€ Soir = 24,50€</li>
            <li>Travers Midi = 18,00€ Soir = 21,50€</li>
            <li>Poitrine Midi = 18,00€ Soir = 21,50€</li>
            <li>Midi = 22,00€ Soir = 25,50€</li>
            <li>Entrecôte Midi = 22,00€ Soir = 25,50€</li>
            <li>Magret de canard Midi = 28,00€ Soir = 31,50€</li>
            <li>Côtelette d’agneau Midi = 20,00€ Soir = 23,50€</li>
            <li>Dorade (Sur commande) Midi = 22,50€ Soir = 26,00€</li>
            <li>Gambas grillées (Sur commande) 38,50€</li>
            <li>Côte de boeuf (Sur commande) Midi = 35,00€ Soir = 38,50€</li>
          </ul>
          <h2>Les Desserts</h2>
          <ul>
            <li>Tarte du jour 4,80€</li>
            <li>Tarte du jour 4,80€</li>
            <li>Moelleux au chocolat 4,80€</li>
            <li>Trio glacé 8,50€</li>
          </ul>
          <h2>Les Boissons (soft)</h2>
          <h3>Les softs</h3>
          <ul>
            <li>Coca 2,90€</li>
            <li>Coca zéro 2,90€</li>
            <li>Superbock 3,20€</li>
            <li>Sumol Ananas 3,00€</li>
            <li>Ice Tea 2,90€</li>
            <li>Pedras 2,50€</li>
            <li>Pedras citron 3,50€</li>
            <li>Eau 2,00€</li>
          </ul>
          <h3>Les digestifs</h3>
          <ul>
            <li>CRF 8,50€</li>
            <li>Antiqua 8,00€</li>
            <li>Maciera 6,00€</li>
            <li>Adela Velma 4,50€</li>
            <li>Ice Tea 2,90€</li>
            <li>Beirao 6,00€</li>
            <li>Amendoa 3,50€</li>
            <li>Get 27 4,90€</li>
            <li>Get 31 4,90€</li>
          </ul>
          <h2>Les apéritifs</h2>
          <ul>
            <li>JB 6,00€</li>
            <li>Clan Campbell 6,00€</li>
            <li>Jack Daniel’s Supérieur 10,00€</li>
            <li>Monkey Shoulder 8,50€</li>
            <li>Chivas 15 ans et 12 ans 12,00€</li>
            <li>Gin 10,00€</li>
            <li>Diplomatico (Rhum) ou Sablima 10,00€</li>
            <li>Vodka 10,00€</li>
            <li>Ricard 3,80€</li>
            <li>Martini (Rouge ou blanc) 4,40€</li>
            <li>Kir (Vin vert cassis) 3,50€</li>
            <li>Porto (Rouge ou blanc) 3,90€</li>
          </ul>
          <h3>Vin blanc</h3>
          <ul>
            <li>Casal Garçia Grande 18,00€</li>
            <li>Casal Garçia Petite 11,50€</li>
            <li>Alvarinho 30,00€</li>
            <li>Alvarinho Palacio 55,00€</li>
          </ul>
          <h3>Vin rosé</h3>
          <ul>
            <li>Mateus Grande 16,00€</li>
            <li>Mateus Petite 10,00€</li>
            <li>Alvarinho Palacio 55,00€</li>
            <li>Alvarinho Palacio 55,00€</li>
          </ul>
          <h3>Vin rouge</h3>
          <ul>
            <li>Reguengos 14,00€</li>
            <li>Monte Velho Grande 17,00€</li>
            <li>Graca 28 32,00€</li>
            <li>Cartuxa 48,50€</li>
            <li>Reguengos 2014 réserve 60,00€</li>
            <li>Burro 35,00€</li>
          </ul>
          <h3>Champagne</h3>
          <li>Nicolas Feuillatte (Brut) 60,00€</li>
        </div>
      </div>
    </div>
  );
}
