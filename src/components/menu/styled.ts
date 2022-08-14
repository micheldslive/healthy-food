import { Link } from 'react-scroll'
import { IStyledHeader } from '@/core/types'
import { FlexBox, Position, TextHealthy } from '@/styles/utils/mixins'
import styled from 'styled-components'

export const Nav = styled.nav``

export const UnlistContent = styled.div<IStyledHeader>`
  @media (max-width: 799px) {
    ${Position('fixed', '0', '0')}
    ${FlexBox('center', 'center')}
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    background: white;
    width: 100%;
    height: 100vh;
    transition: transform 0.3s ease-in-out 0s;
  }
`

export const UnList = styled.ul`
  ${FlexBox('center', 'space-between', '', '', '2rem')}

  @media (max-width: 799px) {
    flex-direction: column;
    padding: 8rem 0;
  }
`

export const List = styled.li`
  ${TextHealthy('var(--white)', 'Mulish', '1rem', 'var(--bold)')}

  @media (max-width: 799px) {
    ${TextHealthy('var(--green-2)')}
  }
`

export const RegisterAnchor = styled.a`
  transition: 0.3s;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  border: 2px solid var(--white);
  background: var(--white);
  ${TextHealthy('var(--green-2)', '', '', 'var(--bold)')}

  @media (max-width: 799px) {
    background: var(--green-2);
    color: var(--white);
  }
  
  &:hover {
    background: transparent;
    color: var(--white);
  }
`
