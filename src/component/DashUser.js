import React from 'react';
import MenuComponent from "./MenuComponent";
import User from "./user";

const DashUser = () => {
    let titre = "Inscription"
    let contenue = <User></User>
    return (
        <>
            <MenuComponent contenue={contenue} title={titre}></MenuComponent>
        </>
    )
        ;
};

export default DashUser;