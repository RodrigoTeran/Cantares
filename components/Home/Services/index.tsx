import styles from "./history.module.scss";
import stylesIndex from "../index.module.scss";
import Btn from "../../Buttons/index";
import {useRouter} from "next/router";

type Props = {
  title: string;
  subtitile: string;
};

const Container = ({ title, subtitile }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.7524 37.6635L49.8339 19.0491C48.1459 14.3813 44.1243 11.0051 39.2984 10.0761C41.3375 8.8752 44.5435 6.00883 43.1727 0.751929C43.0255 0.185453 42.3684 -0.143103 41.8133 0.0608286L18.9072 8.63728C4.06691 13.9735 0 27.0591 0 45.175V54.3746C0 56.3799 1.61997 58 3.6251 58H30.3829C33.0791 58 34.835 55.1676 33.6228 52.7544L29.0008 43.4982V43.4189C23.8351 43.0224 19.417 39.9407 17.1853 35.5336C17.004 35.1823 17.0833 34.7518 17.3665 34.4799L18.7373 33.109C19.1791 32.6672 19.9381 32.8031 20.1986 33.381C21.8752 37.199 25.6589 39.8841 30.0997 39.8841C32.0482 39.8841 33.8381 39.3063 35.4014 38.3886L40.6125 45.6282C41.2922 46.5798 42.3911 47.135 43.5579 47.135H49.2561C50.219 47.135 51.1366 46.7498 51.8163 46.07L56.9481 41.5609C57.9564 40.5299 58.2735 39.0004 57.7524 37.6635ZM37.1573 25.371C35.6506 25.371 34.4385 24.1587 34.4385 22.6519C34.4385 21.1451 35.6506 19.9328 37.1573 19.9328C38.664 19.9328 39.8761 21.1451 39.8761 22.6519C39.8761 24.1587 38.664 25.371 37.1573 25.371Z" />
      </svg>
      <div>{title}</div>
      <div>{subtitile}</div>
      <Btn text="Ir a servicio" _click={() => {
        router.replace("/servicios")
      }} color={1} size="sm" />
    </div>
  );
};

export default function Component() {
  return (
    <section className={styles.history}>
      <h2 className={stylesIndex.header}>Servicios</h2>
      <span>Conoce nuestros servicios</span>
      <div className={styles.containers}>
        <Container title="Pensión para caballos" subtitile="Servicio de hospedaje" />
        <Container title="Equino-terapia" subtitile="Rehabilitación" />
        <Container title="Clases de equitación" subtitile="Mejora la concentración" />
        <Container title="Actividades ecuestres" subtitile="Para toda la familia" />
      </div>
    </section>
  );
}
