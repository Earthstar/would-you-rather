import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextChoice from "./TextChoice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TextChoice choice={{
          first: "lorem ipsum",
          second: "dolor si amet",
          percentChoosingFirst: 50
        }}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
