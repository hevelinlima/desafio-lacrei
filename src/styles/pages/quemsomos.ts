import { typography } from "@/styles/typography";
import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  img{
    height: 30rem;
    width: auto;

    border-radius: 16px;
  }
`
export const AboutUsContent = styled.div`
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
    width: 10rem;
    border: 1.5px solid ${(props)=>props.theme.colors['accent-dark']};
  }
  p{
    ${typography.fonts.textXL};
    color: ${(props)=>props.theme.colors['text-helper']};
  }
`