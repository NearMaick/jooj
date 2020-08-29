import React from 'react';

import {
  Container,
  Content,
  WelcomeContainer,
  SkillsContainer,
} from './styles';

import DevImage from '../../assets/DevImage.png';
import PcImage from '../../assets/PcImage.png';

import Footer from '../../components/Footer';
import MenuBurguer from '../../components/BurguerMenu';

const Index: React.FC = () => {
  return (
    <Container>
      <MenuBurguer />
      <Content>
        <WelcomeContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sapien
            tincidunt, nec commodo lacus vulputate.{' '}
          </p>

          <img src={DevImage} alt="Bem-vindo" />
        </WelcomeContainer>

        <SkillsContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sapien
            tincidunt, nec commodo lacus vulputate.{' '}
          </p>

          <img src={PcImage} alt="Bem-vindo" />
        </SkillsContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Index;
