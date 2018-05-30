import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
`;

const Info = styled.div`
  width: 33%;
`;

const Form = styled.form`
  width: 33%;

  & input,
  textarea {
    width: 100%;
  }
`;

function Contact() {
  return (
    <Container>
      <Info>
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius quia itaque porro, quod
          voluptatum pariatur soluta velit natus quaerat illum sequi mollitia maxime ad consequatur
          quam neque facere earum?
        </p>
      </Info>
      <Form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <textarea name="text" cols="30" rows="10" />
      </Form>
    </Container>
  );
}

export default Contact;
