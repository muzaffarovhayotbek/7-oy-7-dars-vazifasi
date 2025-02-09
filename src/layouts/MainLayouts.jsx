import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainLayouts.css'

function MainLayouts({ children }) {
  return (
    <div>
      <header className='header'>
        <div className="container header__container">
          <NavLink to="/">Home page</NavLink>
          <NavLink to="/SimpleStaticChart">Simple Static Chart</NavLink>
          <NavLink to="/DynamicData">Dynamic Data</NavLink>
        </div>
      </header>
      {children}
      <footer></footer>
    </div>
  );
}

export default MainLayouts;
