import React from 'react';

export default function SearchBar( {onSearch}) { //por props recibo de App la func onSearch
  // acá va tu código

  function  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}> {/*handleSubmit la defino arriba 
                          y sirve para que no se refresque la pagina con cada submit */}
      <input type="text" placeholder={'Ciudad...'}></input>
      <button type='submit' onClick={() => onSearch('Buscando ciudad')}>Agregar</button> 
                            {/*hago () => para pasarle una funcion que no se ejecuta hasta que haga click 
                              es lo mismo que definir onSearch afuera en una variable, y aca pasar solo onSearch
                              Si solo hago onClick{onSearch} seria como ejecutarla aqui dentro (si no la declare afuera ni hago la arrow function)
                              */}
    </form>
  )

};
