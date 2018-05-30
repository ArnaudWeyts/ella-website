import React, { Component } from 'react';
import styled from 'styled-components';

import woman from './img/woman.svg';
import close from './img/close.svg';

const Container = styled.div`
  position: fixed;
  bottom: 1.25em;
  right: 1.25em;
`;

const WebchatLook = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  border: solid 1px #000;
  width: 50vw;
  height: 50vh;
  max-width: 18.75em;
  max-height: 37.5em;
  background: #fff;
`;

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const OpenButton = styled.button`
  cursor: pointer;
  height: 5em;
  width: 5em;
  border-radius: 50%;
  border: 1px solid #eb8018;
  background: ${() => `#fff url(${woman})`};
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
    };

    this.toggleChat = this.toggleChat.bind(this);
  }

  toggleChat() {
    this.setState({
      showChat: !this.state.showChat,
    });
  }

  render() {
    return (
      <Container>
        <WebchatLook active={this.state.showChat}>
          <Iframe
            title="webchat"
            src="https://webchat.botframework.com/embed/project-siba-faqbotservice?s=mO_IJV-qtHA.cwA.55M.1fgxugry7WA18aX_h7X4Pv1FDJj-TL3j4Y9LVA8350Y"
          />
          <CloseButton src={close} onClick={this.toggleChat} />
        </WebchatLook>
        <WebchatLook active={!this.state.showChat}>
          <Badge>1</Badge>
          <OpenButton onClick={this.toggleChat} />
        </WebchatLook>
      </Container>
    );
  }
}

export default WebchatContainer;
