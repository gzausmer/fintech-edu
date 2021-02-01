import { Link } from "react-router-dom";
import styles from "./DropdownListItem.module.scss";

export function DropdownListItem({
  navigateLink,
  title,
}: {
  navigateLink: string;
  title: string;
}) {
  return (
    <li className={styles.wrapper}>
      <Link className={styles.title} to={navigateLink}>
        {title}
      </Link>
    </li>
  );
}
