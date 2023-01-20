import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { IAlbum } from "../../assets/data";

interface ITableComponent {
  data: IAlbum[];
}

const TableComponent: FC<ITableComponent> = ({ data }) => {
  return (
    <table className="table table-hover fs-4">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Data dodania</th>
          <th scope="col">Zespół</th>
          <th scope="col">Album</th>
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
            <td className="d-flex flex-row-reverse">
              <div className="btn-group">
                <ButtonComponent
                  title="set as best of the best"
                  className="btn btn-success"
                  type="button"
                />
                <ButtonComponent
                  title="remove"
                  className="btn btn-danger"
                  type="button"
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
