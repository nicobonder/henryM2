import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

//logo henry ---titulo --- searchbar
function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://www.soyhenry.com/">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
      </a>
      <h3>Henry Weather App</h3>
  <SearchBar onSearch={onSearch} />
</nav>
  );
};

export default Nav;
