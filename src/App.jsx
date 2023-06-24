import "./App.css";
import { useState } from "react";
import axios from "axios";

import Section from "./components/Section/Section";

const movies = await axios.get(
  "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1643648266/react-new-exercices/netflix2022/movies_rnexgr.json"
);

function App() {
  return (
    <>
      {movies ? (
        movies.data.map((category) => (
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
