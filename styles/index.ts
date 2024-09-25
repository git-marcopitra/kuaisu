import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Nice Sugar';
    src: url('/fonts/nice-sugar.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }
  @font-face {
    font-family: 'Peach Cake';
    src: url('/fonts/peach-cake.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Peach Cake';
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 0.5rem;
    background: transparent;
    transition: all 300ms ease-in-out;
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #fff1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
    border: 5px solid transparent;
  }
`;
