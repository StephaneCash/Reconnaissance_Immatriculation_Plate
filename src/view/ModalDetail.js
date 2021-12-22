import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import Api from "../api/Api"

const ModalDetail = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const fetchData = () => {
        Api.getAllagent().then(res => {
            const agents = res.data;
            setData(agents);
        })
    }

    let text = [];
    text.push(props.content);
    console.log(text[0].id);

    useEffect(() => {
        fetchData();
        if(text[0].id > 0){
            setId(text[0].id)
        }
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
                                <th>Profile</th>
                                <th>Numéro d'immatriculation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                id > 0 ? (<>
                                    {
                                        data.map((val, index) => {
                                            if (id === val.id) {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{val.noms}</td>
                                                            <td>{val.fonction}</td>
                                                            <td>{val.num_plaque}</td>
                                                        </tr>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                    <tr>
                                        <td></td>
                                    </tr>

                                </>) : ""
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