import React, { Component } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Button } from './styles';

import ellaLogoMonoWhite from '../img/ella-logo-mono-white.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

const Header = styled.header`
  height: 7em;
  padding: 2em;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 3;
  box-sizing: border-box;
`;

const HeaderMenu = styled.nav`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoLink = styled(AnchorLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex: 1;
`;

const HeaderLogo = styled.img`
  height: 2.5em;
`;

const HeaderLogoText = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

const NavLink = styled(AnchorLink)`
  font-size: 20px;
  margin: 0 1.5em;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  border-bottom: ${({ selected }) => (selected ? 'solid 2px #eb8018;' : 0)};
`;

const HeaderSide = styled.div`
  flex: 1;
`;

const HeaderButton = Button.extend`
  float: right;
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
        <HeaderSide>
          <LogoLink onClick={() => this.setActive('home')} href="#home">
            <HeaderLogo src={ellaLogoMonoWhite} alt="Ella logo" />
            <HeaderLogoText>Ella</HeaderLogoText>
          </LogoLink>
        </HeaderSide>
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
        <HeaderSide>{/* <HeaderButton>Ask us a question</HeaderButton> */}</HeaderSide>
      </Header>
    );
  }
}

export default HeaderContainer;
