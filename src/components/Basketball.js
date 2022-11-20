import '../styles/Basketball.css'
import { Link } from 'react-router-dom'

const Basketball = (props) => {
    return (
        <div id="Basketball">
            <div className="col-12 ">
                <img src={require('../Kuvat/Sivustokuvat/Basketball.jpg')} alt="" />
            </div>

            <div className="col-12">
                <p>30 päivän palautusoikeus</p>
                <p>Ilmainen toimitus ja palautus</p>
            </div>

            <div className="col-12">
                <h1>{props.categoryHeader}</h1>
            </div>

            <div className="container Basketball">
                <div className="row">

                    <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                            <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Jordan_1_Low/Jordan_1_Low_1.jpg')} alt="" />
                            <h4>Jordan 1 Low</h4>
                            <p>150,00€</p>
                            <span></span>
                        </Link>
                    </div>

                    <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                            <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Jordan_1_Mid/Jordan_1_Mid_1.png')} alt="" />
                            <h4>Jordan 1 Mid</h4>
                            <p>50,00€</p>
                            <span></span>
                        </Link>
                    </div>

                    <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                            <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt="" />
                            <h4>Vans Authentic</h4>
                            <p>50,00€</p>
                            <span></span>
                        </Link>
                    </div>

                </div>
                <div className="row">

                    <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                            <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Nike_Blazer_Low/Nike_Blazer_Low_1.png')} alt="" />
                            <h4>Nike Blazer</h4>
                            <p>60,00€</p>
                            <span></span>
                        </Link>
                    </div>

                    <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                            <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Reebok/Reebok_1.png')} alt="" />
                            <h4>Reebok</h4>
                            <p>90,00€</p>
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Basketball