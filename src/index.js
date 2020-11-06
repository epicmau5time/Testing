import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo.js";
import Fetcher from "./components/Fetcher.js";
import DataList from "./containers/DataList.js";

import "./styles.css";

function App() {
  // return <Todo />;
  return (
    <>
      <DataList />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
