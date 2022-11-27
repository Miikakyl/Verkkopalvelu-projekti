import '../../styles/product.css'


const yeezy = (props) => {
    return (
        <div id="product">

            <div className="col-12 ">
            <img src= {require('../../Kuvat/Sivustokuvat/photo.jpg')} alt=""/>
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

                        <div className="col-xs-12 col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Yeezy/Yeezy_1.png')} alt=""/>              
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Yeezy/Yeezy_2.png')} alt=""/>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Yeezy/Yeezy_3.png')} alt=""/>
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 d-flex colorbox">

                        <form>
                        <h1>{props.name}</h1>
                        <h4>Valitse väri</h4>
                        <select>
                            {props.color.map((color) => <option>{color}</option>)}
                        </select>
                        <h4>Valitse kokoluokka</h4>
                        <select>
                            {props.shoeSize.map((size) => <option>{size}</option>)}
                        </select>
                        <button type="submit">Lisää koriin</button>
                        </form>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Yeezy/Yeezy_1.png')} alt=""/>
                        </div>

                        <div className="line col-12"></div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                            <h1>Tuotetiedot</h1>
                            <ul>
                                {props.information.map((information) => <li>{information}</li>)}
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

export default yeezy