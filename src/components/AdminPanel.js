import react, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/AdminPanel.css'
import uuid from 'react-uuid'

const AdminPanel = (props) => {
    const [productTable, setProductTable] = useState([])
    const [categoryTable, setCategoryTable] = useState([])
    const [categoryInput, setCategoryInput] = useState("")
    const [categoryAdded, setCategoryAdded] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        props.footerHidingState(true)

        axios.get('https://www.students.oamk.fi/~n1kymi00/Verkkopalvelu-backend/rest_adminPanel.php', { withCredentials: true },)
            .then((response) => {
                if (response.data[1] === true) {
                    setProductTable(response.data[0].products)
                    setCategoryTable(response.data[0].category)
                }
                else {
                    alert(response.data[0])
                    setTimeout(navigate('../~n1kymi00'), 1000);
                }
            })
            .catch((error) => {
                alert(error)
            });

        return () => {
            props.footerHidingState(false)
        }

    }, [, categoryAdded])

    const addCategory = () => {
        axios.post('https://www.students.oamk.fi/~n1kymi00/Verkkopalvelu-backend/rest_addCategory.php', JSON.stringify(categoryInput), { withCredentials: true },)
            .then((response) => {
                alert("Kategoria lisätty onnistuneesti")
                setCategoryAdded(true)
            })
            .catch((error) => {
                alert(error)
            });

        return () => {
            props.footerHidingState(false)
        }
    }

    return (
        <div className="container-fluid adminPanelContainer">
            <div className="row dashboardRow d-flex justify-content-center py-5">
                <div className="col-4 col-sm-12 d-flex justify-content-center">
                    <h1 className="dashboardHeader d-inline">Dashboard</h1>
                </div>
            </div>
            <div className="row tableRow">
                <div className="col-lg-6 col-sm-12 p-0 d-flex flex-column align-items-center">
                    <div>
                        <h2 className="tableHeaders mb-3 d-inline">Kategoriat</h2>
                        <table className="dashboardTables categoryTable">
                            <thead>
                                <tr>
                                    <th>Tuoteryhma-tunnus</th>
                                    <th>Nimi</th>
                                </tr>
                            </thead>
                            {categoryTable?.map((category =>
                                <tbody>
                                    <tr>
                                        <td>{category.trnro}</td>
                                        <td>{category.trnimi}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <input value={categoryInput} onChange={(e) => { setCategoryInput(e.target.value) }} name="categoryInput" className="tableInputs mt-1" placeholder="Lisää tuoteryhmä"></input>
                        <button onClick={addCategory} className="submitBtns mx-2">Lähetä</button>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 p-0 d-flex flex-column align-items-center">
                    <div>
                        <h2 className="tableHeaders d-inline mb-3">Tuotteet</h2>
                        <table className="dashboardTables">
                            <thead>
                                <tr>
                                    <th>Tuote-tunnus</th>
                                    <th>Tuoteryhma</th>
                                    <th>Nimi</th>
                                    <th>Hinta</th>
                                    <th>Kustannus</th>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                {productTable?.map((product =>
                                    <tr key={uuid()}>
                                        <td>{product.tuoteId}</td>
                                        <td>{product.trnro}</td>
                                        <td>{product.tuotenimi}</td>
                                        <td>{product.hinta}</td>
                                        <td>{product.kustannus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminPanel;