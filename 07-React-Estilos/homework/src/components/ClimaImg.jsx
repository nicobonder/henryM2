import React from 'react';
import s from './ClimaImg.module.css';

export default function ClimaImg(props){
    <div className={s.imgTemp}>
        <img className={s.imgI} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima'/>
    </div>
}