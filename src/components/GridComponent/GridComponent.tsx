import AlbumCardComponent from "../AlbumCardComponent/AlbumCardComponent";
import { FC } from "react";
import { IAlbum } from "../../store/albumsSlice/albumsSlice";

interface IGridComponent {
  data: IAlbum[];
}

const GridComponent: FC<IGridComponent> = ({ data }) => {
  return (
    <div className="d-flex gap-3 justify-content-center flex-wrap">
      {data.map((album) => (
        <AlbumCardComponent
          key={album.id}
          id={album.id}
          date={album.date}
          bandName={album.bandName}
          albumName={album.albumName}
          isBest={album.isBest}
        />
      ))}
    </div>
  );
};

export default GridComponent;
