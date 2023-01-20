import { FC } from "react";

interface IInputComponent {
  type: "text" | "date";
  className: string;
  placeholder?: string;
}

const InputComponent: FC<IInputComponent> = ({
  type,
  className,
  placeholder,
}) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default InputComponent;
