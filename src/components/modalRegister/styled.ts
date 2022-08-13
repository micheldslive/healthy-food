import styled from "styled-components";
import { CgSpinner } from "react-icons/cg";
import { FlexBox, TextHealthy } from "@/styles/mixins";

export const Form = styled.form`
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .primaryData {
    text-align: left;

    label {
      margin-left: 0.5rem;
    }
  }

  .otherDatas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    text-align: left;
    margin: 0.5rem 0;

    label {
      margin-left: 0.5rem;
    }
  }

  input {
    ${TextHealthy('var(--grey-4)', '', '1rem', 'var(--normal)')}
    margin-top: 0.2rem;
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--grey-4);
    }

    &[id="UF"] {
      text-align: center;
    }
  }

  button[type="submit"] {
    ${FlexBox("center", "center", "", "", "5px")}
    ${TextHealthy('var(--white)', '', '1.2rem', 'var(--bold)')}
    width: 80%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green-2);
    border-radius: 0.25rem;
    border: 0;
    margin: 1rem auto;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 2000px) {
    padding: 2rem;

    label {
      font-size: 2rem;
    }

    h2 {
      font-size: 4rem;
    }

    input {
      font-weight: 400;
      font-size: 2rem;
      padding: 3rem 1rem;
      margin-top: 1.2rem;
    }

    button[type="submit"] {
      width: 80%;
      padding: 0 1.5rem;
      height: 6rem;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 530px) {
    h2 {
      font-size: 2rem;
    }

    input {
      padding: 0 1rem;
      height: 3rem;
    }
  }

  @media (max-width: 328px) {
    input {
      font-size: 0.78rem;
    }

    label {
      font-size: 0.9rem;
    }
  }
`;

export const IconSpin = styled(CgSpinner)`
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
