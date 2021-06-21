import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [cities, setCities] = useState([]);
  const [selectedCounty, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = {
    "Kepulauan Riau": ["Batam", "Natuna", "Tanjung Pinang", "Karimun"],
    "Jawa Barat": ["Bogor", "Ciamis", "Cirebon", "Cimahi"]
  };

  const countryList = Object.keys(countries).map(key => ({
    name: key
  }));

  function handleCountrySelect(e) {
    console.log("Selected country", e.target.value);
    const countrySel = e.target.value;
    const citiesSel = countrySel !== "" ? countries[countrySel] : "";
    setSelectedCountry(countrySel);
    setCities(citiesSel);
    setSelectedCity("");
  }

  function handleCitySelect(e) {
    console.log("Selected city", e.target.value);
    const citiesSel = e.target.value;
    setSelectedCity(citiesSel);
  }

  return (
    <div className="App">
      <h1>Provinsi</h1>

      <div className="Container">
        <select
          name="Countries"
          onChange={e => handleCountrySelect(e)}
          value={selectedCounty}
        >
          <option value="">Silakan Pilih Provinsi</option>
          {countryList.map((country, key) => (
            <option key={key} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      
      <h1>Kota</h1>
        <select
          name="Cities"
          onChange={e => handleCitySelect(e)}
          value={selectedCity}
        >
          <option value="">Silakan Pilih Kota</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
