import { Routes, Route} from "react-router-dom"
import react, {useState,useEffect} from 'react'
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'
import Brands from './components/Brands'
import WalkShoes from "./components/WalkShoes"
import SkateBoard from "./components/SkateBoard"
import Basketball from "./components/Basketball"
import Information from "./components/Information"
import ShoppingcartSite from "./components/ShoppingcartSite"
import Register from './components/Register'
import AdminPanel from './components/AdminPanel'
import Format from "./components/Format"

import WalkShoesM from "./Kuvat/Sivustokuvat/photo.jpg"
import WalkShoesW from "./Kuvat/Sivustokuvat/walkingWomen.jpg"

import NikeAirforce from "./components/productpage-walk/Nikeairforce"
import NikeAirforce720 from "./components/productpage-walk/Nikeairforce720"
import AdidasY3 from "./components/productpage-walk/Adidasy3"
import NikeAirforce97 from "./components/productpage-walk/Nikeairforce97"
import Yeezy from "./components/productpage-walk/Yeezy"
import Adidasgazelle from "./components/productpage-walk/Adidasgazelle"

import BasketBallM from "./Kuvat/Sivustokuvat/Basketball.jpg"
import BasketBallW from "./Kuvat/Sivustokuvat/basketballWomen.jpg"

import Jordan1low from "./components/productpage-basket/Jordan1low"
import Jordan1mid from "./components/productpage-basket/Jordan1mid"
import NikeKD from "./components/productpage-basket/Nikekd"
import Converse from "./components/productpage-basket/Converse"
import Reebok from "./components/productpage-basket/Reebok"

import Vansspliton from "./components/productpage-skate/Vansspliton"
import Vanssplitonpro from "./components/productpage-skate/Vanssplitonpro"
import VansAuthentic from "./components/productpage-skate/Vansauthentic"
import NikeBlazer from "./components/productpage-skate/Nikeblazer"
import Reebook from "./components/productpage-skate/Reebok"

import SkateBoardM from "./Kuvat/Sivustokuvat/Skatebackground.jpg"
import SkateBoardW from "./Kuvat/Sivustokuvat/skateboardingWomen.jpg"

import BasketballM from "./Kuvat/Sivustokuvat/Basketball.jpg"
import BasketballW from "./Kuvat/Sivustokuvat/basketballWomen.jpg"
import WalkingM from "./Kuvat/Sivustokuvat/photo.jpg"
import WalkingW from "./Kuvat/Sivustokuvat/walkingWomen.jpg"
import SkateboardM from "./Kuvat/Sivustokuvat/Skatebackground.jpg"
import SkateboardW from "./Kuvat/Sivustokuvat/skateboardingWomen.jpg"

import bannerImage from './Kuvat/Sivustokuvat/InformationBanner.jpg'
import carouselImage1 from './Kuvat/Sivustokuvat/carouselPicture1.png'
import carouselImage2 from './Kuvat/Sivustokuvat/carouselPicture2.jpg'


