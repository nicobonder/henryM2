import React from "react";

//Uso useParams para tomar el valor del id desde la url de la ciudad
//import { useParams } from "react-router-dom"; 
//import s from "./Card.module.css";

export default function Ciudad({ city }) {
  //let { ciudadId } = useParams();
  //console.log(ciudadId);

  if(!city) { return <h3>Lo sentimos, pero no encontramos esa ciudad</h3>}

  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
