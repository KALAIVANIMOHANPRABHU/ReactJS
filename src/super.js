import React from "react";
import './super.css';
import img1 from './1581658423-0293.jpg';
import img2 from './70521baac89be4d4cb2f223bbf67c974.png';
import { Menu } from "./menu";
export function Super(){
    return(
        <div>
            <div>
            <Menu/>
            <div className="box">
                <h1 className="head">Super Over League</h1>
                <img src={img1} className='igg1'/>
                <img src={img2} className='igg2'/>
            </div>
        </div></div>
    );
}