import { SearchBar } from "@components";
import styles from "./NavigationBar.module.scss";
const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <SearchBar />
    </div>
  );
};

export default NavigationBar;
