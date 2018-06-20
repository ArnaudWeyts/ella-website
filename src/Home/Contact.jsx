import React from 'react';
import styled from 'styled-components';
import { Trans, I18n } from 'react-i18next';

import graphics from '../img/contact';

import { Container, Intro, Title, Paragraph, Input, Button, Triangle } from './styles';

const FormContainer = styled.div`
  display: flex;
`;

const Form = styled.form`
  margin: 0 1%;
  width: 63%;
  display: inline-block;

  & input,
  textarea {
    width: 100%;
  }

  & > * {
    margin: 0.75em 0;
  }
`;

const Textarea = Input.withComponent('textarea').extend`
  resize: vertical;
`;

const SubmitButton = Button.extend`
  float: right;
  color: #0a6b94;
  border: solid 1px #0a6b94;
  background: #fff;
  width: 8em;
`;

const List = styled.ul`
  margin: 0 3%;
  list-style: none;
  padding: 0;
  width: 33%;
  display: inline-block;

  & li {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin: 2em 0;
    }
  }
`;

const ListGraphic = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 1em;
`;

function Contact({ id }) {
  return (
    <Container style={{ padding: '0 2em' }} small id={id}>
      <Triangle color="#0d8ec5" leftTop />
      <Triangle color="#71c0db" rightBottom />
      <Intro>
        <Title>
          <Trans i18nKey="contact.title">Contact & Support</Trans>
        </Title>
        <Paragraph>
          <Trans i18nKey="contact.text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius quia itaque porro,
            quod voluptatum pariatur.
          </Trans>
        </Paragraph>
      </Intro>
      <FormContainer>
        <Form>
          <I18n>
            {t => (
              <React.Fragment>
                <Input type="text" placeholder={t('contact.name')} />
                <Input type="text" placeholder={t('contact.company')} />
                <Input type="text" placeholder={t('contact.email')} />
                <Textarea name="text" cols="30" rows="10" placeholder={t('contact.message')} />
              </React.Fragment>
            )}
          </I18n>
          <SubmitButton type="submit">
            <Trans i18nKey="contact.send">Send</Trans>
          </SubmitButton>
        </Form>
        <List>
          <li>
            <ListGraphic src={graphics.location} alt="" />Lorem ipsum
          </li>
          <li>
            <ListGraphic src={graphics.email} alt="" />Lorem ipsum
          </li>
          <li>
            <ListGraphic src={graphics.phone} alt="" />Lorem ipsum
          </li>
        </List>
      </FormContainer>
    </Container>
  );
}

export default Contact;
