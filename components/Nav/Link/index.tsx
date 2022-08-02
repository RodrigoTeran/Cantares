import Link from "next/link";
import styles from "./link.module.scss";

type Props = {
  text: string;
  href: string;
  _className?: string;
};

export default function Component ({ text, href, _className }: Props) {
  return (
    <Link passHref href={href}>
      <a className={`${_className} ${styles.link_style}`}>{text}</a>
    </Link>
  );
}
