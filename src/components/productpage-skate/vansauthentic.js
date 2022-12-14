import '../../styles/product.css'
import react, {useEffect, useState} from 'react'
import uuid from 'react-uuid'


const Vansauthentic = (props) => {
    const [shoeColor, setShoeColor] = useState("")
    const [shoeSize, setShoeSize] = useState("")

    const addToCart = (e) => {
        e.preventDefault()

        let productData = {
            "name": props.name,
            "color": shoeColor ? shoeColor : props.color[0],
            "size": shoeSize ? shoeSize : props.shoeSize[0],
            "price": props.price,
            "quantity": 1,
            "uuid": uuid()

        }
        props.callback(productData)
    }
    return (
        <div id="product">

            <div className="col-12 ">
            <img src= {props.skate} alt=""/>
            </div>

            <div className="col-12">
                <p>30 päivän palautusoikeus</p>
                <p>Ilmainen toimitus ja palautus</p>
            </div>

            <div className="col-12 header">
                <h1>{props.productHeader}</h1>
            </div>

            <div className="container product">
                <div className="row">

                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <div className="d-sm-none carousel-item active col-xs-12">
                        <img className="d-block w-100" src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>              
                        </div>

                        <div className="d-sm-none carousel-item col-xs-12">
                        <img className="d-block w-100" src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_2.png')} alt=""/>
                        </div>

                        <div className="d-sm-none carousel-item col-xs-12">
                        <img className="d-block w-100" src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_3.png')} alt=""/>
                        </div>

                        
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="bi bi-caret-left-square-fill" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="bi bi-caret-right-square-fill"aria-hidden="true"></span>
                        <span className="sr-only"></span>
                        </a>
                        </div>
                        </div>

                        <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>              
                        </div>

                        <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_2.png')} alt=""/>
                        </div>

                        <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_3.png')} alt=""/>
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 d-flex colorbox">

                        <form onSubmit={addToCart}>
                        <h1>{props.name} {props.price}€</h1>
                        <h4>Valitse väri</h4>
                        <select>
                            {props.color.map((color) => <option key={uuid()}  value={color} onClick={(e) => {setShoeColor(e.target.value)}}>{color}</option>)}
                        </select>
                        <h4>Valitse kokoluokka</h4>
                        <select>
                            {props.shoeSize.map((size) => <option key={uuid()} value={size} onClick={(e) => {setShoeSize(e.target.value)}}>{size}</option>)}
                        </select>
                        <button type="submit">Lisää koriin</button>
                        </form>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>
                        </div>

                        <div className="line col-12"></div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                            <h1>Tuotetiedot</h1>
                            <ul>
                                {props.information.map((information) => <li key={uuid()} >{information}</li>)}
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                            <h1>Toimitus&palautus</h1>
                            <ul>
                            <li>Tuotteilla on ilmaiset toimitukset</li>
                            <li>Tarjoamme 30 päivän palautusoikeuden</li>
                            </ul>
                        </div>
    

                </div>
            </div>
        </div>
    )
}

export default Vansauthentic