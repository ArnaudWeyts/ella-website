import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40em;
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
  margin 0 1%;
  width: 63%;
  display: inline-block;
  & input,
  textarea {
    width: 100%;
  }
`;

const Input = styled.input`
  border: solid 1px lightgrey;
  border-radius: 8px;
  padding: 0.4em;
  font-family: Avenir Book;
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
  font-family: Avenir Book;
  color: #147ab8;
  border: solid 1px #147ab8;
  border-radius: 5px;
  background: #fff;
  width: 8em;
`;

const List = styled.ul`
  margin: 0 1%;
  list-style: none;
  padding: 0;
  width: 33%;
  display: inline-block;
`;

function Contact() {
  return (
    <Container>
      <Info>
        <h2>Contact & Support</h2>
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
          <li>Lorem ipsum dolor it</li>
          <li>Lorem ipsum dolor it</li>
          <li>Lorem ipsum dolor it</li>
        </List>
      </FormContainer>
    </Container>
  );
}

export default Contact;
