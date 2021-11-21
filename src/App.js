import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {

  console.log(`

  Thanks for visiting!
              - Mo

  `)


  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
