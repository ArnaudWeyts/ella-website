import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Intro from './Intro';
import MakingKAccessible from './MakingKAccessible';
import ANewWay from './ANewWay';
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

const Video = styled.video`
  width: 100%;
  height: 31.25em;
  background: #a1bdc9;
`;

const Home = () => (
  <Container>
    <Anchor id="home" />
    <Header />
    <Intro />
    <Anchor id="about" />
    <MakingKAccessible />
    <ANewWay />
    <Anchor id="service" />
    <WhoCanBenefitFromElla />
    <Anchor id="contact" />
    <Contact />
    <Footer />
    <Webchat />
  </Container>
);

export default Home;
