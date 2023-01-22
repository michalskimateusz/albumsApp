import albumArt from "../../assets/albumArt.png";
import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  IAlbum,
  removeAlbum,
  toggleBestStatus,
} from "../../store/albumsSlice/albumsSlice";
import StarComponent from "../StarComponent/StarComponent";
import { useAppDispatch } from "../../store/hooks/hooks";

const AlbumCardComponent: FC<IAlbum> = ({
  bandName,
  albumName,
  date,
  id,
  isBest,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="card" id={id}>
      <img
        src={albumArt}
        alt="albumArt"
        className="d-none d-md-inline card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="d-block text-truncate">
            <h5 className="card-title text-truncate">{bandName}</h5>
            <p className=" card-subtitle text-truncate">{albumName}</p>
            <p className="card-text">{date}</p>
          </div>
          <div>
            <StarComponent
              onClick={() => dispatch(toggleBestStatus(id))}
              isBest={isBest}
            />
          </div>
        </div>

        <ButtonComponent
          action="remove"
          title="REMOVE"
          className="btn btn-danger"
          type="button"
          onClick={() => dispatch(removeAlbum(id))}
        />
      </div>
    </div>
  );
};

export default AlbumCardComponent;
