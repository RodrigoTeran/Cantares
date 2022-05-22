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
      <div>social</div>
    </nav>
  );
}
