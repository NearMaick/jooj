import React from 'react';

import { Container, WelcomeContainer } from './styles';

import DevImage from '../../assets/DevImage.png';

 function Index () {
   return (
     <Container>
        <WelcomeContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sapien tincidunt, nec commodo lacus vulputate. </p>  

          <img src={DevImage} alt="Bem-vindo"/>
        </WelcomeContainer>           
     </Container>
   );
 }

 export default Index;