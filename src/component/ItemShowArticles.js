import React, {useState} from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
export default function ItemShowArticles(props) {

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
                <button style={{width: '100%'}}><SlLike/></button>
                <button style={{width: '100%'}}><SlDislike/></button>

            </div>
        </>
    );
}
