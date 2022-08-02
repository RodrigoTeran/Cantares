import styles from "./btn.module.scss";

type Props = {
  text: string;
  _click: () => any;
  color: 1 | 2 | 3 | 4 | 5;
  size: "sm" | "md" | "lg";
};

export default function Component ({ text, _click, color, size }: Props) {
  return (
    <button
      className={`${styles.btn} ${styles[`color_${color}`]} ${styles[size]}`}
      onClick={_click}
    >
      {text}
    </button>
  );
}
