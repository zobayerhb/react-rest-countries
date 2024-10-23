import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  console.log(country);

  const [visited, setVisited] = useState(false);

  const { name, flags } = country;

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`box ${visited ? "visited" : "non-visited"}`}>
      <h4 style={{ color: visited && "blue" }}>Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <button onClick={() => handleVisitedCountries(country)}>
        Marked Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I am already visited this country" : "Want visit"}
    </div>
  );
};

export default Country;
