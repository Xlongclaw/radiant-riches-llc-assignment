import { NAVIGATION_LINKS } from "@constants";
import Link from "next/link";
import styles from "./NavigationLinksContainer.module.scss";

const NavigationLinksContainer = () => {
  return (
    <div className={styles.navLinksContainer}>
      {NAVIGATION_LINKS.map((navLink, i) => (
        <Link
          className={styles.navLink}
          href={navLink.link}
          key={`NAVIGATION_LINK_${i}`}
        >
          {navLink.title}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinksContainer;
