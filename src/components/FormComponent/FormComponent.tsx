import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import { FC, FormEvent, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addAlbum, IAlbum } from "../../features/albumsSlice/albumsSlice";

interface IFormComponent {
  className: string;
}

const FormComponent: FC<IFormComponent> = ({ className }) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const bandNameInputRef = useRef<HTMLInputElement>(null);
  const albumNameInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      dateInputRef.current &&
      bandNameInputRef.current &&
      albumNameInputRef.current
    ) {
      const addAlbumData: IAlbum = {
        id: (Math.random() * Date.now()).toString().substring(-1, 5),
        date: dateInputRef?.current?.value,
        bandName: bandNameInputRef?.current?.value,
        albumName: albumNameInputRef?.current?.value,
        isBest: false,
      };
      dispatch(addAlbum(addAlbumData));
    }

    formRef?.current?.reset();
  };

  return (
    <form className={className} onSubmit={handleSubmit} ref={formRef}>
      <span className="input-group-text fs-3">Data dodania</span>
      <InputComponent
        inputRef={dateInputRef}
        type="date"
        className="form-control form-control-lg"
      />
      <InputComponent
        inputRef={albumNameInputRef}
        type="text"
        className="form-control form-control-lg"
        placeholder="album name"
      />
      <InputComponent
        inputRef={bandNameInputRef}
        type="text"
        className="form-control form-control-lg"
        placeholder="band name"
      />
      <ButtonComponent
        title="Add to list"
        className="btn btn-primary form-control form-control-lg fs-3"
        type="submit"
      />
    </form>
  );
};

export default FormComponent;
