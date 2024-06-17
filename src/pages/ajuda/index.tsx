import Image from "next/image";
import { ColabContainer, ColabContent, TestButton } from "../../styles/pages/ajuda";
import colabImage from "../../assets/colab-image.svg"

export default function Collaborate(){
  return(
    <ColabContainer>
      <ColabContent>
        <h1>Junte-se à
        nossa comunidade</h1>
        <div />
        <p>Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.</p>
        <TestButton>Colaborar</TestButton>
      </ColabContent>
      <Image src={colabImage} alt="" />
    </ColabContainer>
  )
}