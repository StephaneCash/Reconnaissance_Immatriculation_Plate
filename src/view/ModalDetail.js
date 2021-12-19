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
                    
                </Modal.Body>
                <Modal.Footer className="headerModal">
                    <button className="btn btn-dark" onClick={props.close}>Fermer</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDetail;