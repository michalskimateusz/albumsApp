import { albums, favAlbums } from "./assets/data";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import GridComponent from "./components/GridComponent/GridComponent";

const handleSubmit = () => {};

function App() {
  return (
    <div className="container">
      <div className=" input-group mt-4 mb-4">
        <FormComponent className="input-group" onSubmit={handleSubmit} />
      </div>
      <div className=" mt-4 mb-4">
        <h2>Fav music Lists</h2>
        <TableComponent data={albums} />
      </div>
      <div className=" mt-4 mb-4">
        <h2>Best of the best</h2>
        <TableComponent data={favAlbums} />
      </div>
      <div className=" mt-4 mb-4">
        <h2>Best of the best</h2>
        <GridComponent data={albums} />
      </div>
    </div>
  );
}

export default App;
