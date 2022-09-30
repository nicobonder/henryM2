import React from 'react';
import Card from './Card';
//import cities from '../data';

import s from './Cards.module.css';

//cities se modifico en App, en el setCities
export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities)
  return(
    <div >
      <ul className={s.climaCards}>
        {cities ? cities.map((city) =>//comprueba que llegan cities
            <Card 
            key={city.id}
            onClose={onClose}
            name={city.name}
            id={city.id}
            min={city.min}
            max={city.max}
            st={city.st}
            img={city.img}
            />
          
        ) : <h3>No hay ciudad para mostrar</h3> } 
      </ul>    
    </div>
  ) 
};


//app---cards--card