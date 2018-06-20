import React from 'react';
import { Trans } from 'react-i18next';
import styled from 'styled-components';

import BeforeEllaGraphic from './Graphics/BeforeEllaGraphic';
import AfterEllaGraphic from './Graphics/AfterEllaGraphic';

import { Container, Intro, Title, Paragraph } from './styles';

const TitleForward = Title.extend`
  z-index: 2;
`;

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
          <TitleForward>
            <Trans i18nKey="makingKAccessible.title">Making knowledge accessible</Trans>
          </TitleForward>
          <Paragraph>
            <Trans i18nKey="makingKAccessible.text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ea maxime, quisquam
              officia architecto accusamus! Dolores, iusto vero! Natus accusantium quam commodi
              maxime incidunt perferendis perspiciatis consequuntur qui at odio?
            </Trans>
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
