import React, {useCallback, useEffect, useState} from 'react';

import './css/helloWorld.css'
import './css/dash.scss'
import lien from "./lien";
import ConfirmItemShowArticles from "./ConfirmItemShowArticles";

const ConfirmationArticles = () => {


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
    let fetchall = async () => {
        await fetchAPI()
    };
    useEffect(() => {
        fetchAPI()
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



            {!load ? <div className="containerAll">


                    {listItem?.map((item) => {
                        return (
                            <ConfirmItemShowArticles
                                title={item.title}
                                description={item.description}
                                userNom={item.nom}
                                userPrenom={item.prenom}
                                fetchallbis={fetchall}
                                id={item.id}
                                numeberlike={item.numberLike}
                                fileName={item.pictureName}
                                numeberDislike={item.numberDisLike}
                                confirmPublish={item.confirmPublish}
                            ></ConfirmItemShowArticles>
                        );
                    })}

                </div>
                : <h1>Chargement...</h1>}

        </div>
    );
};

export default ConfirmationArticles;