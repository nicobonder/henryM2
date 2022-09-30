import React from 'react';

import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} /> {/*Paso la func onSearch al componente searchBar */}
      
      </div>
      {/*<div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
  </div>*/}
      <hr />
      <div>
        <Cards cities={data}/>
      </div>
      <hr />
      
    </div>
  );
}

export default App;
