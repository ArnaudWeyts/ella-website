import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Trans } from 'react-i18next';

import { Container, Intro, Title, SubTitle, Paragraph, Button } from './styles';

import graphics from '../img/whoCanBFromElla';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em auto;
  max-width: 70em;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
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

  @media (max-width: 900px) {
    width: 40%;
    margin: 1em 0;
  }

  @media (max-width: 750px) {
    width: 100%;
    margin: 1em 0;
  }

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
`;

const WhoCanBenefitFromElla = ({ id }) => (
  <Container style={{ margin: '0 2em' }} id={id}>
    <Intro>
      <Title>
        <Trans i18nKey="whoCanBenefit.title">Who can benefit From Ella?</Trans>
      </Title>
      <Paragraph>
        <Trans i18nKey="whoCanBenefit.text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem totam maiores
          tenetur, vel asperiores possimus exercitationem reiciendis.
        </Trans>
      </Paragraph>
    </Intro>
    <Content>
      <Segment backgroundColor="#e2f1f8" available>
        <Graphic src={graphics.personRetail} />
        <SubTitle noUnderline>
          <Trans i18nKey="whoCanBenefit.retail.title">Retail</Trans>
        </SubTitle>
        <SegmentParagraph>
          <Trans i18nKey="whoCanBenefit.retail.text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
            nesciunt in. Velit mollitia rem impedit, at.
          </Trans>
        </SegmentParagraph>
        <Link to={`${process.env.PUBLIC_URL}/demo`}>
          <DemoButton>
            <Trans i18nKey="whoCanBenefit.retail.demo">Demo</Trans>
          </DemoButton>
        </Link>
      </Segment>
      <Segment backgroundColor="#fcefe3">
        <Graphic src={graphics.personProduction} />
        <SubTitle noUnderline>
          <Trans i18nKey="whoCanBenefit.production.title">Production</Trans>
        </SubTitle>
        <SegmentParagraph>
          <Trans i18nKey="whoCanBenefit.production.text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
            nesciunt in. Velit mollitia rem impedit, at.
          </Trans>
        </SegmentParagraph>
        <p>
          <Trans i18nKey="whoCanBenefit.production.comingSoon">Coming soon</Trans>
        </p>
      </Segment>
      <Segment backgroundColor="#f9e5e5">
        <Graphic src={graphics.personServices} />
        <SubTitle noUnderline>
          <Trans i18nKey="whoCanBenefit.services.title">Services</Trans>
        </SubTitle>
        <SegmentParagraph>
          <Trans i18nKey="whoCanBenefit.services.text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
            nesciunt in. Velit mollitia rem impedit, at.
          </Trans>
        </SegmentParagraph>
        <p>
          <Trans i18nKey="whoCanBenefit.services.comingSoon">Coming soon</Trans>
        </p>
      </Segment>
      <Segment backgroundColor="#e7f2e8">
        <Graphic src={graphics.personTraining} />
        <SubTitle noUnderline>
          <Trans i18nKey="whoCanBenefit.training.title">Training</Trans>
        </SubTitle>
        <SegmentParagraph>
          <Trans i18nKey="whoCanBenefit.training.text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus odit
            nesciunt in. Velit mollitia rem impedit, at.
          </Trans>
        </SegmentParagraph>
        <p>
          <Trans i18nKey="whoCanBenefit.training.comingSoon">Coming soon</Trans>
        </p>
      </Segment>
    </Content>
  </Container>
);

export default WhoCanBenefitFromElla;
