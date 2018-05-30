import React, { Component } from 'react';
import styled from 'styled-components';

const Webchat = styled.div`
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

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
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
      <React.Fragment>
        <Webchat>
          <WebchatLook active={this.state.showChat}>
            <Iframe
              title="webchat"
              src="https://webchat.botframework.com/embed/project-siba-faqbotservice?s=mO_IJV-qtHA.cwA.55M.1fgxugry7WA18aX_h7X4Pv1FDJj-TL3j4Y9LVA8350Y"
            />
            <CloseButton onClick={this.toggleChat}>Close</CloseButton>
          </WebchatLook>
          <WebchatLook active={!this.state.showChat}>
            <button onClick={this.toggleChat}>Open chat</button>
          </WebchatLook>
        </Webchat>
      </React.Fragment>
    );
  }
}

export default WebchatContainer;
