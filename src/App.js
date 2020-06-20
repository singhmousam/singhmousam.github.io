import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";

function App() {
  document.title = 'Mousam Singh' // Added to change Page title.
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
