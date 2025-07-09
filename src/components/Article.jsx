import { useState } from "react";

export const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      seconde: "numeric",
    });
    return newDate;
  };
  return (
    <div>
      <div className="article">
        <div className="card-header">
          <h3>{article.author}</h3>
          <em>Posté le {dateFormater(article.date)}</em>
        </div>
        {isEditing ? (
          <textarea defaultValue={article.content}></textarea>
        ) : (
          <p>{article.content}</p>
        )}

        <div className="btn-container">
          {isEditing ? (
            <button onClick={() => setIsEditing(false)}>Valider</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button>Supprimer</button>
        </div>
      </div>
    </div>
  );
};
