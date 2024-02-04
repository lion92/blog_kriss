import React from 'react';
import Connection from "./connection";
import MenuComponent from "./MenuComponent";
import Form from "./Form";

const DashBoardLogin = () => {

    let titre = "Connection"
    let contenue = <Form></Form>

    return (
        <>
            <MenuComponent contenue={contenue} title={titre}></MenuComponent>
        </>

    );
};

export default DashBoardLogin;