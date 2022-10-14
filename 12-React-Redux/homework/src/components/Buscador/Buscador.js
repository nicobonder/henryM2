import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from "../../actions/index";
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = { //estado local inicial
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value })
    
  }

  handleSubmit(event) { //tengo q despachar la action de buscar
    event.preventDefault(); 
    this.props.getMovies(this.state.title); 
  }

  render() {
    const { title } = this.state; //destrcutura aca
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title} //como destructuro, no hace falta this.state
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies && this.props.movies.map((movie) => (
              <div key={movie.imdbID}> {/*como todos los div son iguales, necesito un key, y el imdbId es una prop del obj q tiene la api*/}
                <Link to={`/movie/${movie.imdbID}`}> {/*Quiero q el titulo tenga un link para ir al detalle. */}
                  {movie.Title} {/*quiero q se vea titulo, y el obj lo tiene como Title*/}
                </Link>
                <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>FAV</button>
              </div>                           //tengo q pasar las dos cosas xq aca lo recibe por title, pero en fav se elimina por id
            ))
          }
          
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
        </ul>
      </div>
    );
  }
}

//necesito mapear el estado de las propiedades. Y llamo la prop q vaya a necesitar.
//Desde el estado inicial traigo la array de movies, que primero esta vacio
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded 
  }; //ahora el componente Buscador recibe por prop movies. Para acceder puedo hacer this.props.movies. 
    //moviesLoaded viene del initialState que esta en el reducer.
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: title => dispatch(addMovieFavorite(title)),
    getMovies: title => dispatch(getMovies(title))
  }; // title => es como hacer (title) => ...es una func flecha implicita. Y title es el estado local q lo va a recibir desde el input
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador); //al poner Buscador como parametro estoy conectando el componente con el store 
          //y mapState me sirve para pasarle propiedades al componente, por ejemplo movies


/*COMPNENTE FUNCIONAL*/
/* 
export default function Buscador(){
  const [title, setTitle] =useState('');

  let handleChange = (e) => {
    setTitle(e.target.value);
  } 

  let handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title} //como destructuro, no hace falta this.state
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          this.props.movies.map((movie) => ())
         // Aqui tienes que escribir tu codigo para mostrar la lista de peliculas 
         </ul>
      </div>
  )
}
*/