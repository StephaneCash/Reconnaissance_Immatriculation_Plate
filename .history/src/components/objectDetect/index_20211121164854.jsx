import React from "react";
import styled from "styled-components"

import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd 

const ObjectDetectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetectContainer = styled.div`
    min-width: 200px;
    height: 500px;
    border : 3px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items : center;
    justify-content : center;
    position : relative;
`;

const TargerImg = styled.div`
    height: 100%;
`;

const HiddenFileInput = styled.div`
    display: none;
`;

const SelectButton = styled.div`
    padding : 7px 10px;
    border : 2px solid transparent;
    background-color: #fff;
    color: black;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    margin-top: 2em;
    cursor: pointer;
    transition: all 260ms ease-in-out;

    &:hover{
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
`;

export function ObjectDetect(props) {

}