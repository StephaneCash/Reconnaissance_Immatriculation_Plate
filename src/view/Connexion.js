import { useNavigate, Link } from "react-router-dom";
import "../css/Connexion.css"
import { useState } from 'react';

function Connexion() {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [etB, setEtb] = useState(false);
    const [msgErr, setMsgErr] = useState('');
    const [etForm, setEtForm] = useState(false);

    const handleInput1 = (e) => {
        setUsername(e.target.value);
    }

    const handleInput2 = (e) => {
        setPassword(e.target.value);
    }

    const validForm = () => {
        if (username === "") {
            setMsgErr("Renseigner un username svp !");
            setEtForm(false)
        } else if (password === "") {
            setMsgErr("Renseigner un mot de passe svp !");
            setEtForm(false)
        } else {
            setEtForm(true)
        }
    }

    const submitForm = () => {

        validForm()

        if (etForm) {
            if (username === "admin" && password === "1234") {

                setEtb(true);

                setTimeout(() => {
                    navigate('/home')
                }, 800);

            } else {
                setMsgErr("Username ou Password invalides");
            }
        }
    }


    return (
        <>
            <div className="container connexion" style={{ marginTop: "50px" }}>
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-user faUser"></i> <h4>Connexion</h4>
                    </div>
                    <div className="card-body">
                        <form className="form">
                            <div>
                                {
                                    msgErr !== "" ? (
                                        <div className="alert alert-danger">{msgErr}</div>
                                    ) : ""
                                }
                            </div>
                            <div className="form-group form1">
                                <label>Entrer un nom d'utilisateur</label>
                                <input type="text" className="form-control" onChange={handleInput1} placeholder="Username" value={username} required />
                            </div>
                            <div className="form-group">
                                <label>Entrer un password</label>
                                <input type="password" className="form-control" onChange={handleInput2} placeholder="Mot de passe" value={password} required />
                            </div>
                        </form>
                    </div>

                    {
                        etB ? (
                            <>
                                <div className="card-footer">
                                    <button type="submit"
                                        className="btn btn-success" style={{ float: "right" }}>Connexion... <i className="fa fa-refresh fa-spin"></i></button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="card-footer">
                                    <button type="submit" onClick={submitForm} className="btn btn-success" style={{ float: "right" }}>Se Connecter</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Connexion;