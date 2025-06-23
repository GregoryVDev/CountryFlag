import { Navigation } from "../components/Navigation";
import { Logo } from "../components/Logo";
import { useState } from "react";

export const Blog = () => {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      alert("Noo");
    }
  };
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          placeholder="Message"
          // Permet d'écrire une valeur qui est stocké dans setContent
          onChangeCapture={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      <ul></ul>
    </div>
  );
};
