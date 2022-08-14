import { createGlobalStyle } from "styled-components";
import { Variables } from "@/styles/utils/variables";

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
    max-width: 1110px;
    margin: 0 auto;
  }

  @media (max-width: 1079px) {
    padding: 0 20px;
  }

  button,
  a {
    cursor: pointer;
  }

  
  .slick-slide,
  .slick-active,
  .slick-cloned {
    margin-right: 2rem;
    transition: 0.3s;

    @media (min-width: 1024px) {
      max-width: 360px;
    }

    @media (max-width: 1024px) {
      max-width: 320px;
      margin-right: 1rem;
    }

    @media (max-width: 900px) {
      max-width: 280px;
    }

    @media (max-width: 768px) {
      max-width: 250px;
    }

    @media (max-width: 600px) {
      max-width: 230px;
    }

    @media (min-width: 2000px) {
      max-width: 500px;
    }

    @media (min-width: 2200px) {
      max-width: 560px;
    }
  }

  .slick-slider {
    &:after {
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 1) 100%
      );
      bottom: 0;
      content: "";
      height: 100%;
      position: absolute;
      right: 0;
      width: 7%;
      margin-right: -2px;
      transition: 0.3s;
    }
  }

  .slick-next,
  .slick-prev {
    padding: 15px;
    width: 56px;
    height: 56px;
    cursor: pointer;
    border: none;
    border-radius: 100%;
    background-color: var(--white);
    top: 55%;
    z-index: 1;
    box-shadow: 0 0 15px 30px rgba(64, 152, 241, 0.08);

    &:hover {
      background-color: var(--white);
    }

    &.slick-next {
      margin-right: 6%;
    }

    @media (max-width: 600px) {
      &.slick-next {
        margin-right: 12%;
      }
    }
  }

  .slick-arrow,
  .slick-prev,
  .slick-next {
    @media (max-width: 768px) {
      display: none;
    }
  }

  #blog .slick-slider .slick-prev {
    visibility: hidden;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;  
  }

  .react-modal-content {
    width: 100%;
    max-width: 500px;
    background-color: var(--white);
    padding: 1rem 2rem;
    position: relative;
    border-radius: 0.25rem;

    @media (min-width: 2000px) {
      max-width: 800px;
    }

    @media (max-width: 530px) {
      width: 90%;
    }

    @media (max-width: 372px) {
      padding: 2rem 1rem;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }

    @media (min-width: 2000px) {
      img {
          width: 30px;
      }
    }
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
`;
