import React from 'react';
import Connection from "./connection";
import MenuComponent from "./MenuComponent";

const DashBoardLogin = () => {

    let titre = "Connexion"
    let contenue = <Connection></Connection>

    return (
        <>
            <MenuComponent contenue={contenue} title={titre}></MenuComponent>
        </>

    );
};

export default DashBoardLogin;