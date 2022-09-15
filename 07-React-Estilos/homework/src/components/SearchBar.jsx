import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código

  function  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form id={s.searchForm} onSubmit={handleSubmit}>
      <input id={s.searchInput} type="text" placeholder={'Ciudad...'}></input>
      <button id={s.searchBtn} type='submit' onClick={() => props.onSearch('Buscando ciudad')}>Agregar</button>
    </form>
  )

};
