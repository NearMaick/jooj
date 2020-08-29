import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Routes from './Routes';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
