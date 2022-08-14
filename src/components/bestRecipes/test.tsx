import { render } from '@testing-library/react'
import BestRecipes from './index'

describe('<BestRecipes />', () => {
  it('should render a heading', () => {
    const { getByRole } = render(<BestRecipes />)

    const title = getByRole('heading', { name: /Our Best Recipes/i })

    expect(title).toBeInTheDocument
  })
})
