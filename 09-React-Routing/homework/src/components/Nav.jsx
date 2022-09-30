import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';

import { Link } from 'react-router-dom';

//logo henry ---titulo --- searchbar
function Nav({onSearch}) {
  return (
    <div >
      <nav id={s.navbar} className="navbar navbar-light bg-light">
        <Link to="/" id={s.logo}>
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
          <h3>Henry Weather App</h3>
        </Link>
        <Link id={s.about} to="/about">About</Link>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;
