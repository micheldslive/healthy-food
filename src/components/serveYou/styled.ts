import styled from "styled-components";
import ServeYouImage from "@/assets/bloco_services.svg"
import { BG, FlexBox } from "@/styles/mixins";

export const ServeYouFull = styled.div`
  ${BG(ServeYouImage, 'no-repeat', 'top left', 'contain', '45rem', 'relative')}

  @media (max-width: 600px) {
    background-size: cover;
  }
`;

export const ServeYouContainer = styled.section`
  height: inherit;
`;

export const ServeYouContent = styled.div`
  ${FlexBox('center', 'flex-end')}
  height: inherit;
  padding: 0 2rem;
`;

export const Content = styled.div`
  max-width: 30rem;

  @media (max-width: 900px) {
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;

export const Title = styled.h1`
  max-width: 25rem;
  color: var(--blue-1);
`;

export const Paragraph = styled.p`
  margin: 2rem 0;
  max-width: 24rem;
  color: var(--grey-3);
`;

export const Anchor = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.8rem;
  border-radius: 0.3rem;
  background-color: var(--green-2);
  color: var(--white);
  transition: 0.3s;
  box-shadow: 0 5px 20px var(--green-2);

  &:hover {
    filter: brightness(0.9);
  }
`
