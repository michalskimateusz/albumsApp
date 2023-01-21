import albumArt from "../../assets/albumArt.png";
import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  IAlbum,
  removeAlbum,
  toggleBestStatus,
} from "../../features/albumsSlice/albumsSlice";
import StarComponent from "../StarComponent/StarComponent";
import { useAppDispatch } from "../../app/hooks";

const AlbumCardComponent: FC<IAlbum> = ({
  bandName,
  albumName,
  date,
  id,
  isBest,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="card" style={{ width: "20rem" }} id={id}>
      <img src={albumArt} alt="albumArt" className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="card-title">{bandName}</h5>
            <p className="card-subtitle">{albumName}</p>
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
