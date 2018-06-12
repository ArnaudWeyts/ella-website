import React from 'react';
import styled from 'styled-components';

import search from '../img/search.svg';
import kf from '../img/kf.svg';
import answer from '../img/answer.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const Title = styled.h2`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const Paragraph = styled.p`
  max-width: 37.5em;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3em;
`;

const Segment = styled.div`
  margin: 2em;
  text-align: center;
`;

const SegmentTitle = styled.h4`
  font-size: 33px;
`;

const ANewWay = () => (
  <Container>
    <Banner>
      <BannerTitle>A new way to store and access knowledge</BannerTitle>
    </Banner>
    <HowItWorks>
      <Title>How it works</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia magni vitae
        maiores inventore explicabo dolore dolorum, optio impedit eum totam corporis tempore
        provident, neque adipisci quisquam animi esse repellat!
      </Paragraph>
      <ImageContainer>
        <Segment>
          <img src={search} alt="search" />
          <SegmentTitle>Search</SegmentTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
            maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum iure
            inventore numquam, eos quas odio officia!
          </p>
        </Segment>
        <Segment>
          <img src={kf} alt="kf" />
          <SegmentTitle>KnowledgeFlow</SegmentTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi nemo assumenda
            maiores totam a voluptatum labore recusandae dolore, cumque alias corporis, nostrum iure
            inventore numquam, eos quas odio officia!
          </p>
        </Segment>
        <Segment>
          <img src={answer} alt="answer" />
          <SegmentTitle>Answer</SegmentTitle>
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
