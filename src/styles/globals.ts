import { createGlobalStyle } from 'styled-components'
import { Variables } from './variables'

export const GlobalStyles = createGlobalStyle`

  ${Variables}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--green-2);
    border-radius: 10px;
  }

  body,
  input,
  textarea,
  button {
    font-family: var(--font-primary);
    font-weight: var(--normal);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: var(--font-secondary);
    font-weight: var(--bold);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  section {
    max-width: 1120px;
    margin: 0 auto;
  }

  @media (max-width: 1079px) {
    padding: 0 20px;
  }

  button,
  a {
    cursor: pointer;
  }
`
