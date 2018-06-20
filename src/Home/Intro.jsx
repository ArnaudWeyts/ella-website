import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Title, Paragraph, Button, Triangle } from './styles';

import phone from '../img/phone.svg';
import bars from '../img/bars.svg';

const Container = styled.div`
  height: 33em;
  padding-top: 7em;
  background: -moz-radial-gradient(
    50% 50%,
    circle farthest-corner,
    rgba(110, 187, 220, 1) 0%,
    rgba(13, 142, 197, 1) 100%
  );
  background: -webkit-radial-gradient(
      50% 50%,
      circle farthest-corner,
      rgba(110, 187, 220, 1) 0%,
      rgba(13, 142, 197, 1) 100%
    ),
    url(${bars});
  background: url(${bars}),
    -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 562.99, color-stop(0, rgba(110, 187, 220, 1)), color-stop(1, rgba(13, 142, 197, 1)));
  background: -o-radial-gradient(
    50% 50%,
    circle farthest-corner,
    rgba(110, 187, 220, 1) 0%,
    rgba(13, 142, 197, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 30% auto auto;
  background-position: left center center center;
  background: -ms-radial-gradient(
    50% 50%,
    circle farthest-corner,
    rgba(110, 187, 220, 1) 0%,
    rgba(13, 142, 197, 1) 100%
  );
  background: radial-gradient(
    50% 50%,
    circle farthest-corner,
    rgba(110, 187, 220, 1) 0%,
    rgba(13, 142, 197, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
`;

const InnerContainer = styled.div`
  max-width: 60em;
  margin: 0 auto;
  padding: 0 2em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Item = styled.div`
  height: 100%;
  width: ${props => `${props.width}%`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Intro = () => (
  <React.Fragment>
    <Container>
      <InnerContainer>
        <Item width={60}>
          <Title color="#fff" dropshadow noUnderline>
            A new way to store and access knowledge
          </Title>
          <Paragraph color="#fff" dropshadow>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor atque eveniet
            et, iure odio ratione distinctio quidem tempora. Ipsum perspiciatis veritatis nihil rem
            animi, quidem officiis deserunt vero ipsa.
          </Paragraph>
          <Link to={`${process.env.PUBLIC_URL}/demo`}>
            <Button border>Try demo bot</Button>
          </Link>
        </Item>
        <Item width={30}>
          <img src={phone} alt="Phone" />
        </Item>
      </InnerContainer>
    </Container>
    <Triangle left color="#71c0db" />
  </React.Fragment>
);

export default Intro;
