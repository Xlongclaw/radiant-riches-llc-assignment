import style from "./Button.module.scss";

const handleClick = () => {};

const Button = ({ title }: { title: string }) => {
  return (
    <button onClick={() => handleClick()} className={style.button}>
      {title}
    </button>
  );
};

export default Button;
