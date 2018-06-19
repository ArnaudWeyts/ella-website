import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ellaLogoMonoWhite from '../img/ella-logo-mono-white.svg';
import ellaLogo from '../img/ella-logo.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */

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

const Header = styled.header`
  height: 7em;
  padding: 2em;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  box-sizing: border-box;
  transition: background 0.5s ease-in-out;

  ${props =>
    props.inverted &&
    css`
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.0588235) 0px 2px 1px 0px;

      & ${HeaderLogoText} {
        color: #000;
      }

      & ${NavLink} {
        color: #000;
      }
    `};
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

const HeaderSide = styled.div`
  flex: 1;
`;

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'home',
      userScroll: true,
      inverted: false,
    };

    this.setActive = this.setActive.bind(this);

    this.container = React.createRef();
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
      if (window.scrollY > this.container.current.clientHeight / 2) {
        this.setState({ inverted: true });
      } else {
        this.setState({ inverted: false });
      }
    });
  }

  setActive(page) {
    this.setState({ active: page, userScroll: false });
    setTimeout(() => this.setState({ userScroll: true }), 3000);
  }

  render() {
    const { active, inverted } = this.state;
    return (
      <Header innerRef={this.container} inverted={inverted}>
        <HeaderSide>
          <LogoLink onClick={() => this.setActive('home')} href="#home">
            <HeaderLogo src={inverted ? ellaLogo : ellaLogoMonoWhite} alt="Ella logo" />
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
