import React from 'react';
import styled from 'styled-components';

// import whiteCloud from '../img/white-cloud.svg';

import BeforeEllaGraphic from './Graphics/BeforeEllaGraphic';
import AfterEllaGraphic from './Graphics/AfterEllaGraphic';

import { Container, Intro, Title, Paragraph } from './styles';

const TitleForward = Title.extend`
  z-index: 2;
`;

/* const Cloud = styled.div`
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
`; */

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 20em;
  margin-top: 1.25em;
`;

function MakingKAccessible({ id }) {
  return (
    <React.Fragment>
      <Container small id={id}>
        <Intro>
          <TitleForward>Making knowledge accessible</TitleForward>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ea maxime, quisquam
            officia architecto accusamus! Dolores, iusto vero! Natus accusantium quam commodi maxime
            incidunt perferendis perspiciatis consequuntur qui at odio?
          </Paragraph>
        </Intro>
        <ImageContainer>
          <BeforeEllaGraphic />
          <AfterEllaGraphic />
        </ImageContainer>
      </Container>
    </React.Fragment>
  );
}

export default MakingKAccessible;
