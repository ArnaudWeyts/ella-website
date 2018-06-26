import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import styled, { css } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logos from '../img/logos';
import close from '../img/close.svg';
import menuBlack from '../img/menu-black.svg';
import menuWhite from '../img/menu-white.svg';

import { Link } from './styles';

import LanguagePicker from './LanguagePicker';

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
  transition: transform 0.75s ease-in-out;

  & ${Link} {
    display: none;
  }

  @media (max-width: 800px) {
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100vw)')};
    padding: 3em 0;
    position: absolute;
    height: 100vh;
    flex-direction: column;
    width: 100vw;
    top: 0;
    right: 0;
    background: #fff;

    & ${NavLink} {
      color: #000;
    }

    & ${Link} {
      display: block;
    }
  }
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

const MenuButton = Link.extend`
  float: right;
  height: 2em;

  @media (min-width: 800px) {
    display: none;
  }
`;

const ChangeLanguage = styled.div`
  position: absolute;
  right: 2em;

  ${props =>
    props.showMenu &&
    css`
      position: static;
      right: auto;
    `};

  ${props =>
    props.showMenu &&
    css`
      flex-grow: 1;
    `};
`;

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'home',
      userScroll: true,
      inverted: false,
      showMenu: false,
    };

    this.setActive = this.setActive.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

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
      if (
        this.container.current !== null &&
        window.scrollY > this.container.current.clientHeight / 2
      ) {
        this.setState({ inverted: true });
      } else {
        this.setState({ inverted: false });
      }
    });
  }

  setActive(page) {
    this.setState({ active: page, userScroll: false });
    this.toggleMenu();
    setTimeout(() => this.setState({ userScroll: true }), 3000);
  }

  toggleMenu() {
    if (window.innerWidth < 800) {
      this.setState({ showMenu: !this.state.showMenu });
    }
  }

  render() {
    const { active, inverted, showMenu } = this.state;
    return (
      <Header innerRef={this.container} inverted={inverted}>
        <HeaderSide>
          <LogoLink onClick={() => this.setActive('home')} href="#home">
            <HeaderLogo src={inverted ? logos.ellaColor : logos.ellaMonoWhite} alt="Ella logo" />
            <HeaderLogoText>Ella</HeaderLogoText>
          </LogoLink>
        </HeaderSide>
        <HeaderMenu show={showMenu}>
          <Link style={{ flexGrow: '1' }} onClick={this.toggleMenu}>
            <img style={{ height: '3em' }} src={close} alt="closeIcon" />
          </Link>
          <NavLink selected={active === 'home'} onClick={() => this.setActive('home')} href="#home">
            <Trans i18nKey="header.navlinks.home">Home</Trans>
          </NavLink>
          <NavLink
            selected={active === 'about'}
            onClick={() => this.setActive('about')}
            href="#about"
          >
            <Trans i18nKey="header.navlinks.about">About</Trans>
          </NavLink>
          <NavLink
            onClick={() => this.setActive('service')}
            selected={active === 'service'}
            href="#service"
          >
            <Trans i18nKey="header.navlinks.service">Service</Trans>
          </NavLink>
          <NavLink
            selected={active === 'contact'}
            onClick={() => this.setActive('contact')}
            href="#contact"
          >
            <Trans i18nKey="header.navlinks.contact">Contact</Trans>
          </NavLink>
          <div style={{ flexGrow: '1', height: '3em' }} />
          <ChangeLanguage showMenu={showMenu}>
            <LanguagePicker inverted={showMenu ? true : inverted} showMenu={showMenu} />
          </ChangeLanguage>
        </HeaderMenu>
        <HeaderSide>
          <MenuButton onClick={this.toggleMenu}>
            <img
              src={inverted ? menuBlack : menuWhite}
              style={{ height: '100%' }}
              alt="menu icon"
            />
          </MenuButton>
        </HeaderSide>
      </Header>
    );
  }
}

export default HeaderContainer;
