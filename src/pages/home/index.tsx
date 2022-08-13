import { Header } from '@/components/header'
import NewRecipe from '@/components/newRecipe'
import BestRecipes from '@/components/bestRecipes'
import ServeYou from '@/components/serveYou'
import ReadBlog from '@/components/blog'
import JoinMember from '@/components/joinMember'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <>
      <Header />
      <NewRecipe />
      <BestRecipes />
      <ServeYou />
      <ReadBlog />
      <JoinMember />
      <Footer />
    </>
  )
}

export default Home
