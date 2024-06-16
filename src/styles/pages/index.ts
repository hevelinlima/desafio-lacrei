import styled from 'styled-components';
import { typography } from '../typography';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  gap: 3rem;
  img{
    height: 20rem;
    width: auto;
  }
`;

export const HeroContent = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h1{
    ${typography.fonts.headlineXL};
    color: ${(props)=>props.theme.colors['accent-base']};
  }
  p{
    ${typography.fonts.headlineSM};
    color: ${(props)=>props.theme.colors['text-helper']};

    span{
      padding-right: 0.25rem;
      font-weight: bold;
    }
  }
`;


export const AbouSection = styled.section`
  display: flex;
  align-items: center;
  img{
    height: 30rem;
    width: auto;
    border-radius: 6px;
  }
` 

export const SectionContent = styled.div`
  height: 22rem;
  width: 31rem;
  padding: 1.75rem;
  border-radius: 8px;
  margin-left: -2rem;

  border: 1px solid ${(props)=>props.theme.colors['default-light']};
  background-color: ${(props)=>props.theme.colors['default']};
  
  
  h1{
    ${typography.fonts.headlineBase};
    font-weight: bold;
    color: ${(props)=>props.theme.colors['text-body']};
  }
  div{
    width: 4rem;
    border: 1px solid ${(props)=>props.theme.colors['accent-dark']};
    margin: 1rem 0;
  }
  p{
    ${typography.fonts.textXL};
    color: ${(props)=>props.theme.colors['text-helper']};
  }
`

export const Button = styled.a`
  max-width: 15rem;
  padding: 0.5rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;

  display: flex;
  
  justify-content: center;

  background-color: ${(props)=>props.theme.colors['accent-base']};
  color: ${(props)=>props.theme.colors.default};
  ${typography.fonts.textXL};
  font-weight: bold;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

  &:hover{
    background-color: ${(props)=>props.theme.colors['accent-dark']};
  }
`