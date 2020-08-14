import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const WelcomeContainer = styled.div`
  padding: 9.6rem 3.2rem;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  img, p {
    width: 22.5rem;
    height: 19rem;
  }

  img {
    margin-bottom: 3.2rem;
  }

  p {  
    display: flex;
    align-items: center;
    
    text-align: center;
    margin: auto 1.6rem;
    padding: 0 1.6rem;

    background-color: var(--color-background-tertiary);
    color: var(--color-text);
  }
`;
