import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_desktop}>
        <div className={styles.logo}>
          <p>JANELA</p>
        </div>
        <div className={styles.container_text}>
          <div>
            <h3>ADRESSE ET CONTACTS</h3>
            <p>
              51 B rue du pont de créteil <br />
              94100 Saint-maur-des-fosses <br />
              01 48 86 65 29 <br />
              david@janela.fr
            </p>
          </div>
          <div>
            <h3>HORAIRE</h3>
            Mercredi - Jeudi: <br />
            Déjeuner : 11h30-14h30 / Dîner : 18h30-21h30 <br />
            Vendredi – Dimanche: <br />
            Déjeuner : 11h30-14h30 / Dîner : 18h30-22h <br />
          </div>
        </div>
        <div>
          <h3>REJOINDRE LE CLUBE</h3>
          <p>Recevez des offres exclusives et des actualités</p>
          <input type="text" placeholder="Email" />
          <button>s{`'`}inscrire</button>
        </div>
      </div>
    </footer>
  );
}
