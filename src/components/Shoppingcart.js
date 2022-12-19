import ShoppingcartItem from './ShoppingcartItem';
import React, { useState, useEffect } from 'react';
import '../styles/shoppingcart.css'
import { Link } from 'react-router-dom';

const Shoppingcart = (props) => {

  const [isActive, setIsActive] = useState(false)
  const [shoppingCartItems, setShoppingCartItems] = useState([])
  const [totalPrice,setTotalPrice] = useState()
  

  const handleClick = () => {

    setIsActive(!isActive)
  }

  const deleteShoppingcartItem = (uuid) => {
    const shoppingcartWithoutRemoved = shoppingCartItems.filter(item => item.uuid !== uuid)
    setShoppingCartItems(shoppingcartWithoutRemoved)
    localStorage.setItem('shoppingcart',JSON.stringify(shoppingcartWithoutRemoved))
    setTotalPrice(totalPrice - shoppingCartItems.filter(item => item.uuid === uuid)[0].price)
  }

  const checkIfPicked = () => {
    let index = shoppingCartItems.findIndex((item => item.name === props.shoppingcartItem.name && item.size == props.shoppingcartItem.size
    ))
    if(index !== -1){
        shoppingCartItems[index].quantity += 1
        localStorage.removeItem(shoppingCartItems[index])
        localStorage.setItem('shoppingcart',JSON.stringify(shoppingCartItems))
        return true;
    }
    return false;
  }

  useEffect(() => {

    if (props.shoppingcartItem) { 
        const isPicked = checkIfPicked()
        if(!isPicked) {
          setShoppingCartItems([...shoppingCartItems, props.shoppingcartItem])
          localStorage.setItem('shoppingcart',JSON.stringify([...shoppingCartItems, props.shoppingcartItem]))
        }
        
    }
    if ('shoppingcart' in localStorage) {
      let oldCart = JSON.parse(localStorage.getItem('shoppingcart'))
      setShoppingCartItems(oldCart)
      let oldTotal = 0;
      oldCart.forEach((item) => 
        oldTotal = oldTotal + (item.price * item.quantity)
      )
      setTotalPrice(oldTotal)
    }
  }, [props.shoppingcartItem])
  
  return (
    <div className="shoppingcartContainer">
      <button id="shoppincartBtn" onClick={handleClick}>
        {shoppingCartItems.length > 0 &&
          <div className="itemCounter">
            <p>{shoppingCartItems.length}</p>
          </div>
        }
        <svg style={{ color: isActive ? "#F8A700" : "white" }} id="shoppingcartIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>

      <div className="shoppingcartShow" style={{ display: isActive ? "block" : "none" }}>
        {shoppingCartItems.length !== 0 &&
          <>
            <div className="shoppingcartArea p-4 w-100 h-100">
              <h2 className="shoppingcartHeader px-1">Ostoskori</h2>
              {shoppingCartItems.map((item) =>
                <ShoppingcartItem key={item.uuid} deleteFunction={deleteShoppingcartItem} shoppingcartItem={item} shoppingCartItems={shoppingCartItems}/>
              )}
            </div>
            <div className="checkoutBtnArea d-flex flex-column">
            <p className="checkoutTexts mx-4">Tilauksen arvio: {totalPrice}€</p>
              <p className="checkoutTexts mx-4">Toimituksen kustannukset: 4,99€</p>
              <p className="checkoutTexts mx-4">Yhteensä: {totalPrice + 4.99}€</p>
               <Link to="/ShoppingcartSite" onClick={() => {setShoppingCartItems([])}} className='shoppingcartBtns p-1 mb-2'>Jatka kassalle</Link>
              <button className="shoppingcartBtns p-1 mb-4">Tyhjennä</button>
            </div>
          </>
        }
        {shoppingCartItems.length === 0 &&
          <h3 className='emptyText'>Ostoskori on tyhjä</h3>
        }
      </div>
    </div>
  );
}
export default Shoppingcart;