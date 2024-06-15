import { typography } from "@/styles/typography";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props)=>props.theme.colors.divider};
  border-top: 1px solid ${(props)=>props.theme.colors.divider};
  margin: 2rem 0;

  padding: 3rem 0;

  .link-footer{
    text-decoration: none;
    ${typography.fonts.textXL};
    font-weight: bold;
    color: ${(props)=>props.theme.colors["text-body"]};

    border-bottom: 1px solid transparent;
  }
  .link-footer:hover{
    color: ${(props)=>props.theme.colors["text-helper"]};
    cursor: pointer;
    border-bottom: 1px solid ${(props)=>props.theme.colors["text-helper"]};
  }
`

export const LogoFooter = styled.div`
  div{
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    a{
      color: ${(props)=>props.theme.colors["accent-dark"]};
    }
    a:hover{
      color: ${(props)=>props.theme.colors["accent-medium"]};
    }
  }
`

export const ExternalFooter = styled.div`
  ${typography.fonts.textSM};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`