import React from "react";
import './App.css';
import { Menu } from "./menu";
import img from './images.jfif';
export function About()
{
    return(
    <div>
         <Menu/>
        <div className='d-flex'>
           
            <img src={img} className='img'/>
            <p>Nature is the reason behind all lives dwelling on the earth. 
                It is the blessing of invisible power for all living organisms. 
                In a broader sense nature is all physical and abiotic factors of the environment. 
                For the help of readers we have prepared some essential paragraphs on nature, 
                kindly go through it.</p>

        </div></div>
    )
}