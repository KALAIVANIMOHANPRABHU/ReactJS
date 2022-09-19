import React from "react";
import './ex1.css';
import img from './congrats-card-profile-img.png';
import img1 from './Smartwatch-PNG-Image.png';
import { Menu } from "./menu";
 export function Congrats() {
    return (
        <div>
            <Menu/>
        
      <div className='div1'>
        <p className='h3'>Congratulations</p>
        <div className='card'>
          <img src={img} className='img'/>
         <p className='h'> Kiran V</p>
          <p className='h4'> Vishnu Institute Of Computer and Technology,<br/>
          Bhimavaram</p>
          <img src={img1} className='img1'/>
  
  
      </div></div></div>
  
    );   
  }
  