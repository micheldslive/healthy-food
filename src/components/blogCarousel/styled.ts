import styled from "styled-components";
import { FlexBox } from "@/styles/mixins";

export const Card = styled.a`
  margin: 3rem 0 5rem 0rem;
  border-radius: 0.3rem;
  box-shadow: 0 15px 15px 0 rgba(29, 22, 77, 0.08);
  transition: 0.3s;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardDescription = styled.div`
  text-align: left;
  padding: 1rem;

  @media (min-width: 2000px) {
    text-align: left;
    padding: 3rem 2rem;
  }
`;

export const CardTitle = styled.div``;

export const CardTitleText = styled.h2`

  color: var(--blue-2);
  
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 110%;
  }

  @media (min-width: 2000px) {
    font-size: 2.5rem;
    height: 10rem;
  }
`;

export const CardPeople = styled.div`
  ${FlexBox('center', '', '', '', '1rem')}
  margin-top: 1rem;
  bottom: 0;

  @media (min-width: 2000px) {
    margin-top: 1rem;
    bottom: 0;
  }
`;

export const CardPeopleImage = styled.img`
  @media (min-width: 2000px) {
    width: 100px;
  }
`;

export const CardPeopleTitle = styled.span`
  color: var(--grey-4);

  @media (min-width: 2000px) {
    font-size: 2rem;
  }
`;