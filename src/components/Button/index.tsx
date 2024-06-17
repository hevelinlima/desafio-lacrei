import { Children, ReactNode } from "react";
import { TestButton } from "./styles";

interface TesteButtonProps{
  children: ReactNode;
}

export function Button({children}: TesteButtonProps){
  return(
    <TestButton>{children}</TestButton>
  )
}