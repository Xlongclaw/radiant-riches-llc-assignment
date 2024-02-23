import styles from "./ManiContainer.module.scss";
import { HeroText, OptionsContainer, ResultDetailsStrip } from "@components";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <HeroText />
      <ResultDetailsStrip />
      <OptionsContainer />
    </div>
  );
};

export default MainContainer;
