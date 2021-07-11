import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  table {
    border-spacing: 0;
  }
  td {
    padding: 0;
  }
  img {
    border: 0;
  }
`;
