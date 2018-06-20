import React from 'react';
import { I18n } from 'react-i18next';

import { Button } from './styles';

const LanguagePicker = () => (
  <I18n>
    {(t, { i18n }) => (
      <React.Fragment>
        <Button border>EN</Button>
        <div style={{ display: 'none' }}>
          <button onClick={() => i18n.changeLanguage('en')}>en</button>
          <button onClick={() => i18n.changeLanguage('nl')}>nl</button>{' '}
        </div>
      </React.Fragment>
    )}
  </I18n>
);

export default LanguagePicker;
