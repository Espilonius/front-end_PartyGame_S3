//import React, { useContext, useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
//import { UserContext } from '../userContext'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const HomePage = () => {
    //const navigate = useNavigate();
    
    return (
        <>
            <li className="nav-item p-3 fs-5">
                <Link to="/NewGame">
                    <p className="h5">New Game</p>
                </Link>
            </li>
            <li className="nav-item p-3 fs-5">
                <Link to="/Questions">
                    <p className="h5">Questions</p>
                </Link>
            </li>
        </>
    );
};

export default HomePage