import React from 'react';
import styled from 'styled-components';

import graphics from '../img/howItWorks';

import { Container, Intro, Title, SubTitle, Paragraph, Triangle } from './styles';

const InnerContainer = styled.div`
  max-width: 70em;
  margin: 0 2em;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
  display: flex;
  height: 25em;
  width: 100%;
  justify-content: center;
  margin: 2em 0;
`;

const ChatGraphics = styled.div`
  width: 33%;
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const VideoBackground = styled.div`
  width: 66%;
  background: url(${graphics.ipad});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3em;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Segment = styled.div`
  margin: 1em 3em;
  text-align: center;
  min-width: 5em;

  & img {
    max-width: 20em;
    margin: 3em 0;
  }
`;

const HowItWorks = () => (
  <Container>
    <Triangle color="#0d8ec5" rightTop />
    <Triangle color="#71c0db" leftBottom />
    <InnerContainer>
      <Intro>
        <Title>How it works</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia magni vitae
          maiores inventore explicabo dolore dolorum, optio impedit eum totam corporis tempore
          provident, neque adipisci quisquam animi esse repellat!
        </Paragraph>
      </Intro>
      <VideoContainer>
        <ChatGraphics background={graphics.chatsLeft} />
        <VideoBackground />
        <ChatGraphics background={graphics.chatsRight} />
      </VideoContainer>
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
    </InnerContainer>
  </Container>
);

export default HowItWorks;
