import { NewRecipe } from '@/components/newRecipe'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { BestRecipes } from '@/components/bestRecipes'
import { ServeYou } from '@/components/serveYou'
import { ReadBlog } from '@/components/blog'

const Home = () => {
  return (
    <>
      <Header />
      <NewRecipe />
      <BestRecipes />
      <ServeYou />
      <ReadBlog />
      <Footer />
    </>
  )
}

export default Home
