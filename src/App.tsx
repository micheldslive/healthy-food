import Home from './pages/home'
import { GlobalStyles } from './styles/global'
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.min.css';

export function App () {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  )
}
