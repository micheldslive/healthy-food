import { NewRecipe } from '@/components/newRecipe'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { BestRecipes } from '../../components/bestRecipes'

const Home = () => {
  return (
    <>
      <Header />
      <NewRecipe />
      <BestRecipes />
      <Footer />
    </>
  )
}

export default Home
