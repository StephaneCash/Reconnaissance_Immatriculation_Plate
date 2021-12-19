import React, { Component, useState, useEffect } from 'react';
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import "../css/Reconnaissance.css"
import MenuLeft from './MenuLeft';
import UpComponent from './UpComponent';
import '../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css';
import Tesseract from 'tesseract.js';
import ProgressBar from "@ramonak/react-progress-bar";
import Api from '../api/Api';
import WebCam from "../WebCam/WebCam"
import ModalDetail from './ModalDetail';

function Reconnaissance() {


    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState(0);
    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [content, setContent] = useState({});

    const getData = () => {
        Api.getAllagent().then(res => {
            setData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const verifData = () => {
        setEtat(true);
        let msg = "";
        if (progress > 0 && progress === 100) {
            let textFormat = text.split(' ');
            let joinTest = textFormat.join();

            let replaceText = joinTest.replace(",", "");
            let textF = replaceText.replace(",", "");
            console.log("Objet : ", replaceText.replace(",", ""));

            for (const dataObj of data) {
                console.log(dataObj.num_plaque)
                if (textF.includes(dataObj.num_plaque)) {
                    console.log("Found : ", dataObj.num_plaque);
                    setContent({
                        id: dataObj.id,
                        data : dataObj.num_plaque
                    })
                } else {
                    msg = "Data not found";
                }
            }
        }
        console.log(msg)
    }

    useEffect(() => {
        getData();
    }, []);

    const handleButton = () => {
        setIsLoading(true);
        Tesseract.recognize(image, "eng", {
            logger: (m) => {
                console.log(m);
                if (m.status) {
                    setProgress(parseInt(m.progress * 100));
                }
            }
        }
        ).then(({
            data: { text }
        }) => {
            setText(text);
            console.log(text);
            setIsLoading(false);
        });
    }

    const etatClose = () => {
        setEtat(false)
    }

    const reinit = () => {
        setIsLoading(false);
        setText("");
        setImage("");
        setProgress('');
    }

    return (
        <>
            <div className="col-md-12">
                <UpComponent />
            </div>
            <div className="col-md-12 d-flex">
                <div className="col-md-2">
                    <MenuLeft />
                </div>
                <div className="col-md-10">
                    <div className="container d-flex">
                        <div className="col-md-6 " >
                            {
                                !isLoading && <h3 className="mt-5 mb-4 text-center" > Rechercher photo
                                </h3>
                            }
                            {
                                !isLoading && text && (
                                    <>
                                        Numéro trouvé : <h4>{text}</h4>
                                        <input
                                            className="form-control"
                                            rows="3"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            disabled
                                            type='hidden'
                                        />
                                        <p>
                                            <input type="button"
                                                onClick={reinit}
                                                className="btn btn-dark mt-3"
                                                value="Rechercher autres" />
                                            <button className='btn btn-success' onClick={verifData} style={{ marginLeft: "10px" }}> Vérifier </button>
                                        </p>
                                    </>
                                )
                            }
                            {/* Forms */}
                            {
                                !isLoading && !text && (
                                    <>
                                        < input type="file"
                                            className="form-control"
                                            onChange={
                                                (e) => setImage(URL.createObjectURL(e.target.files[0]))
                                            }
                                        />  <input
                                            type="button"
                                            className="form-control btn btn-default mt-4"
                                            value="Lancer une recherche"
                                            onClick={handleButton}
                                        />
                                    </>
                                )
                            }
                            {/* progress */}
                            {
                                isLoading && (
                                    <>
                                        <p className="text-center mt-5">Progression...<i className="fa fa-spinner fa-spin"></i> : {progress}%
                                            <ProgressBar
                                                completed={progress}
                                                className="wrapper"
                                                bgColor='green'
                                                borderRadius="2px"
                                            />
                                        </p>
                                    </>
                                )
                            }
                            {/* Text Area */}

                        </div>
                        <div className="col-md-6">
                            <h3 className="mt-5 mb-4 text-center" > Rechercher Par caméra</h3>
                            <WebCam />
                        </div>
                    </div>
                </div>
                <ModalDetail
                    content={content}
                    show={etat}
                    close={etatClose}
                />
            </div>
        </>
    )
}
export default Reconnaissance;