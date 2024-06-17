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

export const TestButton = styled.button`
  border: 2px solid ${(props)=>props.theme.colors['accent-base']};
  border-radius: 4px;
  background-color: transparent;
  max-width: 15rem;
  padding: 0.5rem 1rem;

  color: ${(props)=>props.theme.colors['accent-base']};
  ${typography.fonts.textBase};
  font-weight: bold;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

  &:hover{
    color: ${(props)=>props.theme.colors.default};
    background-color: ${(props)=>props.theme.colors["accent-base"]};
    transition: all 0.2s ease-in-out;
  }
`