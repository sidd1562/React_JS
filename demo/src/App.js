import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Demo</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"></a>
      </header>
    </div>
    </React.Fragment>
  
  );
}

export default App;
