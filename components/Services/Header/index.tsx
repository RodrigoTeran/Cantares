import styles from "./header.module.scss";

import Btn from "../../Buttons/index";

export default function Component() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          CANTARES
          <br />
          Más que una familia
        </h1>
        <div className={styles.btns}>
          <Btn text="Abrir Mapa" _click={() => {}} color={5} size="md" />
        </div>
      </header>
      <h1 className={styles.h1}>NOSOTROS</h1>
      <img className={styles.img} src="images/we.png" alt="" />
    </>
  );
}
