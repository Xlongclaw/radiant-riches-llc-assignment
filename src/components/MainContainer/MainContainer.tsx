import SignupStrip from "../SignupStrip/SignupStrip";
import styles from "./ManiContainer.module.scss";
import {
  BuilderContainer,
  HeroText,
  OptionsContainer,
  RelatedDealsSection,
  ResultDetailsStrip,
} from "@components";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <HeroText />
      <ResultDetailsStrip />
      <OptionsContainer />
      <BuilderContainer />
      <RelatedDealsSection />
      <SignupStrip />
    </div>
  );
};

export default MainContainer;
