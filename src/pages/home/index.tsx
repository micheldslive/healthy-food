import { NewRecipe } from '@/components/newRecipe'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { BestRecipes } from '../../components/bestRecipes'
import { ServeYou } from '../../components/serveYou'

const Home = () => {
  return (
    <>
      <Header />
      <NewRecipe />
      <BestRecipes />
      <ServeYou />
      <Footer />
    </>
  )
}

export default Home
