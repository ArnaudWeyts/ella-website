import React from 'react';
import styled from 'styled-components';
import { I18n } from 'react-i18next';

import Header from './Header';
import Intro from './Intro';
import MakingKAccessible from './MakingKAccessible';
import HowItWorks from './HowItWorks';
import Features from './Features';
import WhoCanBenefitFromElla from './WhoCanBenefitFromElla';
import Contact from './Contact';
import Footer from './Footer';
import Webchat from './Webchat';

/* eslint-disable jsx-a11y/media-has-caption */

const Container = styled.div`
  overflow: hidden;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -7em;
  visibility: hidden;
`;

const Home = () => (
  <Container>
    <I18n ns="translations">
      {() => (
        <React.Fragment>
          <Anchor id="home" />
          <Header />
          <Intro />
          <Anchor id="about" />
          <MakingKAccessible />
          <HowItWorks />
          <Features />
          <Anchor id="service" />
          <WhoCanBenefitFromElla />
          <Anchor id="contact" />
          <Contact />
          <Footer />
          <Webchat />
        </React.Fragment>
      )}
    </I18n>
  </Container>
);

export default Home;
