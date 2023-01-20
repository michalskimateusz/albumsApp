import { FC } from "react";

interface IButtonComponent {
  title: string;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => any;
}

const ButtonComponent: FC<IButtonComponent> = ({
  title,
  type,
  className,
  onClick,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonComponent;
