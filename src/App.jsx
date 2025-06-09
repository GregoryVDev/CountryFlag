import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export const App = () => {
  return (
    <div className="app-container">
      <Home />
      <About />
    </div>
  );
};
