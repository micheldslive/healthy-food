import { Header } from '@/components/header'
import NewRecipe from '@/components/newRecipe'
import BestRecipes from '@/components/bestRecipes'
import ServeYou from '@/components/serveYou'
import ReadBlog from '@/components/blog'
import JoinMember from '@/components/joinMember'
import Footer from '@/components/footer'
import { ModalContent } from '@/components/modal'
import { FormRegister } from '@/components/formRegister'
import { Toast } from '@/components/Toast'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  return (
    <>
      <Header />
      <NewRecipe />
      <BestRecipes />
      <ServeYou />
      <ReadBlog />
      <JoinMember />
      <ModalContent>
        <FormRegister />
      </ModalContent>
      <Toast />
      <Footer />
    </>
  )
}

export default Home
