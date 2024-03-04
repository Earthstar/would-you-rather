import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChoicePage from "./components/ChoicePage";

function App() {
  return (
    <div className="App">
      <ChoicePage
        first="lorem ipsum"
        second="dolor si amit"
        percentChoosingFirst={40}
      ></ChoicePage>
    </div>
  );
}

export default App;
