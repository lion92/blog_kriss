import React, {useCallback, useState} from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import lien from "./lien";
export default function ItemShowArticles(props) {
    async function fetchaAllArticle  (){
            await props.fetchallbis();
    }
    let morelike = useCallback(async () => {
        const response = await fetch(
            lien.url + "todos/moreLike/" + props.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;
    });
    let moredislike = useCallback(async () => {



        const response = await fetch(
            lien.url + "todos/moreDislike/" + props.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;
    });
    return (
        <>
            <div className="card" onClick={() => {
                props.updatefunc(props.id);
                props.changeDec(props.description);
                props.changetext(props.title);
                props.changeColor(props.color);
            }}>
                <h1 style={{color: 'black'}}>{props.userNom}</h1>
                <h1 style={{color: 'black'}}>{props.userPrenom}</h1>
                <h1 style={{color: 'black'}}>{props.title}</h1>

                <p style={{color: 'blue'}}>{props.description}</p>


            </div>
            <button onClick={async () =>{await morelike();await fetchaAllArticle()}} style={{width: '100%'}}>{props.numeberlike}<SlLike/></button>
            <button onClick={async ()=>{await moredislike();await fetchaAllArticle()}} style={{width: '100%'}}>{props.numeberDislike}<SlDislike/></button>
        </>
    );
}
