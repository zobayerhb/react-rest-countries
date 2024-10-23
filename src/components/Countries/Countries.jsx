import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* display country name */}
      <div>
        <p>visited countries: {visitedCountries.length}</p>
        <ol>
          {visitedCountries.map((country) => (
            <li
              style={{ color: visitedCountries ? "pink" : "white" }}
              key={country.cca3}
            >
              {country.name.common}. population: {country.population}
            </li>
          ))}
        </ol>
      </div>

      {/* display countries flags */}
      <div>
        {visitedFags.map((flag, idx) => (
          <img className="country-flags" key={idx} src={flag} />
        ))}
      </div>

      {/* display all countries information */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
