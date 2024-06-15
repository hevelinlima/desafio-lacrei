import { typography } from "@/styles/typography";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  
  padding: 2.5rem 6.5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props)=>props.theme.colors.highlight};
`

export const ContentHeader = styled.div`
  a{
    text-decoration: none;
    color: ${(props)=>props.theme.colors["accent-dark"]};
    ${typography.fonts.textXL};
    font-weight: bold;
  }
`