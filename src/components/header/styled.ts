import { Link } from 'react-scroll'
import { IStyledHeader } from '@/core/types'
import { FlexBox, Position, TextHealthy } from '@/styles/utils/mixins'
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
  height: 6.25rem;
  padding: 0 2rem;

  @media (max-width: 799px) {
    height: 5rem;
  }

`

export const HealthyLogo = styled.h1<IStyledHeader>`
  ${TextHealthy('', '', '32px', 'var(--bold)')}
  transition: 0.3s;

  @media (max-width: 900px) {
    font-size: 24px;
    background-color: var(--white);
    padding: 0.8rem 1.6rem;
    border-radius: 0.3rem;
    color: var(--green-2);
  }

  @media (min-width: 901px) {
    color: ${({ scroll }) => (scroll ? 'var(--white)' : 'var(--green-2)')};
  }
`

export const Anchor = styled(Link)`
  transition: 0.3s;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`
