export const Card = ({ country }) => {
  console.log(country);
  return (
    <div>
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"Drapeau " + country.translations.fra.common}
        />
        <div className="infos">
          <h2>{country.translations.fra.common}</h2>
        </div>
      </li>
    </div>
  );
};
