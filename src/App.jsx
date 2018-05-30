import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Contact from './Contact';
import Webchat from './Webchat';

/* eslint-disable jsx-a11y/media-has-caption */

const Video = styled.video`
  width: 100%;
  height: 31.25em;
  background: lightgrey;
`;

const Segment = styled.div`
  height: 15.625em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  height: 6.25em;
  background: darkgrey;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Video>
        <source />
        Your browser does not support the video tag.
      </Video>
      <Segment>Who we are</Segment>
      <Segment>Grow your business</Segment>
      <Segment>What we can do for you</Segment>
      <Segment>Pricing</Segment>
      <Segment>Map</Segment>
      <Contact />
      <Footer className="Footer" />
      <Webchat />
    </div>
  );
}

export default App;
