import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
/* global document */

injectGlobal`
  @font-face {
  font-family: 'Avenir Book';
  src: local('Avenir Book'), url(./fonts/AvenirLTStd-Book.woff2) format('woff2'),
    url(./fonts/AvenirLTStd-Book.woff) format('woff'),
    url(./fonts/AvenirLTStd-Book.ttf) format('truetype'),
    url(./fonts/AvenirLTStd-Book.otf) format('opentype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Avenir Book;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
