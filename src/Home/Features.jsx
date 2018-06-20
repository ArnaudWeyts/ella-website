import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

import { Container, Title } from './styles';

import graphics from '../img/features';

const InnerContainer = styled.ul`
  list-style: none;
  display: flex;
  width: 80%;
  padding-left: 0;
  justify-content: space-evenly;

  li {
    margin: 0 2em;
    text-align: center;
    max-width: 10em;
    min-width: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 80%;
    }
  }
`;

const Features = () => (
  <Container style={{ background: `url(${graphics.barsExtended}), #0d8ec5` }}>
    <Title style={{ color: '#fff' }} noUnderline>
      Features
    </Title>
    <InnerContainer>
      <li>
        <img src={graphics.code} alt="Code icon" />
        <h3 style={{ color: '#fff' }}>
          <Trans i18nKey="features.customizable">Customizable</Trans>
        </h3>
      </li>
      <li>
        <img src={graphics.screenMini} alt="Screen icon" />
        <h3 style={{ color: '#fff' }}>
          <Trans i18nKey="features.anyDevice">Any device</Trans>
        </h3>
      </li>
      <li>
        <img src={graphics.analytics} alt="Analytics icon" />
        <h3 style={{ color: '#fff' }}>
          <Trans i18nKey="features.analytics">Analytics</Trans>
        </h3>
      </li>
      <li>
        <img src={graphics.twentyFourSeven} alt="24/7 icon" />
        <h3 style={{ color: '#fff' }}>
          <Trans i18nKey="features.available247">Available 24/7</Trans>
        </h3>
      </li>
      <li>
        <img src={graphics.mic} alt="Mic icon" />
        <h3 style={{ color: '#fff' }}>
          <Trans i18nKey="features.voice">Voice</Trans>
        </h3>
      </li>
    </InnerContainer>
  </Container>
);

export default Features;
