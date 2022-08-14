import { render, screen } from '@testing-library/react'
import BestRecipes from './index'

describe('<BestRecipes />', () => {
  it('should render link and children', () => {
    render(<BestRecipes />)

    // const children = screen.getByText(/anything/i)
    const children = screen.getByRole('heading', { name: /Our Best Recipes/i })

    expect(children).toBeInTheDocument
    //expect(children).toHaveAttribute('href', '/my-link')
  })
})
