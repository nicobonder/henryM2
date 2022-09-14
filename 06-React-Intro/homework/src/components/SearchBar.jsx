import React from 'react';

export default function SearchBar(props) {
  // acá va tu código

  function  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={'Ciudad...'}></input>
      <button type='submit' onClick={() => props.onSearch('Buscando ciudad')}>Agregar</button>
    </form>
  )

};
