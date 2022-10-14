import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

//para poder usar las devtools y permite pasar en un solo parametro el middleware y el devtool
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, composeEnhancer(applyMiddleware(thunk)));
    
export default store;
