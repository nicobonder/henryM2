import React, { useState } from "react";
import "./App.css";
//import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";

//import data from "./data.js";

export default function App() {
  let [cities, setCities] = useState([]);
  //let apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  let onSearch = (ciudad) => {
    //esta func se define aca porque aca es donde tengo   setCities,
    //si la hago en searcBar, no tendria idea que es setCities

    //defino apiKey y la paso, o directam pongo el valor en la url
    console.log("buscando ciudad", ciudad);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((res) => res.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            st: recurso.main.feels_like,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
          console.log("setCities", cities);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    
  };
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/*<SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />*/}
      <hr />
      <Cards cities={cities} onClose={onClose} />
      {/*antes le pasaba data, ahora paso cities */}
      <hr />
    </div>
  );
}
