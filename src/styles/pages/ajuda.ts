import { typography } from "@/styles/typography";
import styled from "styled-components";

export const ColabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 5rem;

  img{
    max-height: 20rem;
    width: auto;

    border-radius: 16px;
  }
  @media only screen and (max-width: 768px) {
    img{
      display: none;
    }
  }
`

export const ColabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 27rem;

  h1{
    ${typography.fonts.headlineBase};
    font-weight: bold;
    color: ${(props)=>props.theme.colors['text-body']};
  }
  div{
    width: 8rem;
    border: 1.5px solid ${(props)=>props.theme.colors['accent-dark']};
  }
  p{
    ${typography.fonts.textXL};
    color: ${(props)=>props.theme.colors['text-helper']};
  }
`
