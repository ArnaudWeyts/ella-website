import React from 'react';
import styled from 'styled-components';

import ellaLogo from './img/ella-logo.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

const Header = styled.header`
  padding: 2em;
  display: flex;
  align-items: center;
`;

const HeaderMenu = styled.nav`
  margin: 0 auto;
`;

const HeaderLogo = styled.img`
  height: 2.5em;
  margin-bottom: -0.75em;
`;

const NavLink = styled.a`
  margin: 0 1em;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  border-bottom: ${({ selected }) => (selected ? 'solid 2px #eb8018;' : 0)};
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
    </Header>
  );
}

export default HeaderContainer;
