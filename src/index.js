import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "learn js", completed: true },
  { id: "todo-1", name: "learn react", completed: false },
  { id: "todo-2", name: "build react-app", completed: false },
];


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App todos={DATA} />
  </React.StrictMode>
);
