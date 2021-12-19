import { Modal } from "react-bootstrap";

const ModalDetail = (props) => {
    let text = [];
    text.push(props.content);
    console.log(text)

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