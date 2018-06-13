import React from 'react';
import styled, { css } from 'styled-components';

import graphics from '../img/whyChooseElla';

import { Container, Intro, Title, SubTitle, Paragraph } from './styles';

const ContainerSmall = Container.extend`
  max-width: 56.25em;
`;

const Segment = styled.div`
  height: 18.75em;
  display: flex;
  align-items: center;
`;

const SegmentTitle = SubTitle.extend`
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

const WhyChooseElla = () => (
  <ContainerSmall>
    <Intro>
      <Title>Why choose Ella?</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem totam maiores
        tenetur, vel asperiores possimus exercitationem reiciendis. Earum molestias fugit iure
        sapiente ut necessitatibus voluptas modi dolores quis iusto!
      </Paragraph>
    </Intro>
    <Segment>
      <SegmentGraphic>
        <SegmentTitle>Reduce Training Costs and Time</SegmentTitle>
        <img src={graphics.reduceTrainingCosts} alt="Reduce training costs and time graphic" />
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
        <img src={graphics.captureValuableKnowledge} alt="Capture valueable knowledge graphic" />
      </SegmentGraphic>
    </Segment>
    <Segment>
      <SegmentGraphic>
        <SegmentTitle>Improve access &amp; knowledge retention</SegmentTitle>
        <img src={graphics.impAccKnowRet} alt="Improve access and knowledge retention graphic" />
      </SegmentGraphic>
      <SegmentDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima illum magni, autem
        facere quia veritatis, alias at ad eligendi mollitia iste quo. Assumenda perspiciatis odit
        fugit! Aut, adipisci inventore.
      </SegmentDescription>
    </Segment>
  </ContainerSmall>
);

export default WhyChooseElla;
