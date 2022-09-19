import React from "react";
import './tech.css';
import img1 from './6361001.png';
import img2 from './60-607394_igloohome-blog-smart-home-zigbee-internet-of-things.png';
import img3 from './297540-P7IHOJ-671-1.png';
import img4 from './rpa-vs-ai-vs-ml-Arificial-Intelligence.webp';
import { Menu } from "./menu";
export function Tech()
{
    return(
       <div>
        <Menu/>
        <div className="tech">
            <h1 className="h1">Learn 4.0 Technologies</h1>
            <p className="p1">Get trained by alumini of MT's and top companies like Amazon,Microsoft,Intel,<br/>
                Nvidia,Qualcomm,etc.Learn directly from professionals in Product<br/>
                 Development.
            </p>
            <div className="div3">
            <div className="card1">
            <h3>Data Scientist</h3>
            <p>Data scientists gather and analyze large sets of structured and unstructured data</p>
            <img src={img1} className='im1'/>
             </div>
            <div className="card2">
                <h3>IOT Developer</h3>
                <p>IoT Developers are professionals who can develop,manage and monitor IoT devices</p>
                    <img src={img2} className='im2'/>
                </div>
                </div>
                <div className="div3">
                <div className="card3">
                    <h3>VR Developers</h3>
                    <p>A VR developer creates completely new digital environments that people can use</p>
                    <img src={img3} className='im3'/>
                    </div>
                    <div className="card4">
                        <h3>ML Engineer</h3>
                        <p>Machine learning engineers feed data info models defined by data scientists</p>
                        <img src={img4} className='im4'/>
                    </div>

           
           
           </div>
           
        
           

            

        </div></div>
    )
}