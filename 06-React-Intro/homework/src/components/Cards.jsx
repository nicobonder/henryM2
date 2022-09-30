import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return(
    <div >
      <ul className='climaCards'>
        {props.cities ? props.cities.map((city) =>{ //comprueba que llegan cities
          return (                      //cities es la props q le paso a Cards en App, y como valor tiene la data
            <Card 
            key={city.id}
            onClose={() => alert(city.name)} //es una funcion que le voy a pasar a Card
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