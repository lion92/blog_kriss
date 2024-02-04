import React from 'react';

import './css/articles.css'
import Gist from "react-gist";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import './css/dash.scss'

const Articles = () => {
    return (
        <div>

            <button><NavLink to={"/hello"}>
                <MenuItem><h2 className="menuTitle">hello</h2></MenuItem>
            </NavLink></button>

            <h1>Comment créer un projet React app avec un minimum de chose:</h1>
            <h2>J'ai crée un projet react app avec un router et material ui d'intégré pour utiliser la librairie de
                composant.</h2>
            <p>Il suffit de faire un git clone de https://github.com/lion92/blog_kriss.git</p>
            <div className="clone_git">
                <Gist id="99b008bf95608a47a3c1db1ded4c257a"/>
            </div>
            <h2>Pour creer le projet faire:</h2>
            <ul>
                <li>npx create-react-app nom_du_projet</li>
                <li>cd nom_du_projet</li>
                <li>integrer le fichier index.js dans src</li>
                <li>
                    <div className="clone_git">
                        <Gist id="36f33038792cffdabce8e2c93c12dc02"/>
                    </div>
                </li>
                <li>npm uninstall react-router-dom</li>
                <li>npm install react-router-dom@5.2.0</li>
                <li>Creer un composent HelloWorld</li>
                <li>Le mettre au niveau du router</li>
                <li>npm start</li>
            </ul>

        </div>
    );
};

export default Articles;