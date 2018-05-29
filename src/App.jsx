import React from 'react';

import './App.css';

import Header from './Header';
import Contact from './Contact';
import Webchat from './Webchat';

/* eslint-disable jsx-a11y/media-has-caption */

function App() {
  return (
    <div className="App">
      <Header />
      <video className="Video">
        <source />
        Your browser does not support the video tag.
      </video>
      <div className="Segment">Who we are</div>
      <div className="Segment">Grow your business</div>
      <div className="Segment">What we can do for you</div>
      <div className="Segment">Pricing</div>
      <div className="Segment">Map</div>
      <Contact />
      <footer className="Footer" />
      <Webchat />
    </div>
  );
}

export default App;
