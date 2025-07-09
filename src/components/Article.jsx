export const Article = ({ article }) => {
  return (
    <div>
      <div className="article">
        <div className="card-header">
          <h3>{article.author}</h3>
          <em>Posté le {article.date}</em>
        </div>
        <p>{article.content}</p>
      </div>
    </div>
  );
};
