import Image from "next/image";
import { ExternalFooter, FooterContainer, LogoFooter } from "./styles";
import logoFooter from "../../assets/footer-logo-lacrei.svg"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Link from "next/link";

export function Footer(){
  return(
    <>
      <FooterContainer>
        <LogoFooter>
          <Image src={logoFooter} alt="Logo da Lacrei" />
          <div>
            <Link href="https://www.instagram.com/lacrei.saude">
              <InstagramLogo size={32} weight="bold" />
            </Link>
            <Link href="https://www.linkedin.com/company/lacrei">
              <LinkedinLogo size={32} weight="bold" />
            </Link>
            <Link href="https://www.facebook.com/lacrei.saude/">
              <FacebookLogo size={32} weight="bold" />
            </Link>
          </div>
        </LogoFooter>
        <Link className="link-footer" href={'/quemsomos'} >Quem somos</Link>
        <Link className="link-footer" href={'/ajuda'}>Colaborar</Link>
      </FooterContainer>
      <ExternalFooter>
        <p>Copyright © 2024 Lacrei. All rights reserved.</p>
        <p>Desenvolvido por Hévelin Lima para o desafio da Lacrei Saúde.</p>
      </ExternalFooter>
    </>
  )
}