import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad';
import About from '../components/About';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  let [cities, setCities] = useState([]);
  //let match = useRouteMatch();

  let onSearch = (ciudad) => {
    //esta func se define aca porque aca es donde tengo   setCities,
    //si la hago en searcBar, no tendria idea que es setCities

    //defino apiKey y la paso, o directam pongo el valor en la url
    console.log("buscando ciudad", ciudad);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((res) => res.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            st: recurso.main.feels_like,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
          console.log("setCities", cities);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    
  };
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    return ciudad;
    /*let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }*/
  }

  return (
    <div className="App">
      <Router>
        <Nav onSearch={onSearch} />
        <Switch>
          <Route exact path="/">
            <Cards cities={cities} onClose={onClose} />
          </Route>
          <Route 
            exact path="/ciudad/:id"
            render={ ({ match }) => <Ciudad city={onFilter(match.params.id)} />}
          >
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

/*<Route
  exact path='/ciudad/:ciudadId'
  render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
/>*/


/*
const apiKey = 'Aqui va la API key que creaste';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
*/