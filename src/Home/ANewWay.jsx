import React from 'react';
import styled from 'styled-components';

import graphics from '../img/aNewWay';

import { Container, Intro, Title, SubTitle, Paragraph } from './styles';

const Banner = styled.div`
  width: 100vw;
  height: 10em;
  line-height: 10em;
  text-align: center;
  background: #0d8ec5;
`;

const BannerTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  color: #fff;
  font-size: 48px;
  font-style: italic;
`;

const HowItWorks = styled.div`
  margin: 1.25em 3em;
  max-width: 70em;
  background: #f2f2f2;
  border-radius: 2px;
  padding: 1.25em 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3em;
`;

const Segment = styled.div`
  margin: 1em 3em;
  text-align: center;
`;

const ANewWay = () => (
  <Container>
    <Banner>
      <BannerTitle>A new way to store and access knowledge</BannerTitle>
    </Banner>
    <HowItWorks>
      <Intro>
        <Title>How it works</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia magni vitae
          maiores inventore explicabo dolore dolorum, optio impedit eum totam corporis tempore
          provident, neque adipisci quisquam animi esse repellat!
        </Paragraph>
      </Intro>
      <ImageContainer>
        <Segment>
          <img src={graphics.search} alt="search" />
          <SubTitle>Search</SubTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
            maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum iure
            inventore numquam, eos quas odio officia!
          </p>
        </Segment>
        <Segment>
          <img src={graphics.kf} alt="kf" />
          <SubTitle>KnowledgeFlow</SubTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
            maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum iure
            inventore numquam, eos quas odio officia!
          </p>
        </Segment>
        <Segment>
          <img src={graphics.answer} alt="answer" />
          <SubTitle>Answer</SubTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
            maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum iure
            inventore numquam, eos quas odio officia!
          </p>
        </Segment>
      </ImageContainer>
    </HowItWorks>
  </Container>
);

export default ANewWay;
