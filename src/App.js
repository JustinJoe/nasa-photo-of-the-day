import React, { useEffect, useState } from "react";
import "../node_modules/bulma/css/bulma.css";
import fetchData from "./api";
import Header from "./components/Header";
import ImageShow from "./components/ImageShow";

function App() {
  const [nasaData, setNasaData] = useState({});
  
useEffect(() => {
  fetchData().then(response => setNasaData(response))
}, [])

  return (
    <div className="container">
      <Header />
      <ImageShow data={nasaData} />
    </div>
  );
}

export default App;
