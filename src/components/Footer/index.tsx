import React from 'react';

import { Container } from './styles';

import TopImage from '../../assets/TopImage.png';

const Footer: React.FC = () => (
  <Container>
    <h1>Footer</h1>

    <img src={TopImage} alt="Voltar ao topo" />
  </Container>
);

export default Footer;
