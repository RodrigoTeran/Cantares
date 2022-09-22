import styles from "./history.module.scss";
import { useState } from "react";
import stylesIndex from "../index.module.scss";

type Props = {
  src: string;
  children: any;
  isActive?: boolean;
  onClick: () => void;
  _class?: string
};

const Container = ({ src, children, isActive, onClick, _class }: Props) => {
  return (
    <div
      className={`${styles.container} ${isActive && styles.container_active} ${_class}`}
      onClick={onClick}
    >
      <img src={src} alt="Acerca de" />
      <p>{children}</p>
    </div>
  );
};

export default function Component() {
  const stagesArray: Array<string> = ["Misión", "Visión", "Valores"];
  const stagesContentArray: Array<string> = [
    "Crear experiencias extraordinarias a través de la conexión con los caballos y las personas para lograr dejar una huella trascendental en quienes decidan vivir esta experiencia.",
    "Ser un centro ecuestre reconocido por la labor que se hace creando la diferencia a través de la atención personalizada en un ambiente familiar, en el que se crean experiencias maravillosas y se cambian vidas. Compartiendo la pasión equina.",
    "De nuestros valores destacan el respeto, la honestidad, la confianza, el compromiso, la lealtad, la sustentabilidadad, la transparencia, la equidad, el profesionalismo, la ética, el liderazgo, el bienestar animal."
  ];
  const [stage, setStage] = useState<number>(1);

  return (
    <section className={styles.history}>
      <h2 className={stylesIndex.header}>Acerca de nosotros</h2>
      <span>{stagesArray[stage]}</span>
      <div className={styles.containers}>
        <Container
          onClick={() => {
            if (stage == 0) {
              setStage(2);
            } else {
              setStage(prev => prev - 1);
            }
          }}
          src={`images/about${(stage - 1 < 0 ? 2 : stage - 1) + 1}.jpeg`}
          _class={styles.appear}
        >
          {stagesArray[stage - 1 < 0 ? 2 : stage - 1]}
        </Container>
        <Container
          onClick={() => {}}
          isActive
          src={`images/about${stage + 1}.jpeg`}
        >
          {stagesContentArray[stage]}
        </Container>
        <Container
          onClick={() => {
            if (stage == 2) {
              setStage(0);
            } else {
              setStage(prev => prev + 1);
            }
          }}
          src={`images/about${(stage + 1 > 2 ? 0 : stage + 1) + 1}.jpeg`}
        >
          {stagesArray[stage + 1 > 2 ? 0 : stage + 1]}
        </Container>
        <Container
          onClick={() => {
            if (stage == 0) {
              setStage(2);
            } else {
              setStage(prev => prev - 1);
            }
          }}
          src={`images/about${(stage - 1 < 0 ? 2 : stage - 1) + 1}.jpeg`}
          _class={styles.appear2}
        >
          {stagesArray[stage - 1 < 0 ? 2 : stage - 1]}
        </Container>
      </div>
    </section>
  );
}
