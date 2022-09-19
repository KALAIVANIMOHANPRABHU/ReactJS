import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadSweat, faFaceSadTear, faSmile,faFaceGrin, faFaceGrinWide} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import './feedback.css';
import { Link } from "react-router-dom";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./menu";
export function Feed()
{
    return(
        <div>
            <Menu/>
        <div className="feed">
            <div className="feed1">
                <h4 className="hde">How satisfied are you with our customer support performance?</h4>
                <div className="feed2">
               <Link to="/feedback1"> <FontAwesomeIcon icon={ faFaceSadTear} className='sm1'/></Link>
                <FontAwesomeIcon icon={ faSmile}className='sm2'/>
                <FontAwesomeIcon icon={ faFaceGrinWide} className='sm3' />
                <div className="feed3">
                <p id="para1">Sad</p>
                <p id="para2">None</p>
                <p id="para3">Happy</p>
                
            </div></div></div></div>

        </div>
    )
}