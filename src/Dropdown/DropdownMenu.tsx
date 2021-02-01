import {ReactChild, useRef, useState} from "react";
import classNames from "classnames";
import styles from "./DroprdownMenu.module.scss"

interface DropdownItem {
    id: string;
    value: ReactChild;
}

export function DropdownMenu({
  options,
  title,
}: {
  options: DropdownItem[];
  title: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>
        <span>{title}</span>
      </button>
      <nav ref={ref} className={classNames(styles.dropdown_box, {[styles.open]: isActive})}>
        <ul>
          {options.map((option) => (
            <li>{option.value}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
