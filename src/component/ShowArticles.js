import React, {useCallback, useEffect, useState} from 'react';

import './css/helloWorld.css'
import './css/dash.scss'
import Item from "./Item";
import lien from "./lien";
import ItemShowArticles from "./ItemShowArticles";

const ShowArticles = () => {


    let [listItem, setText] = useState([]);
    ///////////////////////////
    const [load, setLoad] = useState(false);


    let attendre = () => {
        setLoad(true);
        setTimeout(() => {
            setLoad(false);
        }, 500);
        console.log(load);
    };
    useEffect(() => {
        fetchAPI();
    }, []);

    ///////////////////fectchApi/////////////////////////
    const fetchAPI = useCallback(async () => {
        const response = await fetch(lien.url + "todos");
        const resbis = await response.json();
        await setText(resbis);
        return resbis;
    }, [setText]);


    return (

        <div>



                {!load ? <div className="containerColumn">


                        {listItem.map((item) => {
                            return (
                                <ItemShowArticles
                                    title={item.title}
                                    description={item.description}
                                    userNom={item.nom}
                                    userPrenom={item.prenom}
                                    id={item.id}
                                ></ItemShowArticles>
                            );
                        })}

                    </div>
                    : <h1>Chargement...</h1>}

            </div>
    );
};

export default ShowArticles;