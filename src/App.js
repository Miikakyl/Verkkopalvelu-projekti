import { Routes, Route} from "react-router-dom"
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
