import { AboutUsContainer, AboutUsContent } from "../../styles/pages/quemsomos";
import aboutUsImg from "../../assets/about-us-image.jpg"
import Image from "next/image";
import Head from "next/head";

export default function AboutUs(){
  return(
    <>
      <Head>
        <title>Quem somos | Lacrei Saúde</title>
      </Head>
      <AboutUsContainer>
        <AboutUsContent>
          <h1>Atendimento qualificado, seguro e inclusivo</h1>
          <div />
          <p>Acreditamos que ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.</p>
          <p>Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+.</p>
          <p>Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.</p>
        </AboutUsContent>
        <Image src={aboutUsImg} alt="" />
      </AboutUsContainer>
    </>
  )
}