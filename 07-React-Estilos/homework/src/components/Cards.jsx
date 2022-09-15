import React from 'react';
import Card from './Card';
//import cities from '../data';

import s from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return(
    <div >
      <ul className={s.climaCards}>
        {props.cities ? props.cities.map((city) =>{ //comprueba que llegan cities
          return (
            <Card 
            key={city.id}
            onClose={() => alert(city.name)}
            name={city.name}
            min={city.main.temp_min}
            max={city.main.temp_max}
            img={city.weather[0].icon}
            />
          )
        }) : <h3>No hay ciudad para mostrar</h3> } 
      </ul>    
    </div>
  ) 
};