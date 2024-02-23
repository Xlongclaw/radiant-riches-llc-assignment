import styles from "./MainHighLight.module.scss";
const MainHighLight = () => {
  return (
    <div className={styles.highlight}>
      <h4 className={styles.heading}>Main highlights</h4>
      <h4 className={styles.description}>
        [What You Get]: Receive the WixPro website builder suite, access to
        premium design templates, an extensive library of widgets and apps, and
        detailed step-by-step guides.
      </h4>
      <div className={styles.highlightList}>
        <div className={styles.listItem}>
          <h4>9.9</h4>
          <span>Building Responsive</span>
        </div>
        <div className={styles.listItem}>
          <h4>9.9</h4>
          <span>Building Responsive</span>
        </div>
        <div className={styles.listItem}>
          <h4>9.9</h4>
          <span>Building Responsive</span>
        </div>
      </div>
      <div className={styles.whyloveContainer}>
        <h4 className={styles.head}>Why we love it?</h4>
        <div>
          <img src="./images/check-blue.png" alt="" />
          <span>Documentation</span>
        </div>
        <div>
          <img src="./images/check-blue.png" alt="" />
          <span>Documentation</span>
        </div>
        <div>
          <img src="./images/check-blue.png" alt="" />
          <span>Documentation</span>
        </div>
      </div>
      <button className={styles.button}>
        Show more
        <img src="./images/chevron-down-blue.png" alt="" />
      </button>
    </div>
  );
};

export default MainHighLight;
