import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./styles/index.css";
import "./styles/navigation.css";
import "./styles/logo.css";
import "./styles/countries.css";
import "./styles/blog.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
