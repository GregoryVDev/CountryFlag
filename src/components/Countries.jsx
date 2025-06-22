import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const Countries = () => {
  // setData permet de modifier les données stockés dans data
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Faire un useEffect pour récupérer les données dans un API
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,capital,currencies,translations,flags,population,continents"
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
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              // Est-ce que continent est égale à selectedRadio (si oui = true, si non = false). Si c'est renvoyé false, alors le bouton "annuler la recherche" est retiré
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <div className="container-button">
          <button id="deletedSearch" onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        </div>
      )}
      <ul>
        {data
          // Filtrer les pays selon le continent sélectionné dans le bouton radio (le 0 = africa)
          .filter((country) => country.continents[0].includes(selectedRadio))
          // Trier du plus peuplé au moins peuplé
          .sort((a, b) => b.population - a.population)
          // Permet de limiter le nombre de pays affichés en fonction de la valeur du slide (rangeValue) qui est de 36
          .slice(0, rangeValue)
          /* Permet d'afficher chaque pays comme un foreach */
          .map((country, index) => (
            // Mettre le nom de chaque pays
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};
