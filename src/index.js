import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './i18n';

import { AvenirTTF, AvenirRegularWOFF, AvenirRegularWOFF2, AvenirHeavyWOFF2 } from './fonts';

/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
/* global document */

injectGlobal`
  @font-face {
    font-family: 'Avenir';
    src: url('${AvenirRegularWOFF2}') format('woff2'),
      url('${AvenirRegularWOFF}') format('woff'),
      url('${AvenirTTF}') format('truetype');
  }

  @font-face {
    font-family: 'Avenir';
    src: url('${AvenirHeavyWOFF2}') format('woff2');
    font-weight: bold;
}

  body {
    margin: 0;
    padding: 0;
    font-family: Avenir;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
