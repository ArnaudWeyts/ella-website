import React from 'react';
import styled, { css } from 'styled-components';

import graphics from '../img/whyChooseElla';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  max-width: 56.25em;
`;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const Paragraph = styled.p`
  max-width: 56.25em;
`;

const Segment = styled.div`
  height: 18.75em;
  display: flex;
  align-items: center;
`;

const SegmentTitle = styled.h4`
  font-size: 20px;
  text-align: center;
`;

const SegmentGraphic = styled.div`
  width: 29%;
  margin: 0 2%;
`;
const SegmentDescription = styled.div`
  width: 57%;
  margin-right: 9%;

  ${props =>
    props.left &&
    css`
      margin-right: 0;
      margin-left: 9%;
    `};
`;

const Graphic = styled.img`
  width: 100%;
`;

const WhyChooseElla = () => (
  <Container>
    <Title>Why choose Ella?</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem totam maiores
      tenetur, vel asperiores possimus exercitationem reiciendis. Earum molestias fugit iure
      sapiente ut necessitatibus voluptas modi dolores quis iusto!
    </Paragraph>
    <Segment>
      <SegmentGraphic>
        <SegmentTitle>Reduce Training Costs and Time</SegmentTitle>
        <Graphic src={graphics.reduceTrainingCosts} />
      </SegmentGraphic>
      <SegmentDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima illum magni, autem
        facere quia veritatis, alias at ad eligendi mollitia iste quo. Assumenda perspiciatis odit
        fugit! Aut, adipisci inventore.
      </SegmentDescription>
    </Segment>
    <Segment>
      <SegmentDescription left>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima illum magni, autem
        facere quia veritatis, alias at ad eligendi mollitia iste quo. Assumenda perspiciatis odit
        fugit! Aut, adipisci inventore.
      </SegmentDescription>
      <SegmentGraphic>
        <SegmentTitle>Capture Valuable Knowledge</SegmentTitle>
        <Graphic src={graphics.captureValuableKnowledge} />
      </SegmentGraphic>
    </Segment>
    <Segment>
      <SegmentGraphic>
        <SegmentTitle>Improve access &amp; knowledge retention</SegmentTitle>
        <Graphic src={graphics.impAccKnowRet} />
      </SegmentGraphic>
      <SegmentDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima illum magni, autem
        facere quia veritatis, alias at ad eligendi mollitia iste quo. Assumenda perspiciatis odit
        fugit! Aut, adipisci inventore.
      </SegmentDescription>
    </Segment>
  </Container>
);

export default WhyChooseElla;
