import axios from "axios";
import { useEffect } from "react";

export const Countries = () => {
  // Faire un useEffect pour récupérer les données dans un API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
    </div>
  );
};
