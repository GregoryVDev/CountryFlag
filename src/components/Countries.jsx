import axios from "axios";
import { useEffect, useState } from "react";

export const Countries = () => {
  // setData permet de modifier les données stockés dans data
  const [data, setData] = useState([]);
  // Faire un useEffect pour récupérer les données dans un API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
    </div>
  );
};
