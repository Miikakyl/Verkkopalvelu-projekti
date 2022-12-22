import '../styles/LoginForm.css'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function LoginForm() {

    const [isActive, setIsActive] = useState(false)
    const [logged, setLogged] = useState(false)
    const [adminPanel, setAdminPanel] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        
        axios.post('https://www.students.oamk.fi/~n1kymi00/Verkkopalvelu-backend/rest_login.php', {},{withCredentials:true}, {
        })
            .then((response) => {
                if(response.data[1] === true) {
                    setAdminPanel(true)
                    setUsername(response.data[0])
                    setLogged(true)
                }
                else if(response.data[1] === false) {
                    setLogged(true)
                    setUsername(response.data[0])
                }
            }).catch(error => {
                alert(error)
            })
    },[])

    const handleClick = () => {
        setIsActive(!isActive)
    }
    const logoutUser = () => {
        axios.post('https://www.students.oamk.fi/~n1kymi00/Verkkopalvelu-backend/rest_logout.php',{},{withCredentials:true})
      .then((response) => {
        alert(response.data)
        setLogged(false)
        setAdminPanel(false)
      }).catch(error => {
        alert(error)
      })
    }
    const loginUser = (e) => {
        e.preventDefault()
        let message = {
            "username": username,
            "pw": password
        }

        axios.post('https://www.students.oamk.fi/~n1kymi00/Verkkopalvelu-backend/rest_login.php', JSON.stringify(message),{withCredentials:true}, {
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((response) => {
                if(response.data[1] === true) {
                    setAdminPanel(true)
                    setLogged(true)
                }
                else if(response.data[1] === false) {
                    setLogged(true)
                }
                else{
                    alert("väärä käyttäjäntunnus tai salasana")
                }
            }).catch(error => {
                alert(error)
            })
    }
    return (
        <div className="loginFormContainer">

            <button id="loginSignBtn" onClick={handleClick}>
                {logged
                    ? <svg style={{ color: isActive ? "#F8A700" : "white" }} id="loggedIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    : <svg style={{ color: isActive ? "#F8A700" : "white" }} id="loginSignIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                        <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg>
                }
            </button>


            <div className="object" style={{ display: isActive ? "block" : "none" }}>
                {logged
                    ? <>
                        {adminPanel
                            ? <div className="d-flex flex-column justify-content-center ">
                                <h2 className="username">{username}</h2>
                                <Link to="../~n1kymi00/AdminPanel" className="loggedInLinks mb-5">Dashboard</Link>
                                <button onClick={logoutUser} classname="logoutBtn" type="submit">Kirjaudu ulos</button>
                            </div>
                            : <div className="d-flex flex-column justify-content-center ">
                                <h2 className="username">{username}</h2>
                                <p className="loggedInLinks">Asiakastiedot</p>
                                <p className="loggedInLinks">Tilaukset</p>
                                <button onClick={logoutUser} classname="logoutBtn" type="submit">Kirjaudu ulos</button>
                            </div>
                        }
                        </>
                    : <div className="form">
                    <form onSubmit={loginUser}>

                        <div className="form-header">
                            <h4>kirjaudu sisään</h4>
                        </div>

                        <div className="form-logIn">
                            <label>Sähköposti</label>
                            <input type="email" onChange={(e) => { setUsername(e.target.value) }} placeholder="Syötä sähköpostiosoite" required></input>
                            <label>Salasana</label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Syötä salasana" required></input>
                            <a href="/#"> Unohditko salasanan</a>
                            <button type="submit">Kirjaudu sisään tunnuksillasi</button>
                        </div>
                    </form>

                    <div className="form-register">
                        <button>
                            <Link className="registerLink" to="../~n1kymi00/register">Rekisteröidy asiakkaaksi</Link>
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>
    )

}

export default LoginForm;

