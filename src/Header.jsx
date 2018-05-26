import React from 'react';

import ellaLogo from './img/ella-logo.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

function Header() {
  return (
    <header className="Header">
      <img className="Header__logo" src={ellaLogo} alt="Ella logo" />
      <h1 className="Header__title">Ella</h1>
      <nav className="Header__menu">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </nav>
    </header>
  );
}

export default Header;
