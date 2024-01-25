import React from 'react';

import './css/helloWorld.css'

import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const Helloword = () => {
    return (
        <div>


            <button><NavLink to={"/articles"}>


                <MenuItem><h2 className="menuTitle">Mes articles de projets</h2></MenuItem>
            </NavLink></button>
            <h1>Bienvenue dans mon blog d'article</h1>
            <div className="photo"><img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png"
                                        alt="photodemoi"
                                        className="card__img"/></div>


        </div>
    );
};

export default Helloword;