import React from 'react';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg`
  width: 50%;

  & {
    .cls-1 {
      fill: #fde2d1;
    }

    .cls-2 {
      fill: #3d1c09;
    }

    .cls-3 {
      fill: #2e1507;
    }

    .cls-4 {
      fill: #f2f2f2;
    }

    .cls-5 {
      fill: #0d8ec5;
    }

    .cls-6 {
      fill: #f5a94e;
    }

    .cls-14,
    .cls-15,
    .cls-6,
    .cls-7 {
      stroke: #363f44;
    }

    .cls-14,
    .cls-15,
    .cls-17,
    .cls-6,
    .cls-7 {
      stroke-miterlimit: 10;
    }

    .cls-16,
    .cls-7 {
      fill: #fff;
    }

    .cls-8 {
      fill: #f1921c;
    }

    .cls-9 {
      fill: #e52a2c;
    }

    .cls-10,
    .cls-15 {
      fill: #258ec6;
    }

    .cls-11 {
      fill: #bb2e2d;
    }

    .cls-12 {
      fill: #19739f;
    }

    .cls-13 {
      fill: #e76421;
    }

    .cls-14,
    .cls-17 {
      fill: none;
    }

    .cls-17 {
      stroke: #f5a94e;
    }

    .cls-18 {
      fill: #fcf615;
    }

    .cls-19 {
      fill: #363f44;
    }
  }
`;

const Flicker = keyframes`
  0% {opacity:1}
  3% {opacity:0}
  6% {opacity:0}
  7% {opacity:1}
  10% {opacity:0}
  16% {opacity:1}
  25% {opacity:1}
  99% {opacity:1}
  100% {opacity:0}
`;

const LightBulb = styled.path`
  fill: #f7df1e;
  animation: ${Flicker} 2s infinite;
`;

