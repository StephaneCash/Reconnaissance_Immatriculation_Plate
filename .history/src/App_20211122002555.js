import Webcam from "react-webcam";
import React, { Component, useState } from 'react';
import { useRef } from 'react';
import "./App.css"
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";


function App() {

  const fileInputRef = useRef();

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  return (
    <div className="App">
      <div className="objdetect">
        Img
      </div>
      <div className="input">
        <input type="file" ref={fileInputRef} />
      </div>
      <div className="SelectButton" onClick={openFilePicker}>
        Select image
      </div>
    </div>
  )
}

export default App;
