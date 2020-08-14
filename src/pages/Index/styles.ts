import styled from 'styled-components';

export const Container = styled.div`
  img {
    margin-bottom: 3.2rem;
  }

  p {  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    display: flex;
    align-items: center;
    
    text-align: center;
    margin: auto 1.6rem;
    padding: 0 1.6rem;

    background-color: var(--color-background-tertiary);
    color: var(--color-text);
  }

  img, p {
    width: 22.5rem;
    height: 19rem;
  }

  @media(min-width: 970px) {
    height: 100rem;
  }
`;

export const WelcomeContainer = styled.div`
  padding: 4.6rem 3.2rem;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media(min-width: 970px) {
    flex-direction: row;
    justify-content: center;

    padding: 20% 0 60%;
  }  
`;

export const SkillsContainer = styled.div`

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  margin-bottom: 3.2rem;  
  
  @media(min-width: 970px) {
    flex-direction: row;
    justify-content: space-between;
    
    img {
      margin: 0;
      padding: 0;
    }
  }
`;
