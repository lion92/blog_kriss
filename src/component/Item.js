import React, {useCallback, useState} from "react";
import {SlDislike, SlLike} from "react-icons/sl";
import lien from "./lien";

export default function Item(props) {
    let fetchIsPublishOK = useCallback(async () => {
        let str = "" + localStorage.getItem('jwt')
        const response = await fetch(
            lien.url + "todos/ispublish/" + props.id,
            {
                method: "PUT",
                body: JSON.stringify({
                    isPublish: 1,
                    jwt: str
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;
    });
    let fetchIsPublishKO = useCallback(async () => {
        let str = "" + localStorage.getItem('jwt')


        const response = await fetch(
            lien.url + "todos/ispublish/" + props.id,
            {
                method: "PUT",
                body: JSON.stringify({

                    isPublish: 0,
                    jwt: str
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;
    });
    const [iditem, setItemid] = useState(-1);

    return (
        <div className="card">
            <div className="card" style={{width: "370px"}} onClick={() => {
                props.updatefunc(props.id);
                props.changeDec(props.description);
                props.changetext(props.title);
                props.changeColor(props.color);
            }}>
                <h1 style={{color: 'black'}}>{props.title}</h1>

                <p style={{color: 'blue'}}>{props.description}</p>
                {!!props?.fileName ? <img style={{width: "7em", height: "7em"}} src={lien.url + "uploads/" + props.fileName} alt="photo"/> : <p>pas de photo</p>}


                <button style={{width: '100%'}} onClick={(e) => props.del(e, props.id)}>delete</button>

            </div>
            <div className="card">
                <button style={{width: '100%'}}>{props.numeberlike}<SlLike/></button>
                <button style={{width: '100%'}}>{props.numeberDislike}<SlDislike/></button>
                <button onClick={() => fetchIsPublishKO()} style={{width: '100%'}}>Publier Non</button>
                <button onClick={() => fetchIsPublishOK()} style={{width: '100%'}}>Publier OUi</button>

            </div>
        </div>
    );
}
