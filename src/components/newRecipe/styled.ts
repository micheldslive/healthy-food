import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { BG, homeInput, FlexBox, TextHealthy } from '@/styles/utils/mixins'
import newRecipeImage from "@/assets/Illustration.svg"

export const NewRecipeFull = styled.div`
  ${BG(newRecipeImage, 'no-repeat', 'top right', 'contain', '40rem', 'relative')}

  @media (min-width: 1500px) and (max-width: 1919px) {
    height: 50rem;
  }

  @media (min-width: 1920px) {
    height: 60rem;
  }

  @media (max-width: 660px) {
    background-size: cover;
  }
`

export const NewRecipeContainer = styled.section`
  ${FlexBox('center')}
  height: inherit;
`

export const NewRecipeContent = styled.div`
  ${FlexBox('', 'center', 'column')}
  padding: 2rem;
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

export const Div = styled.div`
  width: 100%;
  max-width: 30rem;

`

export const Title = styled.h1`
  ${TextHealthy('var(--blue-2)', '', '3rem', '', '70px')}
  max-width: 22rem;

`

export const DivInputButton = styled.div`
  ${FlexBox('center')}
  margin-top: 2rem;
`

export const Input = styled.input`
  ${homeInput('25rem')}
`

export const Button = styled.button`
  padding: 0.9rem 1.1rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--white);
  background: var(--green-1);
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Icon = styled(FiSearch)`
  ${TextHealthy('', '', '18px')}
`
