import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import graphics from '../img/whoCanBFromElla';

const Container = styled.div`
  margin: 0 auto;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
  max-width: 56.25em;
`;

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

const Graphic = styled.img``;

const SegmentParagraph = styled.p`
  flex-grow: 1;
`;

const Button = styled.button`
  background: #0d8ec5;
  cursor: ${props => (props.disabled ? 'initial' : 'pointer')};
  color: #000;
  height: 3em;
  width: 8em;
  text-transform: uppercase;
  font-family: Avenir;
  border-radius: 5px;
  border: none;
`;

const WhoCanBenefitFromElla = () => (
  <Container>
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
        <h4>Retail</h4>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <Link to={`${process.env.PUBLIC_URL}/demo`}>
          <Button>Demo</Button>
        </Link>
      </Segment>
      <Segment backgroundColor="#fcefe3">
        <Graphic src={graphics.personProduction} />
        <h4>Production</h4>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <p>Coming soon</p>
      </Segment>
      <Segment backgroundColor="#f9e5e5">
        <Graphic src={graphics.personServices} />
        <h4>Services</h4>
        <SegmentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
          nesciunt in. Velit mollitia rem impedit, at.
        </SegmentParagraph>
        <p>Coming soon</p>
      </Segment>
      <Segment backgroundColor="#e7f2e8">
        <Graphic src={graphics.personTraining} />
        <h4>Training</h4>
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
