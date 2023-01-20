import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import { FC } from "react";

interface IFormComponent {
  className: string;
  onSubmit: () => void;
}

const FormComponent: FC<IFormComponent> = ({ className, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <span className="input-group-text fs-3">Data dodania</span>
      <InputComponent type="date" className="form-control form-control-lg" />
      <InputComponent
        type="text"
        className="form-control form-control-lg"
        placeholder="album name"
      />
      <InputComponent
        type="text"
        className="form-control form-control-lg"
        placeholder="band name"
      />
      <ButtonComponent
        title="Add to list"
        className="btn btn-primary form-control form-control-lg fs-3"
        type="button"
      />
    </form>
  );
};

export default FormComponent;
