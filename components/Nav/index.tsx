import styles from "./nav.module.scss";

import LogoIcon from "../Icons/Logo/index";
import Link from "./Link/index";

export default function Layout() {
  return (
    <nav className={styles.nav}>
      <div>
        <LogoIcon _className={styles.logo} />
      </div>
      <div className={styles.nav_links}>
        <Link href="" text="INICIO" />
        <Link href="" text="NOSOTROS" />
        <Link href="" text="SERVICIOS" />
        <Link href="" text="GALERÍA" />
      </div>
      <div className={styles.nav_socialMedia}>
        <img src="images/fb.png" alt="" />
        <img src="images/IG.png" alt="" />
        <img src="images/whatsapp.png" alt="" />
      </div>
    </nav>
  );
}
