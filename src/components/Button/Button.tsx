import style from "./Button.module.scss";
const Button = ({ title, link }: { title: string; link: string }) => {
  return <div className={style.button}>{title}</div>;
};

export default Button;
