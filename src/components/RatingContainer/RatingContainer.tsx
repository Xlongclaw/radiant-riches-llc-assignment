import Image from "next/image";
import styles from "./RatingContainer.module.scss";
const RatingContainer = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.rating}>9.8</h6>
      <h6 className={styles.ratingTag}>Exceptional</h6>
      <div className={styles.stars}>
        <Image src={require("@images/full-star.png")} alt="" />
        <Image src={require("@images/full-star.png")} alt="" />
        <Image src={require("@images/full-star.png")} alt="" />
        <Image src={require("@images/full-star.png")} alt="" />
        <Image src={require("@images/full-star.png")} alt="" />
      </div>
    </div>
  );
};

export default RatingContainer;
