import { IStyledHeader } from '@/core/types'
import { FlexBox, Position } from '@/styles/mixins'
import styled from 'styled-components'

export const Bullet = styled.div``

export const Burguer = styled.div<IStyledHeader>`
  ${Position('fixed', '1.5rem', '1.5rem', '', '')}
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;

  @media (max-width: 800px) {
    ${FlexBox('', 'space-between', 'column', 'wrap', '')}
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? 'var(--green-2);' : 'var(--white)')};
    border-radius: 0.8rem;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
