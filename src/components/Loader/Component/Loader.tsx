import styles from "../Styles/Loader.module.css";

interface Props {
  loadingText?: string;
}

export default function Loader({ loadingText = "Loading..." }: Props) {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>{loadingText}</div>
    </div>
  );
}
