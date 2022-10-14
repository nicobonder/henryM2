//cdo haga click para buscar una pelicula, el array que me traiga la api la tengo q guardar en el reducer
const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    movieDetail: {}
  };

  //SI HAY Q HACER LOGICA COMO UN FILTER, SE HACE EN EL REDUCER Y NO EN ACTION
  //el reducer es una funcion que recibe 2 parametros
  export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_MOVIES":
            return {
                ...state, //asi como tengo action.type, lo que quier es action.payload, que es la otra prop de action. viene del dispatch del archivo de actions payload: movies y es la respuesta de la api.
                moviesLoaded: action.payload.Search
            };   
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            };   //Search es una prop que tiene el obj que llega desde la api
        case "ADD_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload),
            }; //tb puede ser [...state.moviesFavorites, action.payload]
        case "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter((movie) => movie.id !== action.id)
            };                                                   //tiene q ser movie.id porq en favorite no existe imdbID   
        
        default: return {...state};
    }   
  }
