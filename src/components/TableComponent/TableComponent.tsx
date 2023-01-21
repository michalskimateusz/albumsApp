import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  toggleBestStatus,
  IAlbum,
  removeAlbum,
} from "../../features/albumsSlice/albumsSlice";
import { useAppDispatch } from "../../app/hooks";

interface ITableComponent {
  data: IAlbum[];
}

const TableComponent: FC<ITableComponent> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <table className="table table-hover fs-4">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Data dodania</th>
          <th scope="col">Zespół</th>
          <th scope="col">Album</th>
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {data.map((album) => (
          <tr key={album.id}>
            <td>{album.id}</td>
            <td>{album.date}</td>
            <td>{album.bandName}</td>
            <td>{album.albumName}</td>
            <td>{album.isBest ? "fav" : "meh"}</td>
            <td className="d-flex flex-row-reverse">
              <div className="btn-group">
                <ButtonComponent
                  title="set as best of the best"
                  className="btn btn-success fs-4"
                  type="button"
                  onClick={() => dispatch(toggleBestStatus(album.id))}
                />
                <ButtonComponent
                  title="remove"
                  className="btn btn-danger"
                  type="button"
                  onClick={() => dispatch(removeAlbum(album.id))}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
