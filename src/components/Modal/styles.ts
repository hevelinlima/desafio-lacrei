import { typography } from '@/styles/typography'
import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay =styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  max-width: 32rem;
  border-radius: 8px;
  padding: 2rem;
  background: linear-gradient(to top, ${(props)=>props.theme.colors["emerald-10"]}, white);

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  a{
    max-width: 15rem;
    padding: 0.5rem 2.5rem;
    border-radius: 4px;
    text-decoration: none;

    display: flex;
    justify-content: center;

    background-color: ${(props)=>props.theme.colors['accent-base']};
    color: ${(props)=>props.theme.colors.default};
    ${typography.fonts.textXL};
    font-weight: bold;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

    &:hover{
      background-color: ${(props)=>props.theme.colors['accent-dark']};
    }
  }
`

export const Title =styled(Dialog.Title)`
  ${typography.fonts.headlineBase};
  color: ${(props)=>props.theme.colors['accent-base']};
`

export const Description = styled(Dialog.Description)`
  margin: 1.5rem 0;

  ${typography.fonts.textXL};
  color: ${(props)=>props.theme.colors['text-helper']};
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  color: ${(props)=>props.theme.colors['accent-dark']};

  &:hover{
    color: ${(props)=>props.theme.colors['accent-medium']};
  }
`