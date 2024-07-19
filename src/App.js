import React, { useEffect, useState } from "react";
import "../node_modules/bulma/css/bulma.css";
import fetchData from "./api";
import Header from "./components/Header";
import ImageShow from "./components/ImageShow";

function App() {
  const today = new Date().toISOString().split("T")[0]

  const [nasaData, setNasaData] = useState({});
  const [date, setDate] = useState(today);

  const handleChange = (event) => {
    setDate(event.target.value)
  }

  const handleDateSubmit = (event) => {
    event.preventDefault()
  }
  
useEffect(() => {
  fetchData(date).then(response => setNasaData(response))
}, [date])


  return (
    <div className="container">
      <form className="mb-4" onSubmit={handleDateSubmit}>
        <input 
        className="input is-medium has-background-white has-text-black"
          type="date" 
          value={date} 
          onChange={handleChange} 
          min="1995-06-16"
          max={today}
        />
      </form>
      <Header />
      <ImageShow data={nasaData} />
    </div>
  );
}

export default App;
