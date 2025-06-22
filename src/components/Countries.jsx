import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const Countries = () => {
  // setData permet de modifier les données stockés dans data
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Faire un useEffect pour récupérer les données dans un API
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,capital,currencies,translations,flags,population"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)} // Fonction déclenchée quand on bouge le slider
        />
        {radios.map((continent) => (
          <li>
            {/* Ajouter un name pour pouvoir lier tous les checkbox */}
            <input type="radio" id={continent} name="continentRadio" />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <h1>COUNTRIES</h1>
      <ul>
        {/* Permet d'afficher chaque pays comme un foreach */}
        {data.slice(0, rangeValue).map((country, index) => (
          // Mettre le nom de chaque pays
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};
