import '../styles/LoginForm.css'
import React, { useState } from 'react'

function LoginForm() {

    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="loginFormContainer">

            <button id="loginSignBtn" onClick={handleClick}>
                <svg style={{color: isActive? "#F8A700" : "white"}} id="loginSignIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </button>


            <div className="object" style={{display: isActive? "block" : "none"}}>
                <div className="form">
                    <form>

                        <div className="form-header">
                            <h4>kirjaudu sisään</h4>
                        </div>

                        <div className="form-logIn">
                            <label>Sähköposti</label>
                            <input type="email" placeholder="Syötä sähköpostiosoite" required></input>
                            <label>Salasana</label>
                            <input type="password" placeholder="Syötä salasana" required></input>
                            <a href="/#"> Unohditko salasanan</a>
                            <button type="submit">Kirjaudu sisään tunnuksillasi</button>
                        </div>

                    </form>

                    <div className="form-register">
                        <a href="/#">
                            <button>Rekistöröidy asiakkaaksi</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoginForm;

