import styles from "./images.module.scss";

const Images = () => {
  return (
    <div className={styles.container}>
      {[...Array(26)].map((e, i) => (
        <img key={i} src={`images/galeria/img (${i + 1}).jpeg`} />
      ))}
    </div>
  );
};
export default Images;
