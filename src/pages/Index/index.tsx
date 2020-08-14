import React from 'react';

import { Container, WelcomeContainer, SkillsContainer } from './styles';

import DevImage from '../../assets/DevImage.png';
import PcImage from '../../assets/PcImage.png';

 function Index () {
   return (
     <>
      <h1>Header</h1>
        <Container>
              <WelcomeContainer>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sapien tincidunt, nec commodo lacus vulputate. </p>  

                <img src={DevImage} alt="Bem-vindo"/>
              </WelcomeContainer>

              <SkillsContainer>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sapien tincidunt, nec commodo lacus vulputate. </p>  

                <img src={PcImage} alt="Bem-vindo"/>
              </SkillsContainer>
        </Container>
      <h1>Footer</h1>
    </>
   );
 }

 export default Index;