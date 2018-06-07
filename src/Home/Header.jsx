import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ellaLogo from '../img/ella-logo.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

const Header = styled.header`
  padding: 2em;
  display: flex;
  align-items: center;
`;

const HeaderMenu = styled.nav`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  height: 2.5em;
`;

const NavLink = styled.a`
  margin: 0 1em;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  border-bottom: ${({ selected }) => (selected ? 'solid 2px #eb8018;' : 0)};
`;

const TryMe = styled.button`
  cursor: pointer;
  height: 3em;
  width: 8em;
  text-transform: uppercase;
  font-family: Avenir;
  color: #147ab8;
  border: solid 1px #147ab8;
  border-radius: 5px;
  background: #fff;
`;

function HeaderContainer() {
  return (
    <Header>
      <HeaderMenu>
        <NavLink selected href="#">
          Home
        </NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">
          <HeaderLogo src={ellaLogo} alt="Ella logo" />
        </NavLink>
        <NavLink href="#">Service</NavLink>
        <NavLink href="#">Contact</NavLink>
      </HeaderMenu>
      <Link
        style={{
          position: 'absolute',
          right: '1em',
        }}
        to="/demo"
      >
        <TryMe>Try me</TryMe>
      </Link>
    </Header>
  );
}

export default HeaderContainer;
