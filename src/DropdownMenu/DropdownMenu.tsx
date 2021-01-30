import { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./DroprdownMenu.module.scss"
export function DropdownMenu({
  options,
  title,
}: {
  options: string[];
  title: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  return (
    <div>
      <button onClick={(isActive) => setIsActive(!isActive)}>
        <span>{title}</span>
      </button>
      <nav ref={ref} className={classNames(styles.dropdown_box, {[styles.open]: isActive})}>
        <ul>
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
