import { FlexBox } from '@/styles/mixins'
import styled from 'styled-components'

export const FooterFull = styled.footer``

export const FooterContainer = styled.section`
  padding: 2.5rem 2rem;
`

export const Paragraph = styled.p`
  color: var(--blue-2);
`

export const FooterContent = styled.div`
  ${FlexBox('', 'space-between', '', 'wrap', '')}

  @media (max-width: 600px) {
    ${FlexBox('', 'center')}
  }
`

export const Unlist = styled.ul`
  ${FlexBox('', 'space-between')}

  width: 18rem;
`

export const List = styled.li``

export const Anchor = styled.a`
  color: var(--grey-4);

  &:hover {
    filter: brightness(0.8);
  }
`
