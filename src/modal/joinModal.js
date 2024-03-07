import { useState } from "react";
import styled  from "@emotion/styled"
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MainPage } from "../mainPage";

export const ModalWrap = styled.div`
    display: ${(props)=>props.open ? 'flex' : 'none'};
    /* display:flex; */
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
`;

export const ModalDiv = styled.div`
    position: relative;
    width:400px;
    border-radius: 16px;
    padding:40px;
    background-color: #353535;
    display:flex;
    justify-content:center;
    flex-direction:column;
    row-gap:20px;

    & > p{
        font-size:15px;
        color:black;
        position:relative;
        top:2px;
        font-weight:bold;
    }
`;
export const CheckBtn = styled.button`
        display:flex;
        justify-content:center;
        position:absolute;
        right:10px;
        bottom:10px;
        width:50px;
        background-color:skyblue;
        border:none;
        border-radius:10px;
        cursor: pointer;  
`;

export const CloseBtn = styled.div`

    position:absolute;
    cursor: pointer;
    top:10px;
    right:10px;
`;


