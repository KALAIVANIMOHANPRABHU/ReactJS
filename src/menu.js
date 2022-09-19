import React from "react";
import App from "./App";
import './App.css';
import {Link} from "react-router-dom";
export function Menu()
{
    return(
        <div>
            <ul>
                <Link to="/hello"><li>Hello</li></Link>
                <Link to="/congrats"><li>Congrats card</li></Link>
                <Link to="/super"><li>Super</li></Link>
                <Link to="/tech"><li>Tech</li></Link>
                <Link to="/hooks"><li>Hooks</li></Link>
                <Link to="/fruitscounter"><li>Fruit</li></Link>
                <Link to="/feedback"><li>Feedback</li></Link>
                <Link to="/feedback1"><li>Feedbackmsg</li></Link>
                
                {/* <li>Home</li> */}
                {/* <li>About</li> */}
            </ul>
        </div>
    );
}