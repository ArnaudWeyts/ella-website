import React, { Component } from 'react';

class Webchat extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showChat: false
    };

    this.toggleChat = this.toggleChat.bind(this);
  }

  toggleChat() {
    this.setState({
      showChat: !this.state.showChat
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="Webchat Webchat--opened"
          style={{ display: this.state.showChat ? 'block' : 'none' }}
        >
          <iframe
            className="Webchat__iframe"
            title="webchat"
            src="https://webchat.botframework.com/embed/project-siba-faqbotservice?s=mO_IJV-qtHA.cwA.55M.1fgxugry7WA18aX_h7X4Pv1FDJj-TL3j4Y9LVA8350Y"
          />
          <button className="Webchat__closebutton" onClick={this.toggleChat}>
            Close
          </button>
        </div>
        <div
          className="Webchat Webchat--closed"
          style={{ display: !this.state.showChat ? 'block' : 'none' }}
        >
          <button onClick={this.toggleChat}>Open chat</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Webchat;
