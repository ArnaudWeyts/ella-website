import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

import woman from '../img/woman.svg';
import close from '../img/close.svg';

const Container = styled.div`
  position: fixed;
  bottom: 1.25em;
  right: 1.25em;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
    height: 50vh;
  }
  100% {
    opacity: 1;
    height: 50vh;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
    height: 50vh;
  }
  99% {
    opacity: 0;
    height: 50vh;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`;

const Iframe = styled.iframe`
  display: block;
  height: 0;
  opacity: 0;
  border: solid 1px #0078d7;
  border-radius: 5px;
  max-width: 18.75em;
  max-height: 37.5em;
  background: #fff;
  margin-bottom: 5em;

  ${({ active }) =>
    active &&
    css`
      width: 50vw;
      height: 50vh;
      opacity: 1;
      animation: ${FadeIn} 0.5s ease-in-out;
    `};

  ${({ active, allowFadeout }) =>
    !active &&
    allowFadeout &&
    css`
      animation: ${FadeOut} 0.5s ease-in-out;
    `};
`;

const ButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const OpenCloseButton = styled.button`
  cursor: pointer;
  float: right;
  height: 5em;
  width: 5em;
  border-radius: 50%;
  border: 1px solid #eb8018;
  background: ${({ open }) => `#fff url(${open ? close : woman})`};
  background-position: center;
  background-size: cover;
`;

const Badge = styled.div`
  height: 1.25em;
  width: 1.25em;
  top: -0.3em;
  left: -0.3em;
  border-radius: 50%;
  background: #eb8018;
  text-align: center;
  line-height: 1.25em;
  color: #fff;
  position: absolute;
`;

class WebchatContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showChat: false,
      allowFadeout: false,
    };

    this.toggleChat = this.toggleChat.bind(this);
  }

  toggleChat() {
    const { showChat, allowFadeout } = this.state;
    if (!showChat && !allowFadeout) {
      this.setState({ allowFadeout: true });
    }
    this.setState({
      showChat: !showChat,
    });
  }

  render() {
    const { showChat, allowFadeout } = this.state;
    return (
      <Container>
        <Iframe
          active={showChat}
          allowFadeout={allowFadeout}
          title="webchat"
          src="https://webchat.botframework.com/embed/project-siba-faqbotservice?s=mO_IJV-qtHA.cwA.55M.1fgxugry7WA18aX_h7X4Pv1FDJj-TL3j4Y9LVA8350Y"
        />
        <ButtonContainer onClick={this.toggleChat}>
          {!showChat && <Badge>1</Badge>}
          <OpenCloseButton open={showChat} />
        </ButtonContainer>
      </Container>
    );
  }
}

export default WebchatContainer;
