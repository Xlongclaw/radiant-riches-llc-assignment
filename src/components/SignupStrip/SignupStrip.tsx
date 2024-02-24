import { SectionHeading, SignupBox } from "@components";
import styles from "./SignupStrip.module.scss";

const SignupStrip = () => {
  return (
    <div className={styles.strip}>
      <SectionHeading title="Sign up and get exclusive special deals" />
      <SignupBox />
    </div>
  );
};

export default SignupStrip;
