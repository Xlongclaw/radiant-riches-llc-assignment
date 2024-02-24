import styles from "./MainHighLight.module.scss";
const MainHighLight = ({
  mainHighlight,
  mainHighlightList,
  whyLove,
}: {
  mainHighlight: Array<{ title: string; description: string }> | undefined;
  mainHighlightList: Array<{ rating: number; title: string }> | undefined;
  whyLove: Array<string> | undefined;
}) => {
  return (
    <div className={styles.highlight}>
      <h4 className={styles.heading}>Main highlights</h4>
      {mainHighlight?.map((data, i) => (
        <h4 key={`HIHGLIGHT_${i}`} className={styles.description}>
          [{data.title}] : {data.description}
        </h4>
      ))}
      {mainHighlightList && (
        <div className={styles.highlightList}>
          {mainHighlightList.map((data, i) => (
            <div key={`HIGHLIGHT_LIST_ITEM_${i}`} className={styles.listItem}>
              <h4>{data.rating}</h4>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      )}
      {whyLove && (
        <div className={styles.whyloveContainer}>
          <h4 className={styles.head}>Why we love it?</h4>
          {whyLove.map((data, i) => (
            <div key={`WHY_LOVE_${i}`}>
              <img src="./images/check-blue.png" alt="" />
              <span>{data}</span>
            </div>
          ))}
        </div>
      )}
      <button className={styles.button}>
        Show more
        <img src="./images/chevron-down-blue.png" alt="" />
      </button>
    </div>
  );
};

export default MainHighLight;
