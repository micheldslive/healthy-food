import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { BG, FlexBox, TextHealthy } from '@/styles/utils/mixins'

export const NewRecipeFull = styled.div`
  ${BG('/src/assets/Illustration.svg', 'no-repeat', 'top right', 'contain', '40rem', 'relative')}

  @media (min-width: 1500px) and (max-width: 1919px) {
    height: 50rem;
  }

  @media (min-width: 1920px) {
    height: 60rem;
  }

  @media (max-width: 900px) {
    background-size: cover;
  }
`

export const NewRecipeContainer = styled.section`
  ${FlexBox('center')}
  height: inherit;
`

export const NewRecipeContent = styled.div`
  ${FlexBox('', 'center', 'column')}
  height: 20rem;
  padding: 0 2rem;
  max-width: 30rem;
  width: 100%;
  border-radius: 0.5rem;

  @media (max-width: 900px) {
    background: rgba(255, 255, 255, 0.2);
    width: 90%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
  }
`

export const Div = styled.div``

export const Title = styled.h1`
  ${TextHealthy('var(--blue-2)', '', '3rem')}
  max-width: 20rem;
`

export const DivInputButton = styled.div`
  ${FlexBox('center')}
  margin-top: 2rem;
`

export const Input = styled.input`
  padding: 1rem;
  width: 100%;
  max-width: 25rem;
  margin-right: 1rem;
  border-radius: 0.3rem;
`

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--white);
  background: var(--green-2);
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Icon = styled(FiSearch)`
  ${TextHealthy('', '', '16px')}
`
