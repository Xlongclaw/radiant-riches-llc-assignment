import styles from "./PriceContainer.module.scss";

const PriceContainer = () => {
  return (
    <div className={styles.container}>
      <h2>$39.96</h2>
      <span className={styles.textWrap}>$49.96</span>
      <span className={styles.textWrap}>{`(20%)`}</span>
    </div>
  );
};

export default PriceContainer;
