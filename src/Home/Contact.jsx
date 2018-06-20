import React from 'react';
import styled from 'styled-components';

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
        <Title>Contact & Support</Title>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius quia itaque porro, quod
          voluptatum pariatur.
        </Paragraph>
      </Intro>
      <FormContainer>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Company Name" />
          <Input type="text" placeholder="Email" />
          <Textarea name="text" cols="30" rows="10" placeholder="Message" />
          <SubmitButton type="submit">Send</SubmitButton>
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
