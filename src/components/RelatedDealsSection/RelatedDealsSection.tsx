import RelatedDealsContainer from "../RelatedDealsContainer/RelatedDealsContainer";
import styles from "./RelatedDeals.module.scss";

const RelatedDealsSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Related deals you might like for</h2>
      <RelatedDealsContainer />
    </div>
  );
};

export default RelatedDealsSection;
