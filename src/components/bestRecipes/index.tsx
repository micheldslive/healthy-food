import { data } from "@/mocks/data";
import * as C from "./styled";


export const BestRecipes = () => {

  const { recipes } = data

  return (
    <C.BestRecipesFull id="recipes">
      <C.BestRecipesContainer>
        <C.BestRecipesContent>
          <C.Description>
            <C.Title>{recipes.title}</C.Title>
            <C.SubTitle>
              {recipes.desc}
            </C.SubTitle>
          </C.Description>
          <C.Recipes>
            <C.Unlist>
              {recipes.items.map(({ id, image, title, buttonText }) => (
                <C.List key={id}>
                  <C.RecipesCard>
                    <C.Img src={image} />
                    <C.RecipesCardContainer>
                      <C.H2>{title}</C.H2>
                      <C.Button>{buttonText}</C.Button>
                    </C.RecipesCardContainer>
                  </C.RecipesCard>
                </C.List>
              ))}
            </C.Unlist>
          </C.Recipes>
        </C.BestRecipesContent>
      </C.BestRecipesContainer>
    </C.BestRecipesFull>
  );
};