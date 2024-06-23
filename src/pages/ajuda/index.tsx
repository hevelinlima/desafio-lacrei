import Image from "next/image";
import { ColabContainer, ColabContent } from "../../styles/pages/ajuda";
import colabImage from "../../assets/colab-image.svg"
import { Button } from "@/styles/pages";
import Head from "next/head";

export default function Collaborate(){
  return(
    <>
      <Head>
        <title>Quem somos | Lacrei Saúde</title>
      </Head>
      <ColabContainer>
        <ColabContent>
          <h1>Junte-se à
          nossa comunidade</h1>
          <div />
          <p>Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.</p>
          <Button>Colaborar</Button>
        </ColabContent>
        <Image src={colabImage} alt="" />
      </ColabContainer>
    </>
  )
}