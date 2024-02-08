import React from 'react';
import Connection from "./connection";
import MenuComponent from "./MenuComponent";
import ShowArticles from "./ShowArticles";

const DashShowArticles = () => {

    let titre = "Articles récents du blog: "
    let contenue = <ShowArticles></ShowArticles>

    return (
        <>
            <MenuComponent contenue={contenue} title={titre}></MenuComponent>
        </>

    );
};

export default DashShowArticles;