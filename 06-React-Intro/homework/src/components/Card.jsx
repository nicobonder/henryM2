import React from 'react';

export default function Card({ onClose, min, max, img, name }) { //puedo destructurar asi o poner (props)
  // acá va tu código                           //si pongo props, despues tengo que poner props cada vez q uso una prop
 
  //name, min, max y img llegan por props desde Cards
  return (
    <div className='oneCard'>
      <div className='close'>
        <button onClick={onClose}>X</button> {/*onclose llega por props desde Cards */}
      </div>
      <div className='clima'>
        <h2 className='cityName'>{name}</h2>
        <div className='allclima'>
          <div className='divTemp'>
            <h3>Min</h3>
            <p className='temp'>{min}°</p>
          </div>
          <div className='divTemp'>
            <h3>Max</h3>
            <p className='temp'>{max}°</p>
          </div>
          <div className='imgTemp'>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima'/>
        </div>
        </div>
      </div>
      
    </div>  
  )

};

/*`http://openweathermap.org/img/wn/${props.icon}@2x.png`*/