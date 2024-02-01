import React from "react";
import {  Link  } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}