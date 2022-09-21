import React from 'react';
import s from './Card.module.css';


export default function Card(props) {
  // acá va tu código
  return props.min < 18 ?
    <div className={s.oneCard}>
      <div className={s.close}>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className={s.clima}>
        <h2 className={s.cityName}>{props.name}</h2>
        <div className={s.allclima}>
          <div className={s.divTemp}>
            <h3>Min</h3>
            <p className={s.temp}>{props.min}°</p>
          </div>
          <div className={s.divTemp}>
            <h3>Max</h3>
            <p className={s.temp}>{props.max}°</p>
          </div>
          <div className={s.imgTemp}>
            <img className={s.imgI} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima'/>
          </div>
        </div>
      </div>  
    </div> 
    : 
    <div className={s.oneCardHot}>
      <div className={s.closeHot}>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className={s.clima}>
        <h2 className={s.cityNameHot}>{props.name}</h2>
        <div className={s.allclima}>
          <div className={s.divTempHot}>
            <h3>Min</h3>
            <p className={s.tempHot}>{props.min}°</p>
          </div>
          <div className={s.divTempHot}>
            <h3>Max</h3>
            <p className={s.tempHot}>{props.max}°</p>
          </div>
          <div className={s.imgTemp}>
            <img className={s.imgI} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima'/>
          </div>
        </div>
      </div>  
    </div> 

};

/*`http://openweathermap.org/img/wn/${props.icon}@2x.png`*/