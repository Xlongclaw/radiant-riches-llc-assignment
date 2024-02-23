import styles from "./ManiContainer.module.scss";
import { HeroText, ResultDetailsStrip } from "@components";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <HeroText />
      <ResultDetailsStrip />
    </div>
  );
};

export default MainContainer;
