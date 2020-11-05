import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo.js";
import Fetcher from "./components/Fetcher.js";

import "./styles.css";

function App() {
  // return <Todo />;
  return (
    <>
      <Fetcher />
      <Fetcher />
      <Fetcher />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
