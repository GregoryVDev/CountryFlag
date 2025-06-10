import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="app-container">
      <Home />
      <About />
    </div>
  );
};
