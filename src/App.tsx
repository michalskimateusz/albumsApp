import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import GridComponent from "./components/GridComponent/GridComponent";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectAlbum, toggleView } from "./features/albumsSlice/albumsSlice";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

function App() {
  const { albums, layout } = useAppSelector(selectAlbum);
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <div className=" input-group mt-4 mb-4">
        <FormComponent className="input-group" />
      </div>
      <div className="mt-4 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Fav music Lists</h2>
          <div className="d-flex justify-content-center align-items-center gap-3 fs-2">
            <FaList
              role="button"
              onClick={() => dispatch(toggleView("list"))}
            />
            <BsFillGrid3X3GapFill
              role="button"
              onClick={() => dispatch(toggleView("grid"))}
            />
          </div>
        </div>
        <div>
          {layout === "list" && <TableComponent data={albums} />}
          {layout === "grid" && <GridComponent data={albums} />}
        </div>
      </div>
    </div>
  );
}

export default App;
