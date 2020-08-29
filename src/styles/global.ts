import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background-primary: ${props => props.theme.colors.primary};
    --color-background-secondary: ${props => props.theme.colors.secondary};
    --color-background-tertiary: ${props => props.theme.colors.tertiary};
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
    height: 2240px;
    background: linear-gradient(
      var(--color-background-primary) 20%,
      var(--color-background-secondary) 20%,
      var(--color-background-secondary) 70%,
      var(--color-background-primary) 70%
    );
  }

  body, input, button, textarea {
   font: 500 1.6rem Poppins;
  }
`;
