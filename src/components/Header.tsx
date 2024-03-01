import styles from "./Header.module.css";

import chav3xLogo from "../assets/chav3x-logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={chav3xLogo} alt="Logotipo do Chav3x" />
    </header>
  );
}
