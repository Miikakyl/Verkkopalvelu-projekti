import { Routes, Route} from "react-router-dom"
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'
import WalkShoes from "./components/WalkShoes"
import SkateBoard from "./components/SkateBoard"
import Basketball from "./components/Basketball"
import NikeAirforce from "./components/productpage-walk/nikeairforce"
import NikeAirforce720 from "./components/productpage-walk/nikeairforce720"
import AdidasY3 from "./components/productpage-walk/adidasy3"
import NikeAirforce97 from "./components/productpage-walk/nikeairforce97"
import Yeezy from "./components/productpage-walk/yeezy"
import Adidasgazelle from "./components/productpage-walk/adidasgazelle"
import Jordan1low from "./components/productpage-basket/jordan1low"
import Jordan1mid from "./components/productpage-basket/jordan1mid"
import NikeKD from "./components/productpage-basket/nikekd"
import Converse from "./components/productpage-basket/converse"
import Reebok from "./components/productpage-basket/reebok"
import Vansspliton from "./components/productpage-skate/vansspliton"
import Vanssplitonpro from "./components/productpage-skate/vanssplitonpro"
import VansAuthentic from "./components/productpage-skate/vansauthentic"
import NikeBlazer from "./components/productpage-skate/nikeblazer"
import Reebook from "./components/productpage-skate/reebok"

const App = () => {

  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
      {/* <Route path="mens" element={<Mens/>}></Route> */}
      <Route path="SkateboardWomen" element={<SkateBoard categoryHeader="Naisten skeittikengät" /*shoeSize={[38,39,40,41]}*//>}></Route>
      <Route path="SkateboardMen" element={<SkateBoard categoryHeader="Miesten skeittikengät" /*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="WalkshoesWomen" element={<WalkShoes categoryHeader="Naisten kävelykengät" /*shoeSize={[38,39,40,41]}*//>}></Route>
      <Route path="WalkshoesMen" element={<WalkShoes categoryHeader="Miesten kävelykengät" /*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="BasketballWomen" element={<Basketball categoryHeader="Naisten koripallokengät" /*shoeSize={[38,39,40,41]}*//>}></Route>
      <Route path="BasketballMen" element={<Basketball categoryHeader="Miesten koripallokengät" /*shoeSize={[40,41,42,44]}*//>}></Route>

      <Route path="WalkshoesMen/nikeairforce" element={<NikeAirforce productHeader="Miesten kävelykengät" name="Airforce 100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkshoesWomen/nikeairforce" element={<NikeAirforce productHeader="Naisten kävelykengät" name="Airforce 100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="WalkshoesMen/nikeairforce720" element={<NikeAirforce720 productHeader="Miesten kävelykengät" name="Nike Airforce 720 120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkshoesWomen/nikeairforce720" element={<NikeAirforce720 productHeader="Naisten kävelykengät" name="Nike Airforce 720 120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta", "Violetti"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="WalkshoesMen/adidasy3" element={<AdidasY3 productHeader="Miesten kävelykengät" name="Adidas Y3 100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkshoesWomen/adidasy3" element={<AdidasY3 productHeader="Naisten kävelykengät" name="Adidas Y3 100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="WalkshoesMen/nikeairforce97" element={<NikeAirforce97 productHeader="Miesten kävelykengät" name="Nike Airforce 97 100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkshoesWomen/nikeairforce97" element={<NikeAirforce97 productHeader="Naisten kävelykengät" name="Nike Airforce 97 100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="WalkshoesMen/yeezy" element={<Yeezy productHeader="Miesten kävelykengät" name="Yeezy 200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkshoesWomen/yeezy" element={<Yeezy productHeader="Naisten kävelykengät" name="Yeezy 200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="WalkshoesMen/adidasgazelle" element={<Adidasgazelle productHeader="Miesten kävelykengät" name="Adidas Gazelle 200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="WalkshoesWomen/adidasgazelle" element={<Adidasgazelle productHeader="Naisten kävelykengät" name="Adidas Gazelle 200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="BasketballMen/jordan1low" element={<Jordan1low productHeader="Miesten koripallokengät" name="Jordan 1 low 170€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="BasketballWomen/jordan1low" element={<Jordan1low productHeader="Naisten naistenkoripallokengät" name="Jordan 1 low 150€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="BasketballMen/jordan1mid" element={<Jordan1mid productHeader="Miesten koripallokengät" name="Jordan 1 Mid 170€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="BasketballWomen/jordan1mid" element={<Jordan1mid productHeader="Naisten naistenkoripallokengät" name="Jordan 1 Mid 150€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="BasketballMen/nikekd" element={<NikeKD productHeader="Miesten koripallokengät" name="Nike KD 70€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="BasketballWomen/nikekd" element={<NikeKD productHeader="Naisten naistenkoripallokengät" name="Nike KD 70€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="BasketballMen/converse" element={<Converse productHeader="Miesten koripallokengät" name="Converse 120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="BasketballWomen/converse" element={<Converse productHeader="Naisten naistenkoripallokengät" name="Converse 120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="BasketballMen/reebok" element={<Reebok productHeader="Miesten koripallokengät" name="Reebok 90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="BasketballWomen/reebok" element={<Reebok productHeader="Naisten naistenkoripallokengät" name="Reebok 90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="SkateboardMen/vansspliton" element={<Vansspliton productHeader="Miesten skeittikengät" name="Vans Split On 40€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="SkateboardWomen/vansspliton" element={<Vansspliton productHeader="Naisten skeittikengät" name="Vans Split On 40€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="SkateboardMen/vanssplitonpro" element={<Vanssplitonpro productHeader="Miesten skeittikengät" name="Vans Split On Pro 50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="SkateboardWomen/vanssplitonpro" element={<Vanssplitonpro productHeader="Naisten skeittikengät" name="Vans Split On Pro 50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="SkateboardMen/vansauthentic" element={<VansAuthentic productHeader="Miesten skeittikengät" name="Vans Authentic 50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="SkateboardWomen/vansauthentic" element={<VansAuthentic productHeader="Naisten skeittikengät" name="Vans Authentic 50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="SkateboardMen/nikeblazer" element={<NikeBlazer productHeader="Miesten skeittikengät" name="Nike Blazer 60€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="SkateboardWomen/nikeblazer" element={<NikeBlazer productHeader="Naisten skeittikengät" name="Nike Blazer 60€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="SkateboardMen/reebok" element={<Reebook productHeader="Miesten skeittikengät" name="Reebok 90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="SkateboardWomen/reebok" element={<Reebook productHeader="Naisten skeittikengät" name="Reebok 90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>

    </Routes>
    <Footer/>
   </>
  );
}

export default App;
