import React, {useCallback, useEffect, useState} from "react";
import lien from './lien'
import './css/dash.scss'
import UserItem from "./UserItem";

export default function User(props) {

    let [listItem, setText] = useState([]);


    useEffect(() => {
        fetchAPI();
    }, []);
    ///////////////////fectchApi/////////////////////////
    const fetchAPI = useCallback(async () => {
        let idUser = parseInt("" + localStorage.getItem("utilisateur"))
        let str = "" + localStorage.getItem('jwt')
        const response = await fetch(lien.url + "connection/");
        const resbis = await response.json();
        await setText(resbis);
        return resbis;
    }, [setText]);

    /////////////////////////////////////////
    ///////////////remonter au parent//////////////////////////////iddata/////////


    //////////////////////////appel api en debut
    useEffect(() => {
        fetchAPI();
    }, []);


    /////////////////////////
    return (

        <div>
            {!!localStorage.getItem('jwt') ?
                <div className="div2">
                    <div className="containerAll">


                            {listItem?.map((item, index) => {
                                return (
                                    <UserItem
                                        nom={item.nom}
                                        prenom={item?.prenom}
                                        email={item.email}
                                        role={item.role}
                                    ></UserItem>
                                );
                            })}

                        </div>

                </div>
                : <p style={{color: "red", textAlign: "center"}}>"veuillez vous connecter."</p>}
        </div>

    );
}
