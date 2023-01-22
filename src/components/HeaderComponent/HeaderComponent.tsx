import { FaList } from "react-icons/fa";
import { selectAlbum, toggleView } from "../../store/albumsSlice/albumsSlice";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

interface IHeaderComponent {
  title: string;
}

const HeaderComponent: FC<IHeaderComponent> = ({ title }) => {
  const { layout } = useAppSelector(selectAlbum);
  const dispatch = useAppDispatch();
  return (
    <div className="d-flex justify-content-between align-middle">
      <h1>{title}</h1>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <FaList
          className={`layout-btn ${layout === "list" && "text-primary"}`}
          role="button"
          onClick={() => dispatch(toggleView("list"))}
        />
        <BsFillGrid3X3GapFill
          className={`layout-btn ${layout === "grid" && "text-primary"}`}
          role="button"
          onClick={() => dispatch(toggleView("grid"))}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
