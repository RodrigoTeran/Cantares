import styles from "./header.module.scss";

import Btn from "../../Buttons/index";

export default function Component() {
  return (
    <header className={styles.header}>
      <h1>
        Ven y vive la experiencia
        <br />
        CANTARES
      </h1>
      <div className={styles.btns}>
        <Btn
          text="Abrir Mapa"
          _click={() => {
            window.open("https://goo.gl/maps/WoeZounmec1BsA3e7", "_blank");
          }}
          color={5}
          size="md"
        />
      </div>
    </header>
  );
}
