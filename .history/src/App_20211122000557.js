import Webcam from "react-webcam";
import React, { Component, useState } from 'react';
import { useRef } from 'react';
import styled from "styled-components"
import { ObjectDetect } from "./components/objectDetect";

function App() {

  return (
    <div className="App">
      <AppContainer>
        <ObjectDetect />
      </AppContainer>
    </div>
  )
}

export default App;
