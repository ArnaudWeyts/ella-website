import React from 'react';

import ellaLogo from './img/ella-logo.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

function Header() {
  return (
    <header className="Header">
      <nav className="Header__menu">
        <a className="Header__menu__item--selected" href="#">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">
          <img className="Header__logo" src={ellaLogo} alt="Ella logo" />
        </a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
