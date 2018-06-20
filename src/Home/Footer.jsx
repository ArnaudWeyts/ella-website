import React from 'react';
import styled from 'styled-components';

import logos from '../img/logos';

import { Link } from './styles';

const Footer = styled.footer``;

const FooterContent = styled.div`
  background-color: #0a6b94;
  height: 6.25em;
  display: flex;
  align-items: center;
  padding: 0 6em 0 2em;
  justify-content: space-around;
  color: #fff;

  & > * {
    margin: 0 1em;
  }

  & > * > * {
    margin: 0 0.5em;
  }
`;

const Logo = styled.img`
  height: ${props => (props.small ? '2em' : '2.5em')};
`;

const Copyright = styled.span``;

const FooterComponent = () => (
  <Footer>
    <FooterContent>
      <Logo src={logos.ellaColor} alt="Ella logo" />
      <div>
        <Link href="#">Terms of use</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Support</Link>
      </div>
      <div>
        <Link href="#">
          <Logo small src={logos.facebook} alt="Facebook logo" />
        </Link>
        <Link href="#">
          <Logo small src={logos.twitter} alt="Twitter logo" />
        </Link>
      </div>
      <Copyright>
        © Copyright 2018 <Link href="#">Knowledgeflow</Link>
      </Copyright>
    </FooterContent>
  </Footer>
);

export default FooterComponent;
