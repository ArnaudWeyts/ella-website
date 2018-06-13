import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Container, Intro, Title, SubTitle, Paragraph, Button } from './styles';

import graphics from '../img/whoCanBFromElla';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  margin: 2em auto;
  max-width: 70em;
`;

const Segment = styled.div`
  width: 15%;
  padding: 2em;
  background: ${props => props.backgroundColor};
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    !props.available &&
    css`
      opacity: 0.3;
    `};
`;

const Graphic = styled.img`
  height: 9em;
`;

const SegmentParagraph = styled.p`
  flex-grow: 1;
`;

const DemoButton = Button.extend`
  background: #0d8ec5;
  color: #000;
  height: 3em;
  width: 8em;
`;

const WhoCanBenefitFromElla = ({ id }) => (
  <Container id={id}>
    <Intro>
      <Title>Who can benefit From Ella?</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem totam maiores
        tenetur, vel asperiores possimus exercitationem reiciendis.
      </Paragraph>
    </Intro>
    <Content>
      <Segment backgroundColor="#e2f1f8" available>
        <Graphic src={graphics.personRetail} />
        <SubTitle>Retail</SubTitle>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <Link to={`${process.env.PUBLIC_URL}/demo`}>
          <DemoButton>Demo</DemoButton>
        </Link>
      </Segment>
      <Segment backgroundColor="#fcefe3">
        <Graphic src={graphics.personProduction} />
        <SubTitle>Production</SubTitle>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <p>Coming soon</p>
      </Segment>
      <Segment backgroundColor="#f9e5e5">
        <Graphic src={graphics.personServices} />
        <SubTitle>Services</SubTitle>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <p>Coming soon</p>
      </Segment>
      <Segment backgroundColor="#e7f2e8">
        <Graphic src={graphics.personTraining} />
        <SubTitle>Training</SubTitle>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <p>Coming soon</p>
      </Segment>
    </Content>
  </Container>
);

export default WhoCanBenefitFromElla;
