import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import Api from "../api/Api"
import axios from "axios"

const ModalDetail = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const fetchData = () => {
        axios.get(`http://localhost:8000/api/agents`).then(res=>{
            setData(res.data);
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    let text = [];
    text.push(props.content);
    console.log(text[0].id);

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Modal show={props.show} className="">
                <Modal.Header className="">
                    Reconnaissance
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Noms</th>
                                <th>Fonction</th>
                                <th>Numéro d'immatriculation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                text[0].id > 0 ? (<>
                                    {
                                        data.map((val, index) => {
                                            if (text[0].id === val.id) {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{val.noms}</td>
                                                            <td>{val.fonction}</td>
                                                            <td>{val.num_plaque}</td>
                                                        </tr>
                                                    </>
                                                )
                                            }
                                        })
                                    }

                                </>) :
                                    <tr>
                                        <td colSpan="3px">Aucune information ne correspond à ce numéro d'immatriculation</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer className="headerModal">
                    <button className="btn btn-dark" onClick={props.close}>Fermer</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDetail;