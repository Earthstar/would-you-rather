import React, {useEffect} from "react";
// import "./App.css";
import {Outlet, useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/choices/0")
  })
  return (
    <div className="App">
    </div>
  );
}

export default App;
