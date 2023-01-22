import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  toggleBestStatus,
  IAlbum,
  removeAlbum,
  sort,
} from "../../store/albumsSlice/albumsSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import SortComponent from "../SortComponent/SortComponent";
import StarComponent from "../StarComponent/StarComponent";

interface ITableComponent {
  data: IAlbum[];
}

const TableComponent: FC<ITableComponent> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <table className="table table-hover">
      <thead>
        <tr className="align-middle ">
          <th scope="col">
            <div className="d-flex align-items-center gap-3">
              ID
              <SortComponent
                onClickUp={() => dispatch(sort({ dir: "asc", key: "id" }))}
                onClickDown={() => dispatch(sort({ dir: "desc", key: "id" }))}
              />
            </div>
          </th>
          <th scope="col">
            <div className="d-flex  align-items-center gap-3">
              Data <span className="d-none d-md-inline">dodania</span>
              <SortComponent
                onClickUp={() => dispatch(sort({ dir: "asc", key: "date" }))}
                onClickDown={() => dispatch(sort({ dir: "desc", key: "date" }))}
              />
            </div>
          </th>
          <th scope="col">
            <div className="d-flex align-items-center gap-3 ">
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
            <div className="d-flex align-items-center gap-3">
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
          <th scope="col" className="text-center">
            Best <span className="d-none d-md-inline">of the best</span>
          </th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {data.map((album) => (
          <tr key={album.id} className="align-middle">
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
            <td className="text-end">
              <ButtonComponent
                action="remove"
                title="USUŃ"
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