const App = () => {
  const [cartItem, setCartItem] = useState(null)
  const [navbarHidden,setNavbarHidden] = useState(false)
  const [footerHidden,setFooterHidden] = useState(false)
  
  const sendShoppingItem = (productData) => {
    setCartItem(null)
    setCartItem(productData)
  }
  return (
   <>
    {navbarHidden
      ? null
      : <Nav shoppingcartItem={cartItem}/>
    }
    <Routes>
      <Route path="~n1kymi00" element={<FrontPage/>}></Route>
      <Route path="~n1kymi00/SkateboardWomen" element={<SkateBoard categoryHeader="Naisten skeittikengät" picture={[SkateboardW]}/>}></Route>
      <Route path="~n1kymi00/SkateboardMen" element={<SkateBoard categoryHeader="Miesten skeittikengät" picture={[SkateboardM]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen" element={<WalkShoes categoryHeader="Naisten kävelykengät" picture={[WalkingW]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesMen" element={<WalkShoes categoryHeader="Miesten kävelykengät" picture={[WalkingM]}/>}></Route>
      <Route path="~n1kymi00/BasketballWomen" element={<Basketball categoryHeader="Naisten koripallokengät" picture={[BasketballW]}/>}></Route>
      <Route path="~n1kymi00/BasketballMen" element={<Basketball categoryHeader="Miesten koripallokengät" picture={[BasketballM]}/>}></Route>
      <Route path="~n1kymi00/Brands" element={<Brands/>}></Route>~n1kymi00
      <Route path="~n1kymi00/Information" element={<Information banner = {[bannerImage]} bannerHeader="Tietoa meistä" carousel1 = {[carouselImage1]} carousel2 = {[carouselImage2]}/>}></Route>
      <Route path="~n1kymi00/ShoppingcartSite" element={<ShoppingcartSite navbarHidingState={setNavbarHidden}/>}></Route>
      <Route path="~n1kymi00/Register" element={<Register navbarHidingState={setNavbarHidden} footerHidingState={setFooterHidden} />}></Route>
      <Route path="~n1kymi00/Format" element={<Format navbarHidingState={setNavbarHidden} footerHidingState={setFooterHidden} />}></Route>
      <Route path="~n1kymi00/AdminPanel" element={<AdminPanel  footerHidingState={setFooterHidden} />}></Route>
      <Route path="~n1kymi00/WalkshoesMen/nikeairforce" element={<NikeAirforce callback={sendShoppingItem} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 1" price={100} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen/nikeairforce" element={<NikeAirforce callback={sendShoppingItem} walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce 1" price={100}  information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesMen/nikeairforce720" element={<NikeAirforce720 callback={sendShoppingItem} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 720" price={120} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: italia"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen/nikeairforce720" element={<NikeAirforce720 callback={sendShoppingItem} walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce 720" price={120} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: italia"]} color={["Musta", "Violetti"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesMen/adidasy3" element={<AdidasY3 walk={[WalkShoesM]} callback={sendShoppingItem} productHeader="Miesten kävelykengät" name="Adidas Y3" price={100} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: intia"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen/adidasy3" element={<AdidasY3 walk={[WalkShoesW]} callback={sendShoppingItem} productHeader="Naisten kävelykengät" name="Adidas Y3" price={100} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: intia"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesMen/nikeairforce97" element={<NikeAirforce97 callback={sendShoppingItem} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 97" price={100} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen/nikeairforce97" element={<NikeAirforce97 callback={sendShoppingItem} walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce 97" price={100} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesMen/yeezy" element={<Yeezy walk={[WalkShoesM]} callback={sendShoppingItem} productHeader="Miesten kävelykengät" name="Yeezy" price={200} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen/yeezy" element={<Yeezy walk={[WalkShoesW]} callback={sendShoppingItem} productHeader="Naisten kävelykengät" name="Yeezy" price={200} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesMen/adidasgazelle" element={<Adidasgazelle callback={sendShoppingItem} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Gazelle" price={200} information={["Istuvuus: normaali", "Ylä: 100% mokkanahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/WalkshoesWomen/adidasgazelle" element={<Adidasgazelle callback={sendShoppingItem} walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Adidas Gazelle" price={200} information={["Istuvuus: normaali", "Ylä: 100% mokkanahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="~n1kymi00/BasketballMen/jordan1low" element={<Jordan1low callback={sendShoppingItem} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 low" price={170} information={["Istuvuus: normaali", "Ylä: 100% mokkanahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/BasketballWomen/jordan1low" element={<Jordan1low callback={sendShoppingItem} basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Jordan 1 low" price={170} information={["Istuvuus: normaali", "Ylä: 100% mokkanahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/BasketballMen/jordan1mid" element={<Jordan1mid callback={sendShoppingItem} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 Mid" price={170} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/BasketballWomen/jordan1mid" element={<Jordan1mid callback={sendShoppingItem} basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Jordan 1 Mid" price={170} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/BasketballMen/nikekd" element={<NikeKD callback={sendShoppingItem} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Nike KD" price={70} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: intia"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/BasketballWomen/nikekd" element={<NikeKD callback={sendShoppingItem} basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Nike KD" price={70} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: intia"]} color={["Harmaa"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/BasketballMen/converse" element={<Converse callback={sendShoppingItem} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Converse" price={120} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: italia"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/BasketballWomen/converse" element={<Converse callback={sendShoppingItem} basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Converse" price={120} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: italia"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/BasketballMen/reebok" element={<Reebok callback={sendShoppingItem} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Reebok" price={90} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/BasketballWomen/reebok" element={<Reebok callback={sendShoppingItem} basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Reebok" price={90} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="~n1kymi00/SkateboardMen/vansspliton" element={<Vansspliton callback={sendShoppingItem} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Slip On" price={40} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/SkateboardWomen/vansspliton" element={<Vansspliton callback={sendShoppingItem} skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Vans Slip On" price={40} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: kiina"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/SkateboardMen/vanssplitonpro" element={<Vanssplitonpro callback={sendShoppingItem} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Slip On Pro" price={50}  information={["Istuvuus: normaali", "Ylä: 100% mokkanahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/SkateboardWomen/vanssplitonpro" element={<Vanssplitonpro callback={sendShoppingItem} skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Vans Slip On Pro" price={50} information={["Istuvuus: normaali", "Ylä: 100% mokkanahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/SkateboardMen/vansauthentic" element={<VansAuthentic callback={sendShoppingItem} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Authentic" price={50} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/SkateboardWomen/vansauthentic" element={<VansAuthentic callback={sendShoppingItem} skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Vans Authentic" price={50} information={["Istuvuus: normaali", "Ylä: 100% puuvilla", "Ylävuori: 100% puuvilla", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/SkateboardMen/nikeblazer" element={<NikeBlazer callback={sendShoppingItem} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Nike Blazer" price={60} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: italia"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/SkateboardWomen/nikeblazer" element={<NikeBlazer callback={sendShoppingItem} skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Nike Blazer" price={60} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% puuvilla", "Ulkopohja: 100% kumia", "Valimistettu: italia"]} color={["Harmaa"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="~n1kymi00/SkateboardMen/reebok" element={<Reebook callback={sendShoppingItem} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Reebok" price={90} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: intia"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="~n1kymi00/SkateboardWomen/reebok" element={<Reebook callback={sendShoppingItem} skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Reebok" price={90} information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: intia"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
    </Routes>
    {footerHidden
      ? null
      : <Footer/>
    }
   </>
  );
}

export default App;