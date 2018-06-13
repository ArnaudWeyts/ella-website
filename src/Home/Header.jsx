import React, { Component } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ellaLogo from '../img/ella-logo.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

const Header = styled.header`
  height: 3em;
  padding: 2em;
  display: flex;
  align-items: center;
  background: #a1bdc9;
  position: fixed;
  width: 100%;
  z-index: 3;
`;

const HeaderMenu = styled.nav`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  height: 2.5em;
`;

const NavLink = styled(AnchorLink)`
  font-size: 20px;
  margin: 0 1em;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  border-bottom: ${({ selected }) => (selected ? 'solid 2px #eb8018;' : 0)};
`;

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'home',
      userScroll: true,
    };

    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    const about = document.getElementById('about');
    const service = document.getElementById('service');
    const contact = document.getElementById('contact');

    document.addEventListener('scroll', () => {
      if (this.state.userScroll) {
        if (window.scrollY < about.offsetTop - 300) {
          this.setState({ active: 'home' });
        } else if (window.scrollY < service.offsetTop - 300) {
          this.setState({ active: 'about' });
        } else if (window.scrollY < contact.offsetTop - 600) {
          this.setState({ active: 'service' });
        } else {
          this.setState({ active: 'contact' });
        }
      }
    });
  }

  setActive(page) {
    this.setState({ active: page, userScroll: false });
    setTimeout(() => this.setState({ userScroll: true }), 3000);
  }

  render() {
    const { active } = this.state;
    return (
      <Header>
        <HeaderMenu>
          <NavLink selected={active === 'home'} onClick={() => this.setActive('home')} href="#home">
            Home
          </NavLink>
          <NavLink
            selected={active === 'about'}
            onClick={() => this.setActive('about')}
            href="#about"
          >
            About
          </NavLink>
          <NavLink onClick={() => this.setActive('home')} href="#home">
            <HeaderLogo src={ellaLogo} alt="Ella logo" />
          </NavLink>
          <NavLink
            onClick={() => this.setActive('service')}
            selected={active === 'service'}
            href="#service"
          >
            Service
          </NavLink>
          <NavLink
            selected={active === 'contact'}
            onClick={() => this.setActive('contact')}
            href="#contact"
          >
            Contact
          </NavLink>
        </HeaderMenu>
      </Header>
    );
  }
}

export default HeaderContainer;
