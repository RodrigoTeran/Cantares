import styles from "./history.module.scss";
import stylesIndex from "../index.module.scss";

type Props = {
  text: string;
  isLeft?: boolean;
};

const Container = ({ text, isLeft }: Props) => {
  return (
    <div className={`${styles.container} ${isLeft && styles.container_left}`}>
      {text}
    </div>
  );
};

export default function Component() {
  return (
    <section className={styles.history}>
      <h2 className={stylesIndex.header}>Nos disntiguimos por nuestros valores</h2>
      <span>Valores</span>
      <div className={styles.containers}>
        <Container text="RESPESTO" />
        <Container text="HONESTIDAD" />
        <Container isLeft text="CONFIANZA" />
        <Container isLeft text="COMPROMISO" />
        <Container text="LEALTAD" />
        <Container text="SUSTENTABILIDAD" />
        <Container isLeft text="TRANSPARENCIA" />
        <Container isLeft text="EQUIDAD" />
        <Container text="PROFESIONALISMO" />
        <Container text="ÉTICA" />
        <Container isLeft text="LIDERAZGO" />
        <Container isLeft text="BIENESTAR ANIMAL" />
      </div>
    </section>
  );
}
