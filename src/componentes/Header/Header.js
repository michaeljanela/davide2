import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.toolbar_desktop}>
        <div className={styles.logo}>
          <p>
            JANELA <span>churrasqueira</span>
          </p>
        </div>
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <Link href="/">acceuil</Link>
              </li>

              <li>
                <Link href="/carte">La carte</Link>
              </li>
              <li>
                <Link href="/carte">Le restaurant</Link>
              </li>
              <li>
                <Link href="/carte">En famille</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.navigation_secondary}>
          <a href="#">reservation</a>
          <a href="#">commendez en ligne</a>
        </div>
      </div>
    </header>
  );
}
