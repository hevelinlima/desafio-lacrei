import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Description, Overlay, Title } from './styles'
import { X } from '@phosphor-icons/react'

export function Modal(){
  return(
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Desafio Lacrei Saúde</Title>
        <Description>Esta aplicação foi desenvolvida como desafio para a vaga de voluntário front-end. Para conhecer o trabalho realizado por esta incrível organização, por favor pressione o botão abaixo. </Description>
        <a href="https://lacreisaude.com.br/">Conhecer</a>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}