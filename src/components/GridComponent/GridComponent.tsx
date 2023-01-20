import AlbumCardComponent from "../AlbumCardComponent/AlbumCardComponent";
import { IAlbum } from "../../assets/data";
import { FC } from "react";

interface IGridComponent {
  data: IAlbum[];
}

const GridComponent: FC<IGridComponent> = ({ data }) => {
  return (
    <div
      className="d-flex gap-4 justify-content-center flex-wrap"
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "repeat(5, 1fr)",
      //   gap: "1rem",
      // }}
    >
      {data.map((album) => (
        <AlbumCardComponent
          key={album.id}
          id={album.id}
          date={album.date}
          bandName={album.bandName}
          albumName={album.albumName}
        />
      ))}
    </div>
  );
};

export default GridComponent;
