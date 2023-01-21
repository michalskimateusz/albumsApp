import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import GridComponent from "./components/GridComponent/GridComponent";
import { useAppSelector } from "./app/hooks";
import { selectAlbum } from "./features/albumsSlice/albumsSlice";

function App() {
  const { albums } = useAppSelector(selectAlbum);
  return (
    <div className="container">
      <div className=" input-group mt-4 mb-4">
        <FormComponent className="input-group" />
      </div>
      <div className=" mt-4 mb-4">
        <h2>Fav music Lists</h2>
        <TableComponent data={albums} />
      </div>

      <div className=" mt-4 mb-4">
        <h2>Best of the best</h2>
        <GridComponent data={albums} />
      </div>
    </div>
  );
}

export default App;
