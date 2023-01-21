import { FC, RefObject } from "react";

interface IInputComponent {
  type: "text" | "date";
  className: string;
  placeholder?: string;
  inputRef: RefObject<HTMLInputElement>;
}

const InputComponent: FC<IInputComponent> = ({
  type,
  className,
  placeholder,
  inputRef,
}) => {
  return (
    <input
      required
      ref={inputRef}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
