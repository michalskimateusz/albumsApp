import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import GridComponent from "./components/GridComponent/GridComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { selectAlbum, toggleView } from "./store/albumsSlice/albumsSlice";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

function App() {
  const { albums, layout } = useAppSelector(selectAlbum);
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <HeaderComponent />
      <div className="mt-5">
        <FormComponent className="d-flex flex-column" />
      </div>
      <div className="row mt-4 mb-4">
        <div className="d-flex justify-content-between align-middle">
          <h2 className="m-0">NAJLEPSZE ALBUMY</h2>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <FaList
              className={`layout-btn ${layout === "list" && "text-primary"}`}
              role="button"
              onClick={() => dispatch(toggleView("list"))}
            />
            <BsFillGrid3X3GapFill
              className={`layout-btn ${layout === "grid" && "text-primary"}`}
              role="button"
              onClick={() => dispatch(toggleView("grid"))}
            />
          </div>
        </div>
        <div className="mt-5">
          {layout === "list" && <TableComponent data={albums} />}
          {layout === "grid" && <GridComponent data={albums} />}
        </div>
      </div>
    </div>
  );
}

export default App;
