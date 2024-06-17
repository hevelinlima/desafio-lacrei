import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, button {
    font-family: 'Nunito', sans-serif;
  }
  body{
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${(props)=>props.theme.colors["default-light"]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props)=>props.theme.colors["accent-medium"]};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:active {
      background: ${(props)=>props.theme.colors["accent-dark"]};
    }
  }
`