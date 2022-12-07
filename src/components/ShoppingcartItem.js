import { useEffect, useState } from 'react';
import '../styles/shoppingcartItem.css'
import LoadingIcon from './LoadingIcon'
import axios from 'axios'

const ShoppingcartItem = (props) => {
    const [itemImage, setItemImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
        axios.get('http://localhost:3000/rest_shoppingcartImage.php?productName=' + props.name)
            .then((response) => {
                setIsLoaded(true)
                setItemImage(response.data.kuvaosoite)
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
                        <h1 className="productName">{props.name}</h1>
                        <h2 className="productPrice">{props.price}€</h2>
                        <p className="productInfoText">Kappale: {props.kpl}</p>
                        <p className="productInfoText">Koko: {props.koko}</p>
                        <p className="productInfoText">Väri: {props.vari}</p>
                    </div>
                    <div>
                        <button className="deleteProductBtn" onClick={() => { props.deleteFunction(props.id) }}>
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