import { AbouSection, Button, HeroContainer, HeroContent, MainContainer, SectionContent } from "@/styles/pages/index";
import Image from "next/image";
import { useEffect } from "react";
import heroImg from "../assets/image-hero.svg";
import sectionImg from "../assets/section-image.jpg";
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from "@/components/Modal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Lacrei Saúde</title>
      </Head>
      <MainContainer> 
        <HeroContainer>
          <HeroContent>
            <h1>Olá, você está
            na Lacrei Saúde!</h1>
            <p>Conectamos pessoas <span>LGBTQIAPN+</span>
            com profissionais da saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.</p>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button>Conhecer</Button>
              </Dialog.Trigger>
              <Modal />
            </Dialog.Root>
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
    </>
  );
}
