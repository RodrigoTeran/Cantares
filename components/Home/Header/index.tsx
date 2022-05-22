import styles from "./header.module.scss";

import Btn from "../../Buttons/index";

export default function () {
  return (
    <header className={styles.header}>
      <h1>CANTARES</h1>
      <span>Centro Ecuestre queretano</span>
      <div className={styles.btns}>
        <Btn text="CONTÁCTANOS" _click={() => {}} color={1} size="md" />
        <Btn text="CONÓCENOS" _click={() => {}} color={5} size="md" />
      </div>
    </header>
  );
}
