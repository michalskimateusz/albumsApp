import albumArt from "../../assets/albumArt.png";
import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { IAlbum } from "../../features/albumsSlice/albumsSlice";

const AlbumCardComponent: FC<IAlbum> = ({ bandName, albumName, date, id }) => {
  return (
    <div className="card" style={{ width: "20rem" }} id={id}>
      <img src={albumArt} alt="albumArt" className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{bandName}</h5>
        <p className="card-subtitle">{albumName}</p>
        <p className="card-text">{date}</p>
        <ButtonComponent
          title="REMOVE FROM BEST"
          className="btn btn-danger"
          type="button"
        />
      </div>
    </div>
  );
};

export default AlbumCardComponent;
