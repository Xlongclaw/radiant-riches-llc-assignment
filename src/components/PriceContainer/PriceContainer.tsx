import styles from "./PriceContainer.module.scss";

const PriceContainer = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const calculateFinalPrice = (price: number) => {
    return price - (price * discount) / 100;
  };
  return (
    <div className={styles.container}>
      <h2>${calculateFinalPrice(price)}</h2>
      <h3 className={styles.textWrap1}>${price}</h3>
      <h3 className={styles.textWrap2}>{`(${discount}%)`}</h3>
    </div>
  );
};

export default PriceContainer;
