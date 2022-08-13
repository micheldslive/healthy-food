import { Header } from '@/components/header'
import NewRecipe from '@/components/newRecipe'
import BestRecipes from '@/components/bestRecipes'
import ServeYou from '@/components/serveYou'
import ReadBlog from '@/components/blog'
import JoinMember from '@/components/joinMember'
import Footer from '@/components/footer'
import { ModalRegister } from '@/components/modalRegister'
import { Toast } from '@/components/Toast'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  return (
    <>
      <Header />
      <NewRecipe />
      <BestRecipes />
      <ServeYou />
      <ReadBlog />
      <JoinMember />
      <ModalRegister />
      <Toast />
      <Footer />
    </>
  )
}

export default Home
