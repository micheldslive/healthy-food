import styled from "styled-components";
import { BG, FlexBox, homeInput } from "@/styles/utils/mixins";
import JoinMemberImage from "@/assets/bloco_final_image.svg"

export const JoinMemberFull = styled.div`
  ${BG(JoinMemberImage, 'no-repeat', 'top right', 'contain', '45rem', 'relative')}

  @media (max-width: 600px) {
    background-size: cover;
  }
`;

export const JoinMemberContainer = styled.section`
  ${FlexBox('center')}
  height: inherit;
`;

export const JoinMemberContent = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 31.5rem;

  @media (max-width: 900px) {
    background: rgba(255, 255, 255, 0.2);
    width: 60%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
    border-radius: 0.5rem;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  color: var(--blue-1);
  max-width: 25rem;
`;

export const Div = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Input = styled.input`
  ${homeInput('25rem')}
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--white);
  background: var(--green-1);
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
