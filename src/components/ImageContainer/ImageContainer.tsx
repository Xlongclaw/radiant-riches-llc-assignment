import Image from "next/image";
import styles from "./ImageContainer.module.scss";
const ImageContainer = ({
  image,
  imageTag,
}: {
  image: any;
  imageTag: string;
}) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" />
      <h6 className={styles.tag}>{imageTag}</h6>
    </div>
  );
};

export default ImageContainer;
