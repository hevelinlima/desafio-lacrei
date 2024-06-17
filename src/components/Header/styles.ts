import { typography } from "@/styles/typography";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1.75rem 7rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background: ${(props)=>props.theme.colors.highlight}; */

  background: linear-gradient(to bottom, ${(props)=>props.theme.colors["emerald-10"]} , white);
  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  gap: 2rem;
  a{
    text-decoration: none;
    padding: 0.5rem 1.5rem;

    border-radius: 4px;
    color: ${(props)=>props.theme.colors["accent-dark"]};
    ${typography.fonts.textXL};
    font-weight: bold;
  }
  a:hover{
    color: ${(props)=>props.theme.colors.default};
    background-color: ${(props)=>props.theme.colors["accent-dark"]};
    transition: all 0.2s ease-in-out;
  }
  @media only screen and (max-width: 768px) {
    a:first-child{
      display: none;
    }
  }
`