import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import styled from 'styled-components';

import { Button } from './styles';

const Popup = styled.div`
  position: absolute;
  opacity: ${props => (props.show ? 1 : 0)};
  height: ${props => (props.show ? 'auto' : 0)};
  transition: all 0.5s ease-in-out;
  padding: 0.5em 0;

  background: #0a6b94;

  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  &:after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #0a6b94;
    border-width: 0.5em;
    margin-left: -0.5em;
  }

  & ${Button} {
    margin: 0.5em 0.5em;
  }
`;

class LanguagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
    };
  }

  render() {
    const { showPopup } = this.state;
    return (
      <I18n>
        {(t, { i18n }) => (
          <React.Fragment>
            <Button border onClick={() => this.setState({ showPopup: !showPopup })}>
              EN
            </Button>
            <Popup show={showPopup}>
              <Button border onClick={() => i18n.changeLanguage('en')}>
                en
              </Button>
              <Button border onClick={() => i18n.changeLanguage('nl')}>
                nl
              </Button>{' '}
            </Popup>
          </React.Fragment>
        )}
      </I18n>
    );
  }
}

export default LanguagePicker;
