import styled from "styled-components";

export const ReadBlogFull = styled.div`
  overflow: hidden;
  background-color: var(--grey-1);
`;

export const ReadBlogContainer = styled.section`
  max-width: 83%;
  margin-top: 6rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--blue-2);

  @media (min-width: 2000px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`

  max-width: 30rem;
  margin: 1rem auto 0;
  line-height: 1.7rem;
  color: var(--grey-4);

  @media (max-width: 450px) {
    line-height: 1.2rem;
  }

  @media (min-width: 2000px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

export const CardContainer = styled.div`
  width: 110%;
`;