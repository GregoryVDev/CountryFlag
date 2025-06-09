import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Home />
      <About />
    </div>
  );
};
