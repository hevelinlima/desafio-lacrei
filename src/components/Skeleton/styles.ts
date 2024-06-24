import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SkeletonContainer = styled.div`

  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;


  .spinner{
    animation: ${spin} 1s linear infinite;  
  }
`

