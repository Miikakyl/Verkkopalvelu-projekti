import react, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/AdminPanel.css'

const AdminPanel = (props) => {
    const [productTable, setProductTable] = useState([])
    const [categoryTable, setCategoryTable] = useState([])

    useEffect(() => {
        props.footerHidingState(true)

        axios.get('http://localhost:3000/rest_adminPanel.php', { withCredentials: true },)
            .then((response) => {
                setProductTable(response.data.products)
                setCategoryTable(response.data.category)
            })
            .catch((error) => {
                alert(error)
            });

            return () => {
                props.footerHidingState(false)
            }

    }, [])

    return (
        <div className="container-fluid adminPanelContainer">
            <div className="row dashboardRow d-flex justify-content-center py-5">
                <div className="col-4 d-flex justify-content-center">
                    <h1 className="dashboardHeader d-inline">Dashboard</h1>
                </div>
            </div>
            <div className="row tableRow">
                <div className="col-lg-6 d-flex flex-column align-items-center">
                    <div>
                        <h2 className="tableHeaders mb-3">Tuotteet</h2>
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
                                {productTable.map((product =>
                                        <tr>
                                            <td>{product.tuoteId}</td>
                                            <td>{product.trnro}</td>
                                            <td>{product.tuotenimi}</td>
                                            <td>{product.hinta}</td>
                                            <td>{product.kustannus}</td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                        <input className="tableInputs mt-1" placeholder="Lisää tuote"></input>
                        <button className="submitBtns mx-2">Lähetä</button>
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center">
                    <div>
                        <h2 className="tableHeaders mb-3">Kategoriat</h2>
                        <table className="dashboardTables">
                            <thead>
                                <tr>
                                    <th>Tuoteryhma-tunnus</th>
                                    <th>Nimi</th>
                                </tr>
                            </thead>
                            {categoryTable.map((category =>
                                <tbody>
                                    <tr>
                                        <td>{category.trnro}</td>
                                        <td>{category.trnimi}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <input className="tableInputs mt-1" placeholder="Lisää kategoria"></input>
                        <button className="submitBtns mx-2">Lähetä</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;