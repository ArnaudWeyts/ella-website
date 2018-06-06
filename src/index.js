import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AvenirBookOTF, AvenirBookTTF, AvenirBookWOFF, AvenirBookWOFF2 } from './fonts';

/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
/* global document */

injectGlobal`
  @font-face {
    font-family: 'Avenir Book';
    src: local('Avenir Book'), url('${AvenirBookWOFF2}') format('woff2'),
      url('${AvenirBookWOFF}') format('woff'),
      url('${AvenirBookTTF}') format('truetype'),
      url('${AvenirBookOTF}') format('opentype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Avenir Book;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
