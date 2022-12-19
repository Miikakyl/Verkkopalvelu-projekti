import "../styles/ShoppingcartSite.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ShoppingcartSiteItem from "./ShoppingcartSiteItem";
import uuid from 'react-uuid'


const ShoppingcartSite = (props) => {
    const [shoppingCartItems, setShoppingCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()

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

    useEffect(() => {
        let total = 0;

        let cart = JSON.parse(localStorage.getItem('shoppingcart'))
        setShoppingCartItems(cart)
        cart.forEach((item) =>
            total = total + (item.price * item.quantity)
        )
        setTotalPrice(total)

    }, [])

    return (
        <div id="Shoppingcart">

            <div className="container">

                <div id='header' className="col-9">
                    <h1>Ostoskori</h1>
                </div>

                <div></div>

                {shoppingCartItems.map((shoppingcartItem) =>
                    <ShoppingcartSiteItem key={uuid()} shoppingcartItem={shoppingcartItem} deleteShoppingcartItem={deleteShoppingcartItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                )
                }

                <div id='total' className="col-12">
                    <p id="totalText">Yhteensä: <span>{totalPrice}€</span></p>
                </div>

                <div className="col-12 d-flex justify-content-center m-b-5">
                    <Link to="/Format" id='checkOutButton' onClick={() => { console.log(shoppingCartItems) }}>Jatka maksamaan</Link>
                </div>
                <div className="col-12 d-flex justify-content-center  m-b-5">
                    <Link to="/" id="backButton">
                        Takaisin kotisivulle
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ShoppingcartSite;