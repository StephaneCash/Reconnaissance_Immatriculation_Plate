import Webcam from "react-webcam";
import React, { Component, useState } from 'react';
import { useRef } from 'react';
import "./App.css"
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";


function App() {

  const [imgData, setImgData] = useState(null);

  const fileInputRef = useRef();

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.error = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const onSelectImage = async (e) => {
    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);
  };

  return (
    <div className="App">
      <div className="objdetect">
        {
          imgData && <img src="" />
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
