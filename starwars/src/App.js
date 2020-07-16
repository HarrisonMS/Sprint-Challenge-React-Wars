import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./App.css";

const App = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`).then((res) => {
      console.log(res.data.results);
      setChars(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      <Characters chars={chars} />
    </div>
  );
};

export default App;
