import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
  font: 500 1.6rem Poppins;
  }
`;