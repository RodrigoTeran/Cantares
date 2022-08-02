import styles from "./history.module.scss";
import stylesIndex from "../index.module.scss";

export default function () {
  return (
    <section className={styles.history}>
      <div className={styles.logo}>
        <img src="images/logo.png" alt="Logo" />
      </div>
      <h2 className={stylesIndex.header}>Historia</h2>
      <span>
        CANTARES SE CREA EN EL
        <br />
        AÑO 2020
      </span>
      <div className={styles.p}>
        <p>
          Bajo los principios de poder ofrecer una&nbsp;
          <br />
          <span>experiencia única</span> y diferente con el contacto del
          <br />
          ser&nbsp;
          <span> humano y los caballos.</span>
        </p>
        <p>
          Es un proyecto familiar, donde se
          <br />
          entrega la pasión y el <span>corazón</span> en
          <br />
          cada una de las <span>actividades</span>
        </p>
      </div>
      <div className={styles.images}>
        <img src="images/img1.png" alt="Image 1" />
        <img src="images/img2.png" alt="Image 2" />
        <img src="images/img3.png" alt="Image 3" />
        <img src="images/img4.png" alt="Image 4" />
      </div>
    </section>
  );
}
