import { MainContainer } from "@/styles/pages/index";
import { useEffect } from "react";

export default function Home() {
  const setTitle = () => {
    document.title = 'Lacrei Saúde';
  };

  useEffect(() => {
    setTitle();
  });
  return (
    <MainContainer>
      
      <h1>Hello, world</h1>
      
    </MainContainer>
  );
}
