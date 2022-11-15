import { Routes, Route} from "react-router-dom"
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'
import Mens from "./components/pages/mens"

const App = () => {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
      <Route path="mens" element={<Mens/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
