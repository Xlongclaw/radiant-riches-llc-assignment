import styles from "./SignupBox.module.scss";

const SignupBox = () => {
  return (
    <div className={styles.box}>
      <input type="email" placeholder="Enter your Email" />
      <button>Sign Up</button>
    </div>
  );
};

export default SignupBox;
