import '../styles/ShoppingcartSiteItem.css'
import React, { useState } from 'react';

const ShoppingcartSiteItem = ({ shoppingcartItem, deleteShoppingcartItem, totalPrice,setTotalPrice}) => {

    const [counter, setCounter] = useState(shoppingcartItem.quantity);

    const incrementCounter = () => {
        setCounter(counter + 1);
        shoppingcartItem.quantity += 1
        setTotalPrice(totalPrice + shoppingcartItem.price)
        const updatedShoppingcart = JSON.parse(localStorage.getItem('shoppingcart')).filter(item => item.uuid !== shoppingcartItem.uuid)
        localStorage.setItem('shoppingcart',JSON.stringify([...updatedShoppingcart,shoppingcartItem]))
    }
    let decrementCounter = () => {
        setCounter(counter - 1)
        shoppingcartItem.quantity -= 1
        setTotalPrice(totalPrice - shoppingcartItem.price)
        const updatedShoppingcart = JSON.parse(localStorage.getItem('shoppingcart')).filter(item => item.uuid !== shoppingcartItem.uuid)
        localStorage.setItem('shoppingcart',JSON.stringify([...updatedShoppingcart,shoppingcartItem]))
    }

    if (counter === 0) {
        decrementCounter = () => setCounter(1);
    }

    function ButtonIncrement(props) {

        return (
            <button onClick={props.onClickFunc} id="decrementButton">
                -
            </button>
        )
    }

    function ButtonDecrement(props) {

        return (
            <button onClick={props.onClickFunc} id="incrementButton">
                +
            </button>
        )
    }

    function Display(props) {
        return (

            <label >{props.message}</label>
        )
    }

    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    return (
        <div className="container" id="order">
            <div className="row d-flex align-items-center justify-content-center" >
                <div className="col-lg-2">
                    <img src={require("../" + shoppingcartItem.image)} alt="" id="image" />
                </div>
                <div className="col-lg-2 text-center" id='productName'>
                    <p>{shoppingcartItem.name}<span>{shoppingcartItem.price}€</span></p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center" id="">
                    <p>{shoppingcartItem.size}</p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center">
                    <p>{shoppingcartItem.color}</p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-center d-flex justify-content-center" id="amount">
                    <ButtonIncrement onClickFunc={decrementCounter} />
                    <Display message={counter} />
                    <ButtonDecrement onClickFunc={incrementCounter} />
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-center" id="remove">
                    <button id="removeButton" onClick={() => { deleteShoppingcartItem(shoppingcartItem.uuid) }}>
                        <svg className="deleteProduct bi bi-trash" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingcartSiteItem;