import react, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/register.css'
import logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'


const Register = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])
    
    const registerUser = (e) => {
        e.preventDefault()
        if (password !== "" && username !== "") {
            let message = {
                "username": username,
                "pw": password
            }

            axios.post('http://localhost/Verkkopalvelu-backend/rest_register.php', JSON.stringify(message), {
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((response) => {
                    if(response.data === "Tervetuloa Collect Shoes kantajäseneksi!") {
                        alert(response.data)
                        localStorage.setItem('shoppingcart',JSON.stringify([]))
                        setTimeout(navigate("/"), 1000)
                    }
                    else {
                        alert(response.data)
                    }
                }).catch(error => {
                    alert(error)
                })
        }
    }

    function Back () {
        navigate("/")
      }

    return (
        <div className="container-fluid registerContainer">
            <div className="row">
                <div className="col-12">
                    <form className="registerForm" onSubmit={registerUser}>
                        <img className="logo" src={logo} alt=""></img>
                        <p className="inputLabels mt-0 mb-2">Sähköposti*</p>
                        <input className="registerInputs mb-2" type="email" onChange={(e) => { setUsername(e.target.value) }} required></input>
                        <p className="inputLabels mb-2">Salasana*</p>
                        <input className="registerInputs w-100" type="password"onChange={(e) => { setPassword(e.target.value) }} required></input>
                        <button className="registerButtons mx-0 d-block" type="submit">Luo uusi tunnus</button>
                        <button type="button" id="frontPageLink" className="registerButtons mx-0" onClick={Back}>Palaa takaisin</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;