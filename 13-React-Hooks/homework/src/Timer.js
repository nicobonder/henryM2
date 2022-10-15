import React, { useEffect, useRef, useState } from 'react';
import './Timer.css'

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
      
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  const myRef = useRef(null);
  function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
}

  let resetInput = ()=>{
    if(segundos === 0){
      return segundos
    }
  } 

  return (
    <div className="app">
      <div className="time">
        <p>{segundos}s</p>
      </div>
      <div className="row">
      <button onClick={toggle} className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}>{/*Cambia con la func toggle*/}
          {activo ? 'Pausa' : 'Inicio'}{/*Cambia con la func toggle*/}
        </button>
        <button onClick={reset} className="button-secondary">
          Reset
        </button>
      </div>
      <button onClick={cambioTipo} className="button">
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && 
        <input
          id='regresivo' 
          type="number" 
          ref={myRef} 
          onChange={agregaSegundos} 
          placeholder="Ingresa Segundos" 
          autoComplete="off"
          value = {resetInput()}
          min="0"
        />
      }
    </div>
  );
};

export default Timer;