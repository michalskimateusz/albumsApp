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
      <div className="d-flex justify-content-center align-items-center">
        <span className="d-flex justify-content-center btn-icon">
          {action === "remove" && <RxCross2 />}
          {action === "add" && <RiAddLine />}
        </span>
        <span className={`${action === "add" ? "" : "d-none d-md-flex"}`}>
          {title}
        </span>
      </div>
    </button>
  );
};

export default ButtonComponent;
