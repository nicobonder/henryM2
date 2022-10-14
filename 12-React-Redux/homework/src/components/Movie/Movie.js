import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';
 
//Quiero q si ya tengo la pelicula, vaya y busque la info q corresponde. O sea cada vez que le doy refresh a la pagina, tome el id y traiga la info. Para eso puedo usar componentDidMount
class Movie extends React.Component {
    componentDidMount(){  //match es una prop de Route, junto a location y history
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);//se despacha la accion y eso llena el estado de movieDetail. Sin esto this.props.movie esta vacio y no se muestra nada
    }


    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>
                <h2>{this.props.movie.Year}</h2>
                <h2>{this.props.movie.Rated}</h2>
                <h2>{this.props.movie.Released}</h2>
                <h2>{this.props.movie.Genre}</h2>
                <img alt="Poster de la pelicula" src={this.props.movie.Poster}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    }; 
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    } // getMovieDetail es la func q viene de actions
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Movie);