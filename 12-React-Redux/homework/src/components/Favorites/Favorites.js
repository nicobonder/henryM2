import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>{/*ese movies tiene relac con movies del mapState??*/}
          {
            this.props.movies && this.props.movies.map(movie =>(
              <div key={movie.id}> {/*En Buscador en el onclick hice id: movie.imdbID, entonces ahora puedo usar directam la prop id*/}
                <Link to={`/movie/${movie.id}`}>
                  <span>{movie.title}</span>
                </Link>
                  <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
              </div>
            )) 
          }
        </ul>
      </div>
    );
  }
}

export function mapStateToProps(state){
  return {
    movies: state.moviesFavorites
  };
}

export function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}

//la lista de fav esta en store, entonces tengo q conectar con connect
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
//export default (ConnectedList);