const AfterEllaGraphic = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.09 344.34">
    <title>Asset 50</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="Person">
          <g>
            <path
              className="cls-1"
              d="M81.71,188.69c-5,13-3,27.47,4,39.42,4.61,7.8,11.23,15.53,19.33,15.53s15-8,19.77-15.87a45.44,45.44,0,0,0,5.41-32.49c-2.72-13.26-9.26-29.07-24.93-26.5C92.12,170.93,85.22,179.51,81.71,188.69Z"
            />
            <path
              className="cls-2"
              d="M79.8,212.51s-1.12-12.93,1.71-20a6.74,6.74,0,0,1,6.29-4.1h8.86a16.69,16.69,0,0,0,5.63-1l16.71-6A81.62,81.62,0,0,0,126.43,193c4.36,5.54,4.77,18,4.77,18s1-16.8,3.39-19.68l-3.39-9.84v-4.8L126.43,175l-2.4-4.08-6.48-7.2-.72,2.4s-14.88-10.32-30.47,1S79.8,212.51,79.8,212.51Z"
            />
            <path
              className="cls-1"
              d="M128.63,219.7l1.61-16.36s4.47-3.07,3.75,4.84S128.63,219.7,128.63,219.7Z"
            />
            <path
              className="cls-1"
              d="M81.78,219.7l-2.15-16.36s-4.47-3.07-3.75,4.84A16.15,16.15,0,0,0,81.78,219.7Z"
            />
            <polygon
              className="cls-3"
              points="100.24 201.17 100.24 198.65 86.84 198.65 84.67 202.43 87.5 201 100.24 201.17"
            />
            <path
              className="cls-4"
              d="M90.62,206.78s2.14-2.37,4.87-2.23a4.65,4.65,0,0,1,3.92,2.23,6,6,0,0,1-4.39,2A6.58,6.58,0,0,1,90.62,206.78Z"
            />
            <polygon
              className="cls-3"
              points="110.17 201.17 110.17 198.65 123.57 198.65 125.75 202.43 122.91 201 110.17 201.17"
            />
            <path
              className="cls-4"
              d="M119.79,206.78s-2.14-2.37-4.87-2.23a4.65,4.65,0,0,0-3.92,2.23,6,6,0,0,0,4.39,2A6.58,6.58,0,0,0,119.79,206.78Z"
            />
            <circle className="cls-5" cx="95.02" cy="206.68" r="2.17" />
            <circle className="cls-5" cx="115.4" cy="206.68" r="2.17" />
          </g>
          <rect
            className="cls-6"
            x="35.2"
            y="212.46"
            width="140"
            height="87.33"
            rx="14.76"
            ry="14.76"
          />
          <path
            className="cls-7"
            d="M83.53,316.13h43.33L121.2,265.8a10.89,10.89,0,0,0-10.82-9.67H100a10.89,10.89,0,0,0-10.82,9.67Z"
          />
        </g>
        <g id="Ella-icon">
          <path
            className="cls-8"
            d="M115.54,111.91l-3.68,1.54-6.28,2.6c-.84.35-1.72.62-2.53,1.06a5.65,5.65,0,0,1-1.72.81L91,122.16c-.35.15-.74.18-1.09.33-.39-.52-.23-1.15-.28-1.72-.09-1-.2-2-.26-3s-.19-2-.3-3a.72.72,0,0,1,.43-.85c2.81-1.49,5.59-3,8.38-4.55.42-.23.85-.43,1.28-.65a15.09,15.09,0,0,1,2.41.38l12.52,2.3,1.17.24A.33.33,0,0,1,115.54,111.91Z"
          />
          <path
            className="cls-9"
            d="M97.12,104c-.18-.77-.37-1.54-.54-2.31Q96,99,95.48,96.35c-.15-.74-.29-1.49-.45-2.28.69.09,1.34-.13,2-.1,1.78.07,3.56-.09,5.34-.13,1.1,0,2.21,0,3.31-.09s2.28,0,3.41-.11,2,0,3-.1c1.17-.13,2.35,0,3.52-.11.88-.09,1.74,0,2.64-.09-.06.25-.26.25-.4.32l-12,6a.74.74,0,0,0-.11.09c-.1.21-.31.26-.5.36l-7.4,3.7C97.62,104,97.4,104.13,97.12,104Z"
          />
          <path
            className="cls-10"
            d="M115.54,111.91l-.2-.13a32.46,32.46,0,0,1-3.91-1.54l-7.81-3.3a1,1,0,0,1-.56-.35l-2.31-1c0-.28.25-.26.41-.31,2.64-.84,5.29-1.65,7.94-2.45a5.18,5.18,0,0,1,1.45-.39l2.38,4.25q1.35,2.42,2.68,4.86C115.66,111.62,115.95,111.84,115.54,111.91Z"
          />
          <path
            className="cls-9"
            d="M107.52,118.15l3.27.68c2.05.43,4.1.84,6.15,1.28s4.29.95,6.43,1.41a11.71,11.71,0,0,1,2.2.56H125c-4.36.14-8.73,0-13.09.13-3.53.1-7.06,0-10.59.1-.95,0-1.89.09-2.84.07.1-.3.36-.22.56-.21a2.6,2.6,0,0,0,1.29-.32c2.3-1.13,4.55-2.37,6.86-3.49A1,1,0,0,0,107.52,118.15Z"
          />
          <path
            className="cls-11"
            d="M107.52,118.15c.12.21-.08.23-.18.28L100,122.17a1.57,1.57,0,0,1-.65.13c-.29,0-.59-.1-.86.08l-6.85,0a7.9,7.9,0,0,0-1.69.09c1-.52,2.12-.9,3.18-1.34l8.6-3.54c.44-.18.9-.34,1.35-.51C104.52,117.53,106,117.84,107.52,118.15Z"
          />
          <path
            className="cls-12"
            d="M110.55,102.4a16.75,16.75,0,0,1-2.68.91c-1.67.55-3.35,1-5,1.55a18.67,18.67,0,0,0-2.09.69c-1.21-.51-2.46-.95-3.62-1.57a.87.87,0,0,0,.53-.17l7.86-3.92.24-.09c.9.47,1.8.93,2.69,1.42C109.15,101.59,109.85,102,110.55,102.4Z"
          />
          <path
            className="cls-13"
            d="M103.06,106.58l4.87,2,5.75,2.45,1.66.72-3.25-.57-7.16-1.3-5.53-1a.27.27,0,0,1-.22-.12l3-1.65A4.6,4.6,0,0,0,103.06,106.58Z"
          />
        </g>
        <g>
          <line className="cls-14" x1="107.33" y1="84.02" x2="107.33" y2="60.11" />
          <line className="cls-14" x1="107.33" y1="154.71" x2="107.33" y2="130.8" />
          <line className="cls-14" x1="130.71" y1="107.41" x2="154.63" y2="107.41" />
          <line className="cls-14" x1="60.03" y1="107.41" x2="83.94" y2="107.41" />
        </g>
        <g id="Chat">
          <g id="Question">
            <polygon
              className="cls-14"
              points="89.55 19.08 89.55 31.87 93.95 31.87 91.66 36.53 98.1 31.87 113.55 31.87 113.55 19.08 89.55 19.08"
            />
            <path
              className="cls-10"
              d="M99,29.9a24.5,24.5,0,0,1-2.8-1,1.61,1.61,0,0,0-.49-.11,3.31,3.31,0,0,1-3.1-3.6,3.44,3.44,0,0,1,3.46-3.73A3.31,3.31,0,0,1,99.43,25a3.32,3.32,0,0,1-1.68,3.17v0c.55.16,1.16.28,1.72.4Zm-1.26-4.79c0-1.29-.61-2.37-1.71-2.37s-1.73,1.07-1.73,2.4.64,2.38,1.72,2.38S97.73,26.5,97.73,25.11Z"
            />
          </g>
          <g id="Answer">
            <polygon
              className="cls-15"
              points="125.57 14.15 125.57 26.74 121.24 26.74 123.49 31.32 117.16 26.74 101.95 26.74 101.95 14.15 125.57 14.15"
            />
            <path
              className="cls-16"
              d="M112.55,22.39,112,24.47h-1.89l2.47-8.08h2.4l2.5,8.08h-2l-.62-2.07Zm2-1.37-.5-1.71c-.14-.48-.29-1.08-.41-1.56h0c-.12.48-.24,1.09-.37,1.56L112.81,21Z"
            />
          </g>
        </g>
        <ellipse className="cls-4" cx="105.2" cy="338.68" rx="92.96" ry="5.66" />
        <image
          id="KF-icon"
          width="400"
          height="661"
          transform="translate(179.2 88.32) scale(0.06)"
          xlinkHref="data:image/png;base64,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"
        />
        <circle className="cls-17" cx="188.75" cy="107.15" r="24.84" />
        <g id="_Group_" data-name="&lt;Group&gt;">
          <g>
            <LightBulb
              id="lightbulb"
              className="cls-18"
              d="M24.29,109c.15.25.31.49.45.75.43.74.91.6,1.43.1a10.67,10.67,0,0,1,1-.72,11.83,11.83,0,0,0-.4,1.28c-.25,1.57-.51,3.15-.68,4.74,0,.24.39.54.59.81.2-.27.57-.54.58-.82a17.91,17.91,0,0,1,1.32-6.33c.32-.8,0-1.25-.86-1.09a14.61,14.61,0,0,0-2,.68,19.77,19.77,0,0,0-2.46-.69c-.79-.12-1.09.3-.76,1A16.56,16.56,0,0,1,23.75,115c0,.41,0,.92.59.9s.64-.52.61-1a19.79,19.79,0,0,0-.18-2.31c-.2-1.15-.48-2.3-.73-3.44Zm-2.13,7.82a9.08,9.08,0,0,0-2.63-5.53,9.09,9.09,0,0,1,.39-13.38A8.91,8.91,0,0,1,31.74,111.2a7.39,7.39,0,0,0-2.35,4.3.86.86,0,0,1-.79.85c-2.3.53-4.57,1.11-6.85,1.66l-.09-.35C21.83,117.37,22.2,117.06,22.16,116.8Z"
            />
            <path
              className="cls-19"
              d="M28.24,126.17c-.83.47-1.72.83-2.62,1.23a20.86,20.86,0,0,1-2.38-1c-.25-.13-.3-.61-.43-.94.33,0,.75-.19,1-.05a3.24,3.24,0,0,0,3.82-.16c.19-.14.59,0,.89,0C28.43,125.6,28.44,126.07,28.24,126.17Z"
            />
            <path
              className="cls-19"
              d="M24.74,109.73c-.14-.26-.3-.5-.45-.75l-.25.22c.25,1.14.53,2.29.73,3.44A19.79,19.79,0,0,1,25,115c0,.45,0,1-.61,1s-.57-.49-.59-.9a16.56,16.56,0,0,0-1.32-6.32c-.33-.71,0-1.13.76-1a19.77,19.77,0,0,1,2.46.69,14.61,14.61,0,0,1,2-.68c.86-.16,1.18.29.86,1.09a17.91,17.91,0,0,0-1.32,6.33c0,.28-.38.55-.58.82-.2-.27-.61-.57-.59-.81.17-1.59.43-3.17.68-4.74a11.83,11.83,0,0,1,.4-1.28,10.67,10.67,0,0,0-1,.72C25.65,110.33,25.17,110.47,24.74,109.73Z"
            />
            <path
              className="cls-19"
              d="M21.39,121q4.09-1.07,8.22-2c.24,0,.57.24.85.38-.19.25-.35.66-.59.72-2.7.72-5.41,1.38-8.12,2.06-.06,0-.12,0-.37.06-.12-.12-.48-.32-.49-.54A.88.88,0,0,1,21.39,121Z"
            />
            <path
              className="cls-19"
              d="M21.35,124c2.72-.74,5.44-1.44,8.18-2.09.26-.07.62.25.94.39-.2.26-.36.68-.61.74-2.68.72-5.38,1.38-8.08,2.06l-.4,0c-.1-.09-.46-.26-.49-.48A.82.82,0,0,1,21.35,124Z"
            />
            <path
              className="cls-19"
              d="M32.18,98.77a8.77,8.77,0,0,0-12.26-.88,9.09,9.09,0,0,0-.39,13.38,9.08,9.08,0,0,1,2.63,5.53c0,.26-.33.57-.5.86-.23-.23-.62-.45-.66-.72a9.1,9.1,0,0,0-2.45-5,9.69,9.69,0,0,1-3-6.69c0-4.87,2.67-8.86,6.66-10.14a10,10,0,0,1,11.47,3.48,10.24,10.24,0,0,1,.4,11.62,14.29,14.29,0,0,1-1.65,2,6.68,6.68,0,0,0-2,4,1.09,1.09,0,0,1-.95,1.08c-2.54.62-5.06,1.29-7.61,1.88-.34.08-1-.1-1.1-.31-.22-.62.36-.75.84-.87l.07,0c2.28-.55,4.55-1.13,6.85-1.66a.86.86,0,0,0,.79-.85,7.39,7.39,0,0,1,2.35-4.3A8.77,8.77,0,0,0,32.18,98.77Z"
            />
            <g id="Stripes">
              <path
                className="cls-19"
                d="M42.44,102.72c.27,0,.51.36.76.56-.25.21-.48.58-.73.59-1.42.06-2.84,0-4.26,0-.22,0-.43-.36-.64-.55.2-.21.39-.57.62-.59a20.34,20.34,0,0,1,2.21,0h0A15.41,15.41,0,0,1,42.44,102.72Z"
              />
              <path
                className="cls-19"
                d="M39.78,114.86c.24.22.26.68.37,1-.39,0-.89.07-1.16-.14-1.15-.88-2.24-1.83-3.32-2.8a1.31,1.31,0,0,1-.32-.83c0-.21.18-.43.27-.65l.27.19a4.43,4.43,0,0,1,.59.36C37.59,113,38.72,113.88,39.78,114.86Z"
              />
              <path
                className="cls-19"
                d="M37.69,93.9c-.92.81-1.83,1.62-2.8,2.35-.24.19-.71.06-1.08.08.11-.33.11-.75.33-1C35,94.5,36,93.69,37,92.9a1.12,1.12,0,0,1,.78-.19c.16,0,.29.3.48.51A4.94,4.94,0,0,1,37.69,93.9Z"
              />
              <path
                className="cls-19"
                d="M25.07,90.39a18.09,18.09,0,0,1,0-2c0-.25.33-.46.51-.69.22.2.61.4.62.62.06,1.32.06,2.66,0,4,0,.22-.44.43-.68.64-.16-.25-.43-.48-.46-.74C25,91.64,25.07,91,25.07,90.39Z"
              />
              <path
                className="cls-19"
                d="M16.2,96.4c-1-.81-2-1.65-3-2.54-.16-.16,0-.62-.05-.94.29,0,.67-.09.85,0,1,.79,1.94,1.64,2.89,2.49a1.84,1.84,0,0,1,.32.51A.62.62,0,0,1,16.2,96.4Z"
              />
              <path
                className="cls-19"
                d="M11,114.92c1.17-1,2.37-2.07,3.58-3.07a.64.64,0,0,1,.63,0,.81.81,0,0,1,.2.68,1.64,1.64,0,0,1-.52.69c-.91.8-1.84,1.58-2.78,2.36-.19.16-.43.28-.7.47-.21-.18-.46-.3-.52-.48A.71.71,0,0,1,11,114.92Z"
              />
              <path
                className="cls-19"
                d="M12.87,103.86a18.89,18.89,0,0,1-2.13,0h0a15.83,15.83,0,0,1-2,0c-.23,0-.43-.35-.64-.54.2-.21.39-.59.6-.6,1.39,0,2.78,0,4.17,0,.2,0,.39.36.59.55C13.3,103.48,13.1,103.84,12.87,103.86Z"
              />
            </g>
          </g>
          <circle className="cls-17" cx="25.34" cy="107.15" r="24.84" />
        </g>
        <circle className="cls-17" cx="107.56" cy="25.34" r="24.84" />
      </g>
    </g>
  </Svg>
);

export default AfterEllaGraphic;
