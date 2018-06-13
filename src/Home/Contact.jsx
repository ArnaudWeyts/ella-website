import React from 'react';
import styled from 'styled-components';

import graphics from '../img/contact';

const Container = styled.div`
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40em;
`;

const Title = styled.h2`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const Info = styled.div`
  text-align: center;
  display: block;
  max-width: 37.5em;
`;

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
    outline: none;

    &:focus {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;

const Input = styled.input`
  border: solid 1px #999999;
  border-radius: 15px;
  padding: 0.6em;
  font-family: Avenir;
  box-sizing: border-box;

  &::placeholder {
    font-style: italic;
  }
`;

const Textarea = Input.withComponent('textarea');

const SubmitButton = styled.button`
  float: right;
  margin: 0;
  text-transform: uppercase;
  font-family: Avenir;
  color: #0a6b94;
  border: solid 1px #0a6b94;
  border-radius: 18px;
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

function Contact() {
  return (
    <Container>
      <Info>
        <Title>Contact & Support</Title>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius quia itaque porro, quod
          voluptatum pariatur.
        </p>
      </Info>
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
