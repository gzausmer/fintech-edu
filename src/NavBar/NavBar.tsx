import React, { ReactElement } from "react";
import styles from "./NavBar.module.scss";

export function NavBar({ children }: { children: ReactElement[] }) {
  return (
    <ul className={styles.nav_bar_wrapper}>
      {React.Children.map(children, (child, idx) => (
        <li style={{ gridColumn: idx + 1 }}>{child}</li>
      ))}
    </ul>
  );
}
