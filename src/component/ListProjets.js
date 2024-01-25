import React from 'react';

import './css/listProjets.css'

import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";


const ListProjets = () => {
    return (
        <div>

            <button><NavLink to={"/Youtube"}>
                <MenuItem><h2 className="menuTitle">You tube </h2></MenuItem>
            </NavLink></button>

            <h1>Comment créer un projet React app avec un minimum de chose:</h1>
            <h2>J'ai crée un projet react app avec un router et material ui d'intégré pour pour utiliser la librairie de composant.</h2>


        </div>
    );
};

export default ListProjets;