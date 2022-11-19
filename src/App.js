import { Routes, Route} from "react-router-dom"
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'
// import Mens from "./components/pages/mens"
import WalkShoes from "./components/WalkShoes"
import SkateBoard from "./components/SkateBoard"

const App = () => {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
      {/* <Route path="mens" element={<Mens/>}></Route> */}
      <Route path="SkateBoardWomen" element={<SkateBoard categoryHeader="Naisten skeittikengät" shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="SkateBoardMen" element={<SkateBoard categoryHeader="Miesten skeittikengät" shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkShoesWomen" element={<WalkShoes categoryHeader="Naisten kävelykengät" shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="WalkShoesMen" element={<WalkShoes categoryHeader="Miesten kävelykengät" shoeSize={[40,41,42,44]}/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
