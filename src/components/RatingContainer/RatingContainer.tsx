import Image from "next/image";
import styles from "./RatingContainer.module.scss";
const RatingContainer = ({
  rating,
  tags,
}: {
  rating: number;
  tags: Array<string>;
}) => {
  return (
    <div className={styles.container}>
      <h6 className={styles.rating}>{rating}</h6>
      <h6 className={styles.ratingTag}>{tags[0]}</h6>
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
