import React from "react";
import './App.css';
import { Menu } from "./menu";
import img from './photo-1546587348-d12660c30c50.jfif';
export function Home()
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