import styled from "styled-components";
import { FlexBox, TextHealthy } from "@/styles/utils/mixins";

export const BestRecipesFull = styled.div`
  background: var(--grey-1);
  margin-top: 24px;
`;

export const BestRecipesContainer = styled.section``;

export const BestRecipesContent = styled.div`
  padding: 5rem 0;
`;

export const Description = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  color: var(--blue-2);
`;

export const SubTitle = styled.p`
  line-height: 1.5rem;
  max-width: 28rem;
  margin: auto;
  color: var(--grey-4);
`;

export const Recipes = styled.div`
  margin-top: 2rem;
`;

export const Unlist = styled.ul`
  ${FlexBox('', 'center', '', 'wrap', '40px')}
  width: 100%;
  margin: 0 auto;
  
  @media screen and (max-width: 976px) {
    gap: 10px;
  }
`;

export const List = styled.li`
  background: white;
  border-radius: 0.3rem;
  max-width: 530px;
  box-shadow: 0 0.9rem 1.1rem var(--grey-3);

  @media screen and (min-width: 977px) {
    &:nth-child(1n) {
      width: calc(100% / 2 - 40px);
    }

    &:nth-child(2n) {
      width: calc(100% / 2 - 40px);
    }
  }

  @media screen and (max-width: 976px) {
    & {
      width: 100%;
      margin: 10px 20px;
    }
  }
`;

export const RecipesCard = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  @media (min-width: 421px) and (max-width: 976px) {
    max-width: 200px;
    width: 100%;
  }

  @media (max-width: 420px) {
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export const RecipesCardContainer = styled.div`
  padding: 1.4rem 1.8rem;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 1.5rem;
  font-weight: var(--bold);
  color: var(--blue-2);
`;

export const Button = styled.a`
  ${TextHealthy('var(--white)', '', '', 'var(--normal)')}
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  background-color: var(--green-2);
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;