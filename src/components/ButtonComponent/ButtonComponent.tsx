import { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiAddLine } from "react-icons/ri";

interface IButtonComponent {
  title: string;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => any;
  action: "add" | "remove";
}

const ButtonComponent: FC<IButtonComponent> = ({
  title,
  type,
  className,
  onClick,
  action,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      <div className="d-flex justify-content-evenly align-items-center fs-4">
        <span className="fs-2">
          {action === "remove" && <RxCross2 />}
          {action === "add" && <RiAddLine />}
        </span>
        <span>{title}</span>
      </div>
    </button>
  );
};

export default ButtonComponent;
