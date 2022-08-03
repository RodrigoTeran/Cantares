import styles from "./header.module.scss";

import Btn from "../../Buttons/index";

export default function Component() {
  return (
    <header className={styles.header}>
      <h1>
        Galería
        <br />
        CANTARES
      </h1>
      <div className={styles.btns}>
        <Btn text="Abrir Mapa" _click={() => {}} color={5} size="md" />
      </div>
    </header>
  );
}