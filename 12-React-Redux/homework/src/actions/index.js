export function getMovies(title) {
  return function(dispatch) {//esta funcion sirve como middleware
      // tb se puede hacer "http://www.omdbapi.com/?apikey=7922b1f8&s=" + titulo
    return fetch(`http://www.omdbapi.com/?apikey=7922b1f8&s=${title}`) 
      .then(response => response.json())
      .then(movies => dispatch({type: "GET_MOVIES", payload: movies}))
      //desde el dispatch se envia la info al reducer
  }
}

//los detalles tb los traigo con un pedido a la api por id
export function getMovieDetail(id){
  return function(dispatch){
    return fetch(`http://www.omdbapi.com/?apikey=7922b1f8&i=${id}`) 
    .then(response => response.json())
    .then(detail => {dispatch ({type: "GET_MOVIE_DETAIL", payload: detail})})
  }
}

export function addMovieFavorite(movie) {
    return { type: "ADD_MOVIE_FAVORITE", payload: movie } 
  }


  export function removeMovieFavorite(id){
    return { type: "REMOVE_MOVIE_FAVORITE", id}; //no siempre tiene q llamarse payload, 
                                           //en este caso puede ser id
}

//SI HAY Q HACER LOGICA COMO UN FILTER, SE HACE EN EL REDUCER Y NO EN ACTION
  

  
 