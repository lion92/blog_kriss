import React, {useCallback, useState} from "react";
import lien from "./lien";

export default function ConfirmItemShowArticles(props) {
    const [messageLog, setMessageLog] = useState("");
    async function fetchaAllArticle  (){
            await props.fetchallbis();
    }
    let confirm = useCallback(async () => {
        let userid = "" + localStorage.getItem("utilisateur");
        let str = "" + localStorage.getItem('jwt')
        await console.log(userid);
        let id = parseInt(userid);
        const response = await fetch(
            lien.url + "todos/ispublishconfirm/" + props.id,
            {
                method: "PUT",
                body: JSON.stringify({
                    confirmPublish:true,
                    jwt: str
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;
        console.log(resbis)
        setMessageLog(""+JSON.stringify(resbis))

    });

    let noConfirm = useCallback(async () => {
        let userid = "" + localStorage.getItem("utilisateur");
        let str = "" + localStorage.getItem('jwt')
        await console.log(userid);
        let id = parseInt(userid);
        const response = await fetch(
            lien.url + "todos/ispublishconfirm/" + props.id,
            {
                method: "PUT",
                body: JSON.stringify({
                    confirmPublish:false,
                    jwt: str

                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const resbis = await response;

        setMessageLog(""+JSON.stringify(resbis))
    });

    return (
        <>
            <div className="card" style={{width: "370px"}}>
                <p style={{color: "red"}}>{messageLog}</p>
                {!!props?.fileName ?
                    <img style={{width: "7em", height: "7em"}} src={lien.url + "uploads/" + props.fileName}
                         alt="photo"/> : <p>pas de photo</p>}
                <h1 style={{color: 'black', width: "370px"}}>{props.userNom}</h1>
                <h1 style={{color: 'black', width: "370px"}}>{props.userPrenom}</h1>
                <h1 style={{color: 'black', width: "370px"}}>{props.title}</h1>
                <p style={{color: 'black', width: "370px"}}>{props.confirmPublish}</p>
                <article id="tab1">
                    <p style={{color: 'blue'}}>{props.description}</p>
                </article>

                <div className="card" style={{width: "370px"}}>
                    <button onClick={async () => {
                        await confirm();
                        await fetchaAllArticle();
                    }} style={{width: '100%'}}>Confirm
                    </button>
                    <button onClick={async () => {
                        await noConfirm();
                        await fetchaAllArticle();
                    }} style={{width: '100%'}}>noConfirm
                    </button>
                </div>
            </div>


        </>
    );
}
