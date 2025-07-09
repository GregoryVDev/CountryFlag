export const Article = ({ article }) => {
  return (
    <div>
      <div className="article">
        <div className="card-header">
          <h3>{article.author}</h3>
        </div>
      </div>
    </div>
  );
};
