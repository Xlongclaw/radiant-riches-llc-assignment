import styles from "./SortMenu.module.scss";

const SortMenu = () => {
  return (
    <div className={styles.btn}>
      Top Relevent
      <img alt="" src={"./images/chevron-down.png"} />
    </div>
  );
};

export default SortMenu;
