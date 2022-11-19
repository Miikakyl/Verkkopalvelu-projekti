import '../styles/SkateBoard.css'
import { Link } from 'react-router-dom'

function SkateBoard() {
    return (
        <div id="SkateBoard">

            <div className="col-12 ">
            <img src={require('../Kuvat/Sivustokuvat/Skatebackground.jpg')} alt=""/>
            </div>

            <div className="col-12">
                <p>30 päivän palautusoikeus</p>
                <p>Ilmainen toimitus ja palautus</p>
            </div>

            <div className="col-12">
                <h1>Miesten skeittikengät</h1>
            </div>

            <div className="container skate">
                <div className="row">

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_SlipOn/Vans_SlipOn_1.png')} alt=""/>
                        <h4>Vans Split On</h4>
                        <p>40,00€</p>
                        <span></span>
                        </Link>                   
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_SlipOn_Pro/Vans_SlipOn_Pro_1.png')} alt=""/>
                        <h4>Vans Split On Pro</h4>
                        <p>50,00€</p>
                        <span></span>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>
                        <h4>Vans Authentic</h4>
                        <p>50,00€</p>
                        <span></span>
                        </Link> 
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Nike_Blazer_Low/Nike_Blazer_Low_1.png')} alt=""/>
                        <h4>Nike Blazer</h4>
                        <p>60,00€</p>
                        <span></span>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="#">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Reebok/Reebok_1.png')} alt=""/>
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

export default SkateBoard