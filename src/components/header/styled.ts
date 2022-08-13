import { Link } from 'react-scroll'
import { IStyledHeader } from '@/core/types'
import { FlexBox, Position, TextHealthy } from '@/styles/mixins'
import styled from 'styled-components'

export const HeaderFull = styled.header<IStyledHeader>`
  ${Position('fixed', '0')}
  background-color: ${({ scroll }) => (scroll ? 'var(--green-2)' : '')};
  width: 100%;
  z-index: 2;
  transition: 0.3s;
`

export const HeaderContainer = styled.section`
  ${FlexBox('center', 'space-between', '0')}
  height: 5rem;
  padding: 0 2rem;
`
export const Div = styled.div``

export const HealthyLogo = styled.h1<IStyledHeader>`
  ${TextHealthy('', '', '32px', 'var(--bold)')}
  transition: 0.3s;

  @media (min-width: 901px) {
    color: ${({ scroll }) => (scroll ? 'var(--white)' : 'var(--green-2)')};
  }

  @media (max-width: 900px) {
    font-size: 24px;
    color: ${({ open }) => (open ? 'var(--green-2)' : 'var(--white)')};
  }
`

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

export const Anchor = styled(Link)`
  transition: 0.3s;
  z-index: 1;

  &:hover {
    opacity: 0.8;
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
