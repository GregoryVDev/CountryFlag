export const Card = ({ country }) => {
  console.log(country);
  return (
    <div>
      <li className="card">
        <div className="infos">
          <h2>Nom du pays</h2>
        </div>
      </li>
    </div>
  );
};
