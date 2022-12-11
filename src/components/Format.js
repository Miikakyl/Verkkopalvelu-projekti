import '../styles/format.css'
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Format (props) {

    const [value, setValue] = useState('');

    const handleChange = event => {
      const result = event.target.value.replace(/\D/g, '');
  
      setValue(result);
    };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/ShoppingcartSite`; 
    navigate(path);
  }

    useEffect(() => {
        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])
       
  
return (
    <div>
        <div id="format">
        <div className='container'>
        <form>
        <div className='row'>
            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <h2>Täytä tiedot</h2>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <label>Etunimi*</label>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <input type="text" required></input>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <label>Sukunimi*</label>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <input type="text" required></input>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <label>Sähköposti*</label>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <input type="email" required></input>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <label>Osoite*</label>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <input type="text" required></input>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <label>Postinumero*</label>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <input type="text" value={value} onChange={handleChange} required></input>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <h3>Valitse toimitustapa</h3>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <select>
                    <option>Automaatti</option>
                    <option>Myymälä</option>
                    <option>Kotiinkuljetus</option>
                </select>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <h3>Valitse maksutapa</h3>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <select>
                    <option>Nordea</option>
                    <option>Osuuspankki</option>
                    <option>Danskebank</option>
                    <option>S-Pankki</option>
                    <option>Ålandsbaken</option>
                    <option>Handelsbanken</option>
                    <option>Aktia</option>
                    <option>Pop-Pankki</option>
                </select>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                <h3>Yhteenveto</h3>
            </div>

            <div className="col-xs-12 col-md-12 col-xl-12 p-1 summa">
                <span>Ostokset yhteensä</span>
                <span>120</span>
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