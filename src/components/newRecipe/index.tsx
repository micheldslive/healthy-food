import * as C from './styled'

export const NewRecipe = () => {
  return (
    <C.NewRecipeFull>
      <C.NewRecipeContainer>
        <C.NewRecipeContent>
          <C.Div>
            <C.Title>Ready for Trying a new recipe?</C.Title>
            <C.DivInputButton>
              <C.Input placeholder='Search healthy recipes' />
              <C.Button>
                <C.Icon />
              </C.Button>
            </C.DivInputButton>
          </C.Div>
        </C.NewRecipeContent>
      </C.NewRecipeContainer>
    </C.NewRecipeFull>
  )
}
