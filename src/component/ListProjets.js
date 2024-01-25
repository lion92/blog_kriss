import React from 'react';

import './css/listProjets.css'
import Gist from "react-gist";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";


const ListProjets = () => {
    return (
        <div>

            <button><NavLink to={"/Youtube"}>
                <MenuItem><h2 className="menuTitle">You tube </h2></MenuItem>
            </NavLink></button>

            <h1>Comment créer un projet React app avec un minimum de chose:</h1>
            <h2>J'ai crée un projet react app avec un router et material ui d'intégré pour pour utiliser la librairie de
                composant.</h2>
            <p>Il suffit de faire un git clone de https://github.com/lion92/blog_kriss.git</p>
            <div className="clone_git">
                <Gist id="99b008bf95608a47a3c1db1ded4c257a"/>
            </div>

        </div>
    );
};

export default ListProjets;