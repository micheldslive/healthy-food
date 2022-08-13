import { data } from '@/mocks/data'
import { memo } from 'react'
import * as C from './styled'

const NewRecipe = () => {

  const { newRecipe } = data

  return (
    <C.NewRecipeFull>
      <C.NewRecipeContainer>
        <C.NewRecipeContent>
          <C.Div>
            <C.Title>{newRecipe.title}</C.Title>
            <C.DivInputButton>
              <C.Input placeholder={newRecipe.placeholder} />
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

export default memo(NewRecipe)