import React from 'react';
import styled from 'styled-components';

import { Title, Paragraph, Button } from './styles';

const Container = styled.div`
  margin-top: 7em;
  height: 30em;
  padding: 2em;
  background: #a1bdc9;
`;

const Left = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Intro = () => (
  <Container>
    <Left>
      <Title color="#fff">A new way to store and access knowledge</Title>
      <Paragraph color="#fff">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor atque eveniet et,
        iure odio ratione distinctio quidem tempora. Ipsum perspiciatis veritatis nihil rem animi,
        quidem officiis deserunt vero ipsa.
      </Paragraph>
      <Button>Try demo bot</Button>
    </Left>
  </Container>
);

export default Intro;
