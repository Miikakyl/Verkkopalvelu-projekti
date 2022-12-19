import '../styles/format.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate} from "react-router-dom";
import uuid from 'react-uuid'


function Format(props) {
    const [paymentOptions, setPaymentOptions] = useState(["Osuuspankki", "Danskebank", "S-Pankki", "Ålandsbaken", "Handelsbanken", "Aktia", "Pop-Pankki"])
    const [shippingOptions, setShippingOptions] = useState(["Kotiinkuljetus", "Myymälä", "Automaatti"])

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [shipping, setShipping] = useState(paymentOptions[0])
    const [pay, setPay] = useState(shippingOptions[0])
    const [totalPrice, setTotalPrice] = useState()
    const navigate = useNavigate()

    const routeChange = () => {
        let path = `/ShoppingcartSite`;
        navigate(path);
    }

    useEffect(() => {
        
        let total = 0;
        let cart = JSON.parse(localStorage.getItem('shoppingcart'))
        cart.forEach((item) =>
            total = total + (item.price * item.quantity)
        )
        setTotalPrice(total)

        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            "fname": firstname,
            "lname": lastname,
            "email": email,
            "address": address,
            "zipcode": zipcode,
            "phone": phonenumber,
            "shipping": shipping,
            "payment": pay,
            "date": new Date().toISOString().slice(0, 10)
        }
        const shoppingcart = JSON.parse(localStorage.getItem('shoppingcart'))
        const json = {
            "userInfo": userInfo,
            "shoppingcart": shoppingcart
        }
        
         axios.post('./Verkkopalvelu-backend/rest_addCustomersOrder.php', JSON.stringify(json),{withCredentials:true}, {
         headers: {
           'Content-type': 'application/json'
         }
       })
         .then((response) => {
            if(response.data === true){
                alert("Maksutapahtuma on hyväksytty ja tilauksesi lähetettiin eteenpäin")
                localStorage.removeItem('shoppingcart')
                setTimeout(navigate("/"), 5000)

            }
         }).catch(error => {
           alert(error)
         })
    }

    return (
        <div>
            <div id="format">
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                <h2>Täytä tiedot</h2>
                            </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Etunimi*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Sukunimi*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Sähköposti*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Osoite*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input value={address} onChange={(e) => { setAddress(e.target.value) }} type="text" required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Postinumero*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input value={zipcode} onChange={(e) => { setZipcode(e.target.value) }} type="text" required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Puhelinnumero*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} type="text" required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <h3>Valitse toimitustapa</h3>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <select>
                                        {shippingOptions.map((option =>
                                            <option key={uuid()} value={option} onClick={(e) => { setShipping(e.target.value) }}>{option}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <h3>Valitse maksutapa</h3>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <select>
                                        {paymentOptions.map((option =>
                                            <option key={uuid()} value={option} onClick={(e) => { setPay(e.target.value) }}>{option}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <h3>Yhteenveto</h3>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-1 summa">
                                    <span>Ostokset yhteensä</span>
                                    <span>{totalPrice}€</span>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <button type="submit">Vahvista maksutapahtuma</button>

                                </div>
                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">

                                    <button onClick={routeChange} type="button">Palaa takaisin ostoskoriin</button>
                                </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}


export default Format