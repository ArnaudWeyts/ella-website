import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const Paragraph = styled.p`
  max-width: 56.25em;
`;

const WhyChooseElla = () => (
  <Container>
    <Title>Why choose Ella?</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem totam maiores
      tenetur, vel asperiores possimus exercitationem reiciendis. Earum molestias fugit iure
      sapiente ut necessitatibus voluptas modi dolores quis iusto!
    </Paragraph>
  </Container>
);

export default WhyChooseElla;
