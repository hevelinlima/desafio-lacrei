import Image from "next/image";
import { SkeletonContainer } from "./styles";

import lacreiLogo from '../../assets/header-logo-lacrei.svg'
import { SpinnerGap } from "@phosphor-icons/react";


export function Loading(){
  
  return(
    <SkeletonContainer>
      <Image src={lacreiLogo} alt="Logo da Lacrei" />
      <SpinnerGap className="spinner" size={32} />
    </SkeletonContainer>
  )
} 