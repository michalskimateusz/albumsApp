import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import GridComponent from "./components/GridComponent/GridComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { useAppSelector } from "./store/hooks/hooks";
import { selectAlbum } from "./store/albumsSlice/albumsSlice";

function App() {
  const { albums, layout } = useAppSelector(selectAlbum);
  return (
    <div className="container">
      <div className="mt-5">
        <FormComponent className="d-flex flex-column" />
      </div>
      <div className="row mt-4 mb-4">
        <HeaderComponent title="FavMusicList" />
        <div className="mt-5">
          {layout === "list" && <TableComponent data={albums} />}
          {layout === "grid" && <GridComponent data={albums} />}
        </div>
      </div>
    </div>
  );
}

export default App;
