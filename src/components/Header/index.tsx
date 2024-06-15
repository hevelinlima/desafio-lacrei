import Image from "next/image";
import { ContentHeader, HeaderContainer } from "./styles";
import lacreiLogo from '../../assets/header-logo-lacrei.svg'
import Link from "next/link";


export default function Header(){
  return(
    <HeaderContainer>
      <Link href="/">
        <Image src={lacreiLogo} alt="Logo da Lacrei Saúde" />
      </Link>
      <ContentHeader>
        <Link href="/pacientes">Quem somos</Link>
        <Link href="/profissionais">Ajuda</Link>
      </ContentHeader>
    </HeaderContainer>
  )
}