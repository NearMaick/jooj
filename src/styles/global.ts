import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background-primary: #221f3b;
    --color-background-secondary: #ebebeb;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }  

  body {
    height: 1700px;
    background: linear-gradient(
      var(--color-background-primary) 30%, 
      var(--color-background-secondary) 30%, 
      var(--color-background-secondary) 70%,
      var(--color-background-primary) 70%
    );
  }

  body, input, button, textarea {
   font: 500 1.6rem Poppins;
  }
`;