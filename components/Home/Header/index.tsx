import styles from "./header.module.scss";

import Btn from "../../Buttons/index";

export default function Component() {
  return (
    <header className={styles.header}>
      <h1>CANTARES</h1>
      <span>Centro Ecuestre queretano</span>
      <div className={styles.btns}>
        <Btn text="CONTÁCTANOS" _click={() => {
          window.open(
            "https://www.facebook.com/Centro-Ecuestre-Cantares-100164208863570",
            "_blank"
          );
        }} color={1} size="md" />
        <Btn
          text="CONÓCENOS"
          _click={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          color={5}
          size="md"
        />
      </div>
    </header>
  );
}
