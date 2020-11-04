import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo.js";

import "./styles.css";

function App() {
  return <Todo />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
