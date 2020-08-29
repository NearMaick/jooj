import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/Index';
import Skills from './pages/Skills';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Index} exact />
      <Route path="/skills" component={Skills} />
    </BrowserRouter>
  );
};

export default Routes;
