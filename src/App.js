import { Routes, Route} from "react-router-dom"
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'
import Mens from "./components/pages/mens"
import WalkShoes from "./components/WalkShoes"

const App = () => {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
      <Route path="mens" element={<Mens/>}></Route>
      <Route path="WalkShoes" element={<WalkShoes/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
