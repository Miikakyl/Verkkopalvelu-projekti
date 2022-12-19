import { useEffect, useState } from 'react';
import '../styles/ShoppingCartItem.css'
import LoadingIcon from './LoadingIcon'
import axios from 'axios'

const ShoppingcartItem = ({deleteFunction,shoppingcartItem,shoppingCartItems}) => {
    const [itemImage, setItemImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
        axios.get('http://localhost/Verkkopalvelu-backend/rest_shoppingcartImage.php?productName=' + shoppingcartItem.name)
            .then((response) => {
                setIsLoaded(true)
                shoppingcartItem.image = response.data.kuvaosoite
                setItemImage(response.data.kuvaosoite)
                localStorage.setItem('shoppingcart',JSON.stringify(shoppingCartItems))
            }).catch(error => {
                alert(error)
            })
    }, [])

    return (
        <div className="d-flex border-bottom border-white py-3 w-100">
            {isLoaded
                ? <>
                    <img className="productImage" src={require("../" + itemImage)} alt=""></img>
                    <div className="productInfoContainer d-flex flex-column align-items-start px-2">
                        <h1 className="productName">{shoppingcartItem.name}</h1>
                        <h2 className="productPrice">{shoppingcartItem.price}€</h2>
                        <p className="productInfoText">Koko: {shoppingcartItem.size}</p>
                        <p className="productInfoText">kpl: {shoppingcartItem.quantity}</p>
                        <p className="productInfoText">Väri: {shoppingcartItem.color}</p>
                    </div>
                    <div>
                        <button className="deleteProductBtn" onClick={() => { deleteFunction(shoppingcartItem.uuid) }}>
                            <svg className="deleteProduct bi bi-trash" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </div>
                </>
                : <LoadingIcon />
            }
        </div>
    );
}

export default ShoppingcartItem;