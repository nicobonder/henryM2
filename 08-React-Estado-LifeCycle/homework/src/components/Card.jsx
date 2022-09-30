import React from 'react';
import s from './Card.module.css';


export default function Card({onClose, name, min, max, st, img, id}) {
  // acá va tu código
  return min < 18 ?
    <div className={s.oneCard}>
      <div className={s.close}>
        <button onClick={() => onClose(id)}>X</button> {/*recibo la func de Cards y le pongo el id de la card en la que estoy*/}
      </div>
      <div className={s.clima}>
        <h2 className={s.cityName}>{name}</h2>
        <div className={s.allclima}>
          <div className={s.divTemp}>
            <h3>Min</h3>
            <p className={s.temp}>{min}°</p>
          </div>
          <div className={s.divTemp}>
            <h3>Max</h3>
            <p className={s.temp}>{max}°</p>
          </div>
          <div className={s.divTemp}>
            <h3>ST</h3>
            <p className={s.temp}>{st}°</p>
          </div>
          <div className={s.imgTemp}>
            <img className={s.imgI} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima'/>
          </div>
        </div>
      </div>  
    </div> 
    : 
    <div className={s.oneCardHot}>
      <div className={s.closeHot}>
        <button onClick={onClose}>X</button>
      </div>
      <div className={s.clima}>
        <h2 className={s.cityNameHot}>{name}</h2>
        <div className={s.allclima}>
          <div className={s.divTempHot}>
            <h3>Min</h3>
            <p className={s.tempHot}>{min}°</p>
          </div>
          <div className={s.divTempHot}>
            <h3>Max</h3>
            <p className={s.tempHot}>{max}°</p>
          </div>
          <div className={s.tempHot}>
            <h3>ST</h3>
            <p className={s.temp}>{st}°</p>
          </div>
          <div className={s.imgTemp}>
            <img className={s.imgI} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima'/>
          </div>
        </div>
      </div>  
    </div> 

};

/*`http://openweathermap.org/img/wn/${icon}@2x.png`*/