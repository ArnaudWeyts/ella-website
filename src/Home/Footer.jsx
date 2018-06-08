import React from 'react';
import styled from 'styled-components';

import blueCloud from '../img/blue-cloud.svg';

const Footer = styled.footer``;

const Cloud = styled.div`
  background: url(${blueCloud});
  width: 120vw;
  height: 5em;
  background-size: 110%;
  background-position: center 0;
  background-repeat: repeat-x;

  @media (max-width: 600px) {
    background-position-y: 3em;
  }
`;

const FooterContent = styled.div`
  background-color: #0a6b94;
  height: 6.25em;
`;

const FooterComponent = () => (
  <Footer>
    <Cloud />
    <FooterContent />
  </Footer>
);

export default FooterComponent;
