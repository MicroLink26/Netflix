import "./App.css";
import { useState } from "react";
import axios from "axios";
import logo from "./assets/logo.png";

import Section from "./components/Section/Section";

// const movies = await axios.get(
//   "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1643648266/react-new-exercices/netflix2022/movies_rnexgr.json"
// );
import movies from "./assets/movies_rnexgr.json";
function App() {
  return (
    <>
      <img className="logo" src={logo}></img>
      {movies ? (
        movies.map((category) => (
          <Section key={category.category} category={category} />
        ))
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default App;
