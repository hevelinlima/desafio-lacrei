import { AbouSection, Button, HeroContainer, HeroContent, MainContainer, SectionContent } from "@/styles/pages/index";
import Image from "next/image";
import { useEffect } from "react";
import heroImg from "../assets/image-hero.svg";
import sectionImg from "../assets/section-image.jpg";

export default function Home() {
  const setTitle = () => {
    document.title = 'Lacrei Saúde';
  };

  useEffect(() => {
    setTitle();
  });
  return (
    <MainContainer> 
      <HeroContainer>
        <HeroContent>
          <h1>Olá, você está
          na Lacrei Saúde!</h1>
          <p>Conectamos pessoas <span>LGBTQIAPN+</span>
          com profissionais da saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.</p>
          <Button href="https://lacreisaude.com.br/" >Conhecer</Button>
        </HeroContent>
        <Image src={heroImg} alt="" />
      </HeroContainer>
      <AbouSection>
        <Image src={sectionImg} alt="" />
        <SectionContent>
          <h1>O que é a
            <br />
          Lacrei Saúde?</h1>
          <div />
          <p>O nosso papel é construir a conexão entre as pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico com profissionais da saúde. </p>
          <p>Tudo isso com segurança, inclusão e representatividade.</p>
          <p>Surgimos da esperança de ter um atendimento clínico qualificado, seguro e empático para todas as pessoas.</p>
        </SectionContent>
      </AbouSection>
    </MainContainer>
  );
}
