import Webcam from "react-webcam";
import React, { Component, useState } from 'react';
import { useRef } from 'react';
import "./App.css"
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";


function App() {

  const fileInputRef = useRef();

  const [imgData, setImgData] = useState(null);

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  const detectObjetsOnImage = async (imageElement) => {
    const model = await cocoSsd.load({});
    const predictions = await model.detect(imageElement, 6);
  }

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const onSelectImage = async (e) => {
    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);

    const 
  };

  return (
    <div className="App">
      <div className="objdetect">
        {
          imgData && <img src={imgData} style={{Width:"500px"}} />
        }
        
      </div>
      <div className="input">
        <input type="file" ref={fileInputRef} onChange={onSelectImage} />
      </div>
      <div className="SelectButton" onClick={openFilePicker}>
        Select image
      </div>
    </div>
  )
}

export default App;
