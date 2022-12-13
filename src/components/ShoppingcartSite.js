import "../styles/ShoppingcartSite.css"
import { Link } from "react-router-dom";
import React,{ useEffect } from "react";
import { useState } from "react";


const ShoppingcartSite = (props) => {

   useEffect(() => {
    props.navbarHidingState(true)
   
     return () => {
        props.navbarHidingState(false)
     }
   }, [])


    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);

    if(counter<=0) {
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

      if(counter<=1) {
        decrementCounter = () => setCounter(1);
      }

    
    return (
        <div id="Shoppingcart">

            <div class="container">

                <div id='header' class="col-9">
                    <h1>Ostoskori</h1>
                </div>

                <div></div>

                <div class="container" id="order">
                    <div class="row d-flex align-items-center justify-content-center" >
                        <div class="col-lg-2">
                            <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Nike_AirForce_1/Nike_AirForce_1_1.png')} alt="" id="image"/>
                        </div>
                        <div class="col-lg-2 text-center" id='productName'>
                            <p>Air Force 1: <span>100,00€</span></p>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-6 text-center" id="">
                            <p>Koko: 32</p>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-6 text-center">
                            <p>Väri: musta</p>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-6 text-center d-flex justify-content-center" id="amount">
                            <ButtonIncrement onClickFunc={decrementCounter} />
                                    <Display message={counter} />
                            <ButtonDecrement onClickFunc={incrementCounter} />
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-center" id="remove">
                            <button id='removeButton'><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>

                <div id='total' class="col-12">
                    <p id="totalText">Yhteensä: <span>1200€</span></p>
                </div>

                <div class="col-12 d-flex justify-content-center m-b-5">
                    <Link to="/Format" id='checkOutButton'>Jatka maksamaan</Link>
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