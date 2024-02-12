import React from 'react';
import MenuComponent from "./MenuComponent";
import ConfirmationArticles from "./ConfirmationArticles";


const DashConfirmationShowArticles = () => {
    let titre = "Inscription"
    let contenue = <ConfirmationArticles></ConfirmationArticles>
    return (
        <>
            <MenuComponent contenue={contenue} title={titre}></MenuComponent>
        </>
    )
        ;
};

export default DashConfirmationShowArticles;