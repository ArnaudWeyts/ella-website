import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 35vw;
  height: 100vh;
  padding: 0.25em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Iframe = styled.iframe`
  width: 99%;
  height: 99%;
  box-sizing: border-box;
  border: solid 1px #0078d7;
  border-radius: 5px;
`;

const Ella = () => (
  <Container>
    <Iframe src="https://webchat.botframework.com/embed/project-siba-chatbot?s=nO3ucarABhU.cwA.c4Q.CG8IfORCPfSBiimstIH7G22tjxHY1hZ7AUNSWwHKCT8" />
  </Container>
);

export default Ella;
