import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";

import './feedback.css';

export function Feed1()
{
    return(
        <div className="feed">
            <div className="feed1">
               <FontAwesomeIcon icon={faHeart} className='heart1'/>
                <h3 className="hw">Thank You!</h3>
                <p className="par">We will use your feedback to improve our customer support performance</p>
            </div>

        </div>
    )
}