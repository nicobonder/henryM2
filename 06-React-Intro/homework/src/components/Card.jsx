import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div className='oneCard'>
      <div className='close'>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className='clima'>
        <h2 className='cityName'>{props.name}</h2>
        <div className='allclima'>
          <div className='divTemp'>
            <h3>Min</h3>
            <p className='temp'>{props.min}°</p>
          </div>
          <div className='divTemp'>
            <h3>Max</h3>
            <p className='temp'>{props.max}°</p>
          </div>
          <div className='imgTemp'>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima'/>
        </div>
        </div>
      </div>
      
    </div>  
  )

};

/*`http://openweathermap.org/img/wn/${props.icon}@2x.png`*/