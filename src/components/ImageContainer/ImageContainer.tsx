import Image from "next/image";
import styles from "./ImageContainer.module.scss";
const ImageContainer = () => {
  return (
    <div className={styles.container}>
      <Image src={require("../../assets/images/monitor.png")} alt="" />
      <h6 className={styles.tag}>Builder</h6>
    </div>
  );
};

export default ImageContainer;
