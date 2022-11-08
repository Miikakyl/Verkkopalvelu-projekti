import ShoppingcartItem from './ShoppingcartItem';
import '../styles/shoppingcart.css'
const Shoppingcart = () => {
    return (
        <div className="position-relative shoppingcartContainer">
              <button id="shoppincartBtn">
                <svg id="shoppingcartIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </button>
              <div id="shoppingcartShow">
                <div className="shoppingcartArea p-4 w-100 h-100">
                  <h2 className="text-white px-1">Ostoskori</h2>
                  <ShoppingcartItem name={"Adidas Y3"} price={"200,00"} image={require('../Kuvat/Tuotekuvat/Adidas_Y3/Adidas_Y3_1.png')} />
                  <ShoppingcartItem name={"Vans Slip-On"} price={"170,00"} image={require('../Kuvat/Tuotekuvat/Vans_SlipOn/Vans_SlipOn_1.png')} />
                  <ShoppingcartItem name={"Nike Blazer Low"} price={"100,00"} image={require('../Kuvat/Tuotekuvat/Nike_Blazer_Low/Nike_Blazer_Low_1.png')} />
                </div>
                <div className="checkoutBtnArea d-flex justify-content-center align-items-center">
                  <button className="checkoutBtn p-1 w-100 m-4">Jatka kassalle</button>
                </div>
              </div>
            </div>
      );
}
 
export default Shoppingcart;