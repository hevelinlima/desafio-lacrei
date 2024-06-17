import { typography } from "../../styles/typography";
import styled from "styled-components";

export const TestButton = styled.button`
  border: 2px solid #018762;
  border-radius: 4px;
  background-color: transparent;
  max-width: 15rem;
  max-height: 8rem;
  padding: 0.5rem 1rem;

  color: #018762;
  ${typography.fonts.textBase};
  font-weight: bold;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

  &:hover{
    color: white;
    background-color: #018762;
    transition: all 0.2s ease-in-out;
  }
`