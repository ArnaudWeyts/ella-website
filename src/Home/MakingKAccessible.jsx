import React from 'react';
import styled from 'styled-components';

import whiteCloud from '../img/white-cloud.svg';
import beforeElla from '../img/before-ella.svg';
import afterElla from '../img/after-ella.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  max-width: 37.5em;
`;

const Cloud = styled.div`
  width: 115vw;
  z-index: 1;
  height: 15em;
  background: url(${whiteCloud});
  background-position: center 7em;
  background-repeat: repeat-x;
  margin-top: -15em;
  margin-bottom: -2em;

  @media (max-width: 900px) {
    background-position-y: 9em;
  }

  @media (max-width: 600px) {
    background-position-y: 11em;
  }
`;

const Title = styled.h2`
  z-index: 2;
  text-transform: uppercase;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 20em;
`;

const Graphic = styled.img`
  flex-grow: 1;
`;

function MakingKAccessible() {
  return (
    <Container>
      <Cloud />
      <Title>Making knowledge accessible</Title>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ea maxime, quisquam officia
        architecto accusamus! Dolores, iusto vero! Natus accusantium quam commodi maxime incidunt
        perferendis perspiciatis consequuntur qui at odio?
      </p>
      <ImageContainer>
        <Graphic src={beforeElla} alt="man thinking" />
        <Graphic src={afterElla} alt="graphic of man with idea using Ella" />
      </ImageContainer>
    </Container>
  );
}

export default MakingKAccessible;
