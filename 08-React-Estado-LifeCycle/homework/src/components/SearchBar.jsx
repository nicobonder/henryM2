import React, { useState } from "react";
import s from "./SearchBar.module.css";

/*COMPONENTE DE CLASE*/

//import React, { Component } from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleChange = (e) => {this.setState({city: e.target.value})} //el value se almacena en city

  render() {
    return (
      <form
        id={s.searchForm}
        onSubmit={(e) => {
          //cdo haga submit se dispara onSearch con el valor que le puse al nuevo estado, o sea lo que escribi en el input
          e.preventDefault();
          this.props.onSearch(this.state.city); //this.state.city es el parametro que en App llamo ciudad. Tomo el valor de la propiedad city que es prop del estado
          this.setState({city: ""}); //para que se limpie despues de agregar la ciudad
          //this.state es para tomar el valor del estado y this.setState es un metodo para cambiar el valor
        }}
      >
        <input
          id={s.searchInput}
          type="text"
          placeholder={"Ciudad..."}
          name="ciudad"
          value={this.state.city} //el value del input tiene q ser el mismo que el del state. Asi cdo modifico el valor del input, se modican tanto el value como el state
          //
          onChange={this.handleChange}

          //va modificando state de searchBar a medida q se escribe
        />

        <button id={s.searchBtn} type="submit" value="Agregar">
          Agregar
        </button>
      </form>
    );
  }
}

/*COMPONENTE DE FUNCION
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  // acá va tu código

  return (
    <form id={s.searchForm} 
      onSubmit={(e) => { //cdo haga submit se dispara onSearch con el valor que le puse al nuevo estado, o sea lo que escribi en el input
        e.preventDefault();
        onSearch(city) //llamo a la func onSearch que llega por props. city es el estado del componente
        setCity('') //para que se limpie despues de agregar la ciudad
      }}>
      <input 
        id={s.searchInput} 
        type="text" 
        placeholder={'Ciudad...'}
        name="ciudad"
        value={city} //el value del input tiene q ser el mismo que el del state. Asi cdo modifico el valor del input, se modican tanto el value como el state
        //
        onChange={e => setCity(e.target.value)} //va modificando state de searchBar a medida q se escribe
      />

      <button id={s.searchBtn} type='submit' value="Agregar">Agregar</button>
    </form>
  )

}; */
