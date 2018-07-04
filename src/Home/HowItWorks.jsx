import React from 'react';
import { Trans } from 'react-i18next';
import styled from 'styled-components';

import graphics from '../img/howItWorks';
import video from '../vid/promo.mp4';

import { Container, Intro, Title, SubTitle, Paragraph, Triangle } from './styles';

const InnerContainer = styled.div`
  max-width: 70em;
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

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const ChatGraphics = styled.div`
  width: 33%;
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 800px) {
    width: 20em;
    height: 25em;
    margin: -5em 0;
    transform: rotate(90deg);
  }
`;

const VideoBackground = styled.div`
  width: 66%;
  background: url(${graphics.ipad});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &:after {
    padding-top: 70%;
    display: block;
    content: '';
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 20em;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  padding: 4.7% 8.6% 4.6% 8.3%;
  box-sizing: border-box;
  background-clip: content-box;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3em;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Segment = styled.div`
  margin: 1em 3em;
  text-align: center;
  min-width: 5em;
  width: 30%;

  & img {
    max-width: 20em;
    margin: 3em 0;
  }

  @media (max-width: 800px) {
    width: auto;
  }
`;

const HowItWorks = () => (
  <Container>
    <Triangle color="#0d8ec5" rightTop />
    <Triangle color="#71c0db" leftBottom />
    <InnerContainer>
      <Intro>
        <Title>
          <Trans i18nKey="howItWorks.title">How it works</Trans>
        </Title>
        <Paragraph>
          <Trans i18nKey="howItWorks.text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia magni vitae
            maiores inventore explicabo dolore dolorum, optio impedit eum totam corporis tempore
            provident, neque adipisci quisquam animi esse repellat!
          </Trans>
        </Paragraph>
      </Intro>
      <VideoContainer>
        <ChatGraphics background={graphics.chatsLeft} />
        <VideoBackground>
          <Video src={video} controls />
        </VideoBackground>
        <ChatGraphics background={graphics.chatsRight} />
      </VideoContainer>
      <ImageContainer>
        <Segment>
          <img src={graphics.search} alt="search" />
          <SubTitle>
            <Trans i18nKey="howItWorks.searchTitle">Search</Trans>
          </SubTitle>
          <p>
            <Trans i18nKey="howItWorks.searchText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
              maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum
              iure inventore numquam, eos quas odio officia!
            </Trans>
          </p>
        </Segment>
        <Segment>
          <img src={graphics.kf} alt="kf" />
          <SubTitle>KnowledgeFlow</SubTitle>
          <p>
            <Trans i18nKey="howItWorks.kfText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
              maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum
              iure inventore numquam, eos quas odio officia!
            </Trans>
          </p>
        </Segment>
        <Segment>
          <img src={graphics.answer} alt="answer" />
          <SubTitle>
            <Trans i18nKey="howItWorks.answerTitle">Answer</Trans>
          </SubTitle>
          <p>
            <Trans i18nKey="howItWorks.answerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
              maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum
              iure inventore numquam, eos quas odio officia!
            </Trans>
          </p>
        </Segment>
      </ImageContainer>
    </InnerContainer>
  </Container>
);

export default HowItWorks;
