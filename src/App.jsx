import "./styles/App.css";
import "./styles/index.css";
import "./styles/logo.css";
import "./styles/blog.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
