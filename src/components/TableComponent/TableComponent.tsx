import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  toggleBestStatus,
  IAlbum,
  removeAlbum,
  sort,
} from "../../features/albumsSlice/albumsSlice";
import { useAppDispatch } from "../../app/hooks";
import SortComponent from "../SortComponent/SortComponent";
import StarComponent from "../StarComponent/StarComponent";

interface ITableComponent {
  data: IAlbum[];
}

const TableComponent: FC<ITableComponent> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <table className="table table-hover fs-4">
      <thead>
        <tr>
          <th scope="col">
            <div className="d-flex align-items-center">
              ID
              <SortComponent
                onClickUp={() => dispatch(sort({ dir: "asc", key: "id" }))}
                onClickDown={() => dispatch(sort({ dir: "desc", key: "id" }))}
              />
            </div>
          </th>
          <th scope="col">
            <div className="d-flex  align-items-center">
              Data dodania
              <SortComponent
                onClickUp={() => dispatch(sort({ dir: "asc", key: "date" }))}
                onClickDown={() => dispatch(sort({ dir: "desc", key: "date" }))}
              />
            </div>
          </th>
          <th scope="col">
            <div className="d-flex  align-items-center">
              Zespół
              <SortComponent
                onClickUp={() =>
                  dispatch(sort({ dir: "asc", key: "bandName" }))
                }
                onClickDown={() =>
                  dispatch(sort({ dir: "desc", key: "bandName" }))
                }
              />
            </div>
          </th>
          <th scope="col">
            <div className="d-flex  align-items-center">
              Album
              <SortComponent
                onClickUp={() =>
                  dispatch(sort({ dir: "asc", key: "albumName" }))
                }
                onClickDown={() =>
                  dispatch(sort({ dir: "desc", key: "albumName" }))
                }
              />
            </div>
          </th>
          <th scope="col">Best of the best</th>
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
            <td>
              <StarComponent
                onClick={() => dispatch(toggleBestStatus(album.id))}
                isBest={album.isBest}
              />
            </td>
            <td className="d-flex justify-content-end align-items-center">
              <ButtonComponent
                action="remove"
                title="REMOVE"
                className="btn btn-danger"
                type="button"
                onClick={() => dispatch(removeAlbum(album.id))}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
