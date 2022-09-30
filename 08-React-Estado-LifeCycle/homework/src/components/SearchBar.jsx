import React, { useState } from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  // acá va tu código

  return (
    <form id={s.searchForm} 
      onSubmit={(e) => { //cdo haga submit se dispara onSearch con el valor que le puse al nuevo estado, o sea lo que escribi en el input
        e.preventDefault();
        onSearch(city)
        setCity('') //para que se limpie despues de agregar la ciudad
      }}>
      <input 
        id={s.searchInput} 
        type="text" 
        placeholder={'Ciudad...'}
        name="ciudad"
        value={city} //el value del input tiene q ser el mismo que el del state.
        onChange={e => setCity(e.target.value)} //va modificando state de searchBar a medida q se escribe
      />

      <button id={s.searchBtn} type='submit' value="Agregar">Agregar</button>
    </form>
  )

}; 
