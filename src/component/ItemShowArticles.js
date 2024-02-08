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
    });
    return (
        <>
            <div className="card" >
                <h1 style={{color: 'black'}}>{props.userNom}</h1>
                <h1 style={{color: 'black'}}>{props.userPrenom}</h1>
                <h1 style={{color: 'black'}}>{props.title}</h1>

                <p style={{color: 'blue'}}>{props.description}</p>


            </div>
            <div className="card">
                <button onClick={async () => {
                    await morelike();
                    await fetchaAllArticle();
                }} style={{width: '100%'}}>{props.numeberlike}<SlLike/></button>
                <button onClick={async () => {
                    await moredislike();
                    await fetchaAllArticle();
                }} style={{width: '100%'}}>{props.numeberDislike}<SlDislike/></button>
            </div>

        </>
    );
}
