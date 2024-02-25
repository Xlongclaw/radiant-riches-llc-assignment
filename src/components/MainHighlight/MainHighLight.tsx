"use client";
import { useEffect, useRef, useState } from "react";
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
  const [expanded, setExpanded] = useState(true);
  useEffect(() => {
    const resizeEvent = () => {
      if (window.innerWidth < 1030) setExpanded(false);
      else setExpanded(true);
    };
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);
  return (
    <div className={styles.highlight}>
      <h4 className={styles.heading}>
        Main highlights{" "}
        <img
          onClick={() => setExpanded(!expanded)}
          src="images/chevron-down.png"
          alt=""
        />
      </h4>
      {expanded &&
        mainHighlight?.map((data, i) => (
          <h4 key={`HIHGLIGHT_${i}`} className={styles.description}>
            [{data.title}] : {data.description}
          </h4>
        ))}
      {expanded && mainHighlightList && (
        <div className={styles.highlightList}>
          {mainHighlightList.map((data, i) => (
            <div key={`HIGHLIGHT_LIST_ITEM_${i}`} className={styles.listItem}>
              <h4>{data.rating}</h4>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      )}
      {expanded && whyLove && (
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
      {expanded && (
        <button className={styles.button}>
          Show more
          <img src="./images/chevron-down-blue.png" alt="" />
        </button>
      )}
    </div>
  );
};

export default MainHighLight;
