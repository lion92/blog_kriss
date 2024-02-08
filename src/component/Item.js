import React, {useCallback, useState} from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import lien from "./lien";
export default function Item(props) {
    let fetchIsPublishOK = useCallback(async () => {
        let str = "" + localStorage.getItem('jwt')
        const response = await fetch(
            lien.url + "todos/ispublish/" + props.id,
            {
                method: "PUT",
                body: JSON.stringify({
                    isPublish:1,
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

                    isPublish:0,
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
        <>
            <div className="card" style={{width: "200px", height: "300px"}} onClick={() => {
                props.updatefunc(props.id);
                props.changeDec(props.description);
                props.changetext(props.title);
                props.changeColor(props.color);
            }}>
                <h1 style={{color: 'black'}}>{props.title}</h1>

                <p style={{color: 'blue'}}>{props.description}</p>
                <button style={{width: '100%'}}><SlLike/></button>
                <button style={{width: '100%'}}><SlDislike/></button>

                <button style={{width: '100%'}} onClick={(e) => props.del(e, props.id)}>delete</button>

            </div>
            <button onClick={() => fetchIsPublishKO()} style={{width: '100%'}}>Publier Non</button>
            <button onClick={() => fetchIsPublishOK()} style={{width: '100%'}}>Publier OUi</button>
        </>
    );
}
