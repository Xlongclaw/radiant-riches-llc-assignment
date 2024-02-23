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
    </div>
  );
};

export default MainHighLight;
