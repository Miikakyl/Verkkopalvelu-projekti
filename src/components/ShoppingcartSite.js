import "../styles/ShoppingcartSite.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ShoppingcartSiteItem from "./ShoppingcartSiteItem";


const ShoppingcartSite = (props) => {
    const [shoppingCartItems, setShoppingCartItems] = useState([])
    const [totalPrice,setTotalPrice] = useState()

    const deleteShoppingcartItem = (uuid) => {
        const shoppingcartWithoutRemoved = shoppingCartItems.filter(item => item.uuid !== uuid)
        setShoppingCartItems(shoppingcartWithoutRemoved)
        localStorage.setItem('shoppingcart', JSON.stringify(shoppingcartWithoutRemoved))
        setTotalPrice(totalPrice - shoppingCartItems.filter(item => item.uuid === uuid)[0].price)
    }

    useEffect(() => {
        
        props.navbarHidingState(true)
        setShoppingCartItems(JSON.parse(localStorage.getItem('shoppingcart')))

        return () => {
            props.navbarHidingState(false)
        }
    }, [])


    return (
        <div id="Shoppingcart">

            <div class="container">

                <div id='header' class="col-9">
                    <h1>Ostoskori</h1>
                </div>

                <div></div>

                {shoppingCartItems.map((shoppingcartItem) =>
                    <ShoppingcartSiteItem shoppingcartItem={shoppingcartItem} deleteShoppingcartItem={deleteShoppingcartItem} />
                )
                }


                <div id='total' class="col-12">
                    <p id="totalText">Yhteensä: <span>{totalPrice}</span></p>
                </div>

                <div class="col-12 d-flex justify-content-center m-b-5">
                    <Link to="/Format" id='checkOutButton' onClick={() => {console.log(shoppingCartItems)}}>Jatka maksamaan</Link>
                </div>
                <div class="col-12 d-flex justify-content-center  m-b-5">
                    <Link to="/" id="backButton">
                        Takaisin kotisivulle
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ShoppingcartSite;