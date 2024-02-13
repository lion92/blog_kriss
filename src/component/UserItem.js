import React, {useCallback, useState} from "react";
import {SlDislike, SlLike} from "react-icons/sl";
import lien from "./lien";

export default function UserItem(props) {

    return (
        <div className="card">
            <div className="card" style={{width: "370px"}}>
                <h1 style={{color: 'black'}}>{props.email}</h1>
                <p style={{color: 'black'}}>{props.id}</p>
                <p style={{color: 'blue'}}>{props.nom}</p>
                <p style={{color: 'blue'}}>{props.prenom}</p>
                <p style={{color: 'blue'}}>{props.role}</p>
            </div>
        </div>
    );
}
