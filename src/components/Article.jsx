import { useState } from "react";
import axios from "axios";

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

  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      updatedDate: Date.now(),
    };

    axios.put("http://localhost:3004/articles/" + article.id, data).then(() => {
      setIsEditing(false);
    });
  };

  const handleDelete = () => {
    axios.delete("http://localhost:3004/articles/" + article.id);
  };

  return (
    <div>
      <div
        className="article"
        style={{ background: isEditing ? "#f3feff" : "#f5f5f5" }}
      >
        <div className="card-header">
          <h3>{article.author}</h3>
          <em>Posté le {dateFormater(article.date)}</em>
        </div>
        {isEditing ? (
          <textarea
            defaultValue={article.content}
            autoFocus
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
        ) : (
          <p>{editContent ? editContent : article.content}</p>
        )}

        <div className="btn-container">
          {isEditing ? (
            <button onClick={() => handleEdit()}>Valider</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button
            onClick={() => {
              if (
                window.confirm("Voulez-vous vraiment supprimer cet article ?")
              ) {
                handleDelete();
              }
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};
