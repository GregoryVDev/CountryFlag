import { Navigation } from "../components/Navigation";
import { Logo } from "../components/Logo";
import { Article } from "../components/Article";
import { useState, useEffect } from "react";
import axios from "axios";

export const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    axios
      // Permet de faire une requête HTTP et permet de chercher les données à cette adresse
      .get("http://localhost:3004/articles")
      // Afficher le resultat dans la console
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
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
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          // Permet d'écrire une valeur qui est stocké dans setContent
          onChangeCapture={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 240 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul className="content">
        {blogData
          // Trier par l'ordre plus récent au plus vieux uniquement grace à la date
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

// 37:42 : Mettre du CSS sur l'ul de blog
