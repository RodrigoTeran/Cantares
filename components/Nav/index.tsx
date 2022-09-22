import styles from "./nav.module.scss";
import { useState } from "react";

import LogoIcon from "../Icons/Logo/index";
import Link from "./Link/index";

export default function Layout() {
  const [isReplicaOpen, setIsReplicaOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div>
        <LogoIcon _className={styles.logo} />
      </div>
      <div className={styles.nav_links}>
        <Link href="/" text="INICIO" />
        <Link href="/nosotros" text="NOSOTROS" />
        <Link href="/servicios" text="SERVICIOS" />
        <Link href="/galeria" text="GALERÍA" />
      </div>
      <div
        onClick={() => {
          setIsReplicaOpen((prev) => !prev);
        }}
        className={styles.ham}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.nav_socialMedia}>
        <img
          onClick={() => {
            setIsReplicaOpen(false);
            window.open(
              "https://www.facebook.com/Centro-Ecuestre-Cantares-100164208863570",
              "_blank"
            );
          }}
          src="images/fb.png"
          alt=""
        />
        <img
          onClick={() => {
            setIsReplicaOpen(false);
            window.open(
              "https://instagram.com/centro_ecuestre_cantares?igshid=YmMyMTA2M2Y=",
              "_blank"
            );
          }}
          src="images/ig.png"
          alt=""
        />
        <img
          onClick={() => {
            setIsReplicaOpen(false);
            window.open("https://wa.me/5214421198980", "_blank");
          }}
          src="images/whatsapp.png"
          alt=""
        />
      </div>

      <div className={`${styles.replica} ${!isReplicaOpen && styles.not_open}`}>
        <div
          className={styles.nav_links}
          onClick={() => {
            setIsReplicaOpen(false);
          }}
        >
          <Link href="/" text="INICIO" />
          <Link href="/nosotros" text="NOSOTROS" />
          <Link href="/servicios" text="SERVICIOS" />
          <Link href="/galeria" text="GALERÍA" />
        </div>
        <div className={styles.nav_socialMedia}>
          <img
            onClick={() => {
              window.open(
                "https://www.facebook.com/Centro-Ecuestre-Cantares-100164208863570",
                "_blank"
              );
            }}
            src="images/fb.png"
            alt=""
          />
          <img
            onClick={() => {
              window.open(
                "https://instagram.com/centro_ecuestre_cantares?igshid=YmMyMTA2M2Y=",
                "_blank"
              );
            }}
            src="images/ig.png"
            alt=""
          />
          <img
            onClick={() => {
              window.open("https://wa.me/5214421198980", "_blank");
            }}
            src="images/whatsapp.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}
