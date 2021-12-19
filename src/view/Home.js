import MenuLeft from "./MenuLeft";
import UpComponent from "./UpComponent";
import "../css/Home.css";
import Api from "../api/Api";
import { useState, useEffect } from 'react';


function Home() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [etatLoad, setEtatLoad] = useState(true);
    const [valueInput, setValueInput] = useState("");

    const fetchData = () => {
        Api.getAllagent().then(res => {
            const agents = res.data;
            setEtat(true);
            setEtatLoad(false);
            setData(agents);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="col-md-12"><UpComponent /></div>
            <div className="col-md-12 d-flex">
                <div className="col-md-2">
                    <MenuLeft />
                </div>
                <div className="col-md-9 menuPrincipal">
                    <div className="d-flex">
                        <div className="col-md-4">
                            <input type="search" 
                            placeholder="Rechercher" 
                            onChange={(e)=>setValueInput(e.target.value)}
                            className="form-control" 
                            value={valueInput} />
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-success" style={{ marginLeft: "10px" }}>Ajouter un nouveau agent</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="card">
                            <div className="card-header">Liste des agents <i className="fa fa-address-card"></i></div>
                            <div className="card-body">
                                <table className="table table-borderless table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Noms</th>
                                            <th>Fonction</th>
                                            <th>Numéro de plaque_immatriculation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.length > 0 ? (
                                                <>
                                                    {
                                                        data.map((val, index) => {
                                                            return (
                                                                <>
                                                                    <tr key={index}>
                                                                        <td>{val.id}</td>
                                                                        <td>{val.noms}</td>
                                                                        <td>{val.fonction}</td>
                                                                        <td>{val.num_plaque}</td>
                                                                        <td style={{ width: "230px " }}>
                                                                            <button className="btn btn" style={{ border: "1px solid silver" }}>
                                                                                <i className="fa fa-edit"></i> Editer
                                                                            </button>
                                                                            <button className="btn btn" style={{ border: "1px solid silver", marginLeft: "5px" }}>
                                                                                <i className="fa fa-trash"></i> Supprimer
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                <tr style={{textAlign:'center'}}>
                                                    <td colSpan='5px'> 
                                                        <i className="fa fa-spinner fa-spin fa-2x"></i>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;