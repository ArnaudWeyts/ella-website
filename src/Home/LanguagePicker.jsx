import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import styled, { css } from 'styled-components';

import { Button } from './styles';

const Popup = styled.div`
  position: absolute;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: all 0.5s ease-in-out;
  padding: 0.5em 0.5em;
  background: #0a6b94;
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
  margin-left: -0.75em;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
    transition: all 0.5s ease-in-out;
  }

  & ${Button} {
    margin: 0.5em 0.5em;
  }

  ${props =>
    props.inverted &&
    css`
      background: #eb8018;

      &:after {
        border-bottom-color: #eb8018;
      }
    `};

  ${props =>
    props.showMenu &&
    css`
      margin-top: -16.5em;

      &:after {
        top: 100%;
      }

      &:after {
        border-bottom: 0;
        border-top-color: #eb8018;
      }
    `};
`;

const LanguageButton = Button.extend`
  ${props =>
    props.inverted &&
    css`
      color: #000;
      border-color: #eb8018;
    `};
`;

const languages = ['en-us', 'nl'];

class LanguagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
    };

    this.popup = React.createRef();

    this.selectLanguage = this.selectLanguage.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setPopup = this.setPopup.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setPopup(ref) {
    this.popup = ref;
  }

  handleClickOutside(event) {
    if (this.popup && !this.popup.contains(event.target)) {
      this.setState({ showPopup: false });
    }
  }

  selectLanguage(i18n, language) {
    i18n.changeLanguage(language);
    this.setState({ showPopup: false });
  }

  renderLanguages(i18n) {
    return languages.map(language => (
      <Button key={language} border onClick={() => this.selectLanguage(i18n, language)}>
        {language.indexOf('-') > -1 ? language.substring(0, language.indexOf('-')) : language}
      </Button>
    ));
  }

  render() {
    const { showPopup } = this.state;
    const { inverted, showMenu } = this.props;
    return (
      <I18n>
        {(t, { i18n }) => (
          <div ref={this.setPopup}>
            <LanguageButton
              inverted={inverted}
              border
              onClick={() => this.setState({ showPopup: !showPopup })}
            >
              {i18n.language.indexOf('-') > -1
                ? i18n.language.substring(0, i18n.language.indexOf('-'))
                : i18n.language}
            </LanguageButton>
            <Popup inverted={inverted} show={showPopup} showMenu={showMenu}>
              {this.renderLanguages(i18n)}
            </Popup>
          </div>
        )}
      </I18n>
    );
  }
}

export default LanguagePicker;
