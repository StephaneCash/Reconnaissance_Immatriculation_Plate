import Webcam from "react-webcam";
import React, { Component, useState } from 'react';
import { useRef } from 'react';
import styled from "styled-components"
import { ObjectDetect } from ".components/objectDetect/index.jsx";
import index from ""

function App() {

  const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1c2127;
    display: flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;
    color: #fff;
  `;

  return (
    <div className="App">
      <AppContainer>
        <ObjectDetect />
      </AppContainer>
    </div>
  )
}

export default App;
