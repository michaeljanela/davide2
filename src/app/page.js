import Image from "next/image";
import styles from "./page.module.scss";
import Carousel from "@/componentes/Carousel/Carousel";

export default function Home() {
  return (
    <div className={styles.home}>
      <Carousel />
      <span>
        Dégustez des produits frais tels que des viandes et poissons grillées au
        charbon de bois, selon la tradition portugaise.
      </span>
      <div className={styles.restaurant}>
        <div className={styles.text}>
          <h2>Le Restaurant Janela vous accueille</h2>
          <p>du mercredi au jeudi : 11H30 à 14H30 18H30 à 21H30</p>
          <p>Du vendredi au dimanche 11H30 à 14H30 18h30 à 22H00</p>
          <p>N’hésitez pas à réserver au 01 48 86 65 29</p>
          <a href="http://#">En savoir plus</a>
        </div>
        <div className={styles.image}>
          <Image src="/img/feu.jpg" fill alt="Picture of the author" />
        </div>
      </div>
      <div className={styles.restaurant}>
        <div className={styles.image}>
          <Image src="/img/grill2b.gif" fill alt="Picture of the author" />
        </div>
        <div className={styles.text}>
          <h2>Saveurs portugaises et engagement de qualité</h2>
          <p>
            Tous nos produits sont frais, non surgelé afin de conserver toutes
            leurs saveurs. <br />
            Nos viandes sont d’origine française, excepté le gigot (Nouvelle
            Zélande). <br />
            Les frites, le riz les accompagnements ainsi que les condiments pour
            la viande sont préparés maison.
          </p>
        </div>
      </div>
    </div>
  );
}
