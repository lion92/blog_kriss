import React, {useCallback, useEffect, useState} from "react";
import Item from "./Item";
import lien from './lien'
import './css/dash.scss'

export default function Form(props) {
    let [titre, setValue] = useState("");
    let [messageErrorDescription, setmessageErrorDescription] = useState("");
    let [messageErrorTitre, setMessageerrorTitre] = useState("");
    let [valueInputTitre, setTitre] = useState("");
    let [valueInputDescription, setDescription] = useState("");
    let [idVal, setId] = useState(-1);
    let [listItem, setText] = useState([]);
    ///////////////////////////
    const [load, setLoad] = useState(false);
    const [file, setFile]=useState()


    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleUpload = async () => {
        if (file) {
            console.log("Uploading file...");

            const formData = new FormData();
            formData.append("file", file);

            try {
                // You can write the URL of your server or any other endpoint used for file upload
                const result = await fetch(`${lien.url}todos/upload`, {
                    method: "POST",
                    body: formData,
                });

                const data = await result.json();

                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    let attendre = () => {
        setLoad(true);
        setTimeout(() => {
            setLoad(false);
        }, 500);
        console.log(load);
    };
    useEffect(() => {
        attendre();
    }, []);
    ////////////////////////Rechercher/////////////
    let recherche = async (e) => {
        e.preventDefault();
        if (titre === "") {
            console.log("test0");
            await fetchAPI();
        } else {
            let f = await fetchAPI();
            await console.log(f);
            await titre;
            let tab = await f.filter((elemt) =>
                elemt.title === titre
                || elemt.description === valueInputDescription
            );
            await setText(tab);
            await console.log("bb");
        }
    };
    ////////////////////////////////////////////
    ///////////////////fectchApi/////////////////////////
    const fetchAPI = useCallback(async () => {
        let idUser = parseInt("" + localStorage.getItem("utilisateur"))
        let str = "" + localStorage.getItem('jwt')
        const response = await fetch(lien.url + "todos/byuser/" + idUser ,{headers:{Authorization: `Bearer ${str}`}});
        const resbis = await response.json();
        await setText(resbis);
        return resbis;
    }, [setText]);

    /////////////////////////////////////////
    ///////////////remonter au parent//////////////////////////////iddata/////////
    let idchange = (data) => {
        setId(data);
    };
    //change color
    let changeColor = (data) => {

    };
    //////////////////////////appel api en debut
    useEffect(() => {
        fetchAPI();
    }, []);
    ////////////////////////////////////////supprimme des tache
    let del = (e, data) => {
        e.preventDefault();
        fetchdelete(data);
    };
    ///////////////////////////////////////////////////////////remonter le texte
    let textebis = (data) => {
        setValue(data);
    };

    ///////////////////////////////////////////////////////////remonter le texte
    let textebisDesc = (data) => {
        setDescription(data);
    };
    /////////////////////////////
    ///////////////////////////appel delete
    let fetchdelete = useCallback(async (data) => {
        let idTodo = parseInt(data, 10)
        let str = "" + localStorage.getItem('jwt')
        const response = await fetch(
            lien.url + "todos/" + idTodo,
            {
                method: "DELETE",
                body: JSON.stringify({

                    jwt: str

                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const resbis = await response;
        await fetchAPI();
    });
    //////////////////////insert tache
    let fetchCreer = useCallback(async (e) => {
        let userid = "" + localStorage.getItem("utilisateur");
        let userid2 = parseInt(userid)
        let str = "" + localStorage.getItem('jwt')
        e.preventDefault();
        const response = await fetch(
            lien.url + "todos",
            {
                method: "POST",
                body: JSON.stringify({
                    title: titre,
                    description: valueInputDescription,
                    user: userid2,
                    isPublish:false,
                    numberLike:0,
                    numberDisLike:0,
                    pictureName:!!file?.name?file?.name:"",
                    jwt: str
                }), headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;

        await fetchAPI();

    });
    ////////////////////update////////////
    let fetchAPIupdate = useCallback(async () => {
        let userid = "" + localStorage.getItem("utilisateur");
        let str = "" + localStorage.getItem('jwt')
        await console.log(userid);
        let id = parseInt(userid);
        const response = await fetch(
            lien.url + "todos/" + idVal,
            {
                method: "PUT",
                body: JSON.stringify({
                    title: titre,
                    description: valueInputDescription,
                    user: id,
                    jwt: str,
                    pictureName:!!file?.name?file?.name:""

                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const resbis = await response;
        await fetchAPI();
    });


    ////////////////////////input change value
    let Valuechange = (e) => {
        let a = e.target.value;
        console.log(a);

        if (titre.length > 20) {

            setMessageerrorTitre("La valeur du titre ne doit pas dépasser 20 caracteres")
        } else {
            setMessageerrorTitre("");

        }
        setValue(a);
        return a;
    };
    ////////////////////////input change description
    let valueChangeDescription = (e) => {
        let a = e.target.value;
        setDescription(a)
        return a;
    };
    /////////////////////////modifier
    let modifier = (e) => {
        e.preventDefault();
        fetchAPIupdate();
        setValue("");
        setTitre("");
    };
    /////////////////////////
    return (

        <div>
            {!!localStorage.getItem('jwt')?
            <div className="div2">


                <div>
                    <div>
                        <label htmlFor="file" className="sr-only">
                            Choose a file
                        </label>
                        <input id="file" type="file" onChange={handleFileChange} />
                    </div>
                    {file && (
                        <section>
                            File details:
                            <ul>
                                <li>Name: {file.name}</li>
                                <li>Type: {file.type}</li>
                                <li>Size: {file.size} bytes</li>
                            </ul>
                        </section>
                    )}

                    {file && <button onClick={handleUpload}>Upload a file</button>}

                    <label id="idLabel">
                    </label>
                    <div className="containerColumn">

                        <div className="containerColumn">
                            <label>Titre</label>
                            <input placeholder="Titre" value={titre} onChange={(e) => Valuechange(e)}/>{" "}
                            <p className="error">{messageErrorTitre}</p>
                        </div>
                        <div className="containerColumn">
                            <label>Description</label>
                            <textarea placeholder="Description" value={valueInputDescription}
                                      onChange={(e) => valueChangeDescription(e)}/>{" "}
                            <p className="error">{messageErrorDescription}</p>
                        </div>
                        <div className="containerCote">
                            <button onClick={modifier}>modifier</button>
                            <button onClick={fetchCreer}>creer</button>

                        </div>

                    </div>
                </div>
                {!load ? <div className="containerColumn">


                    {listItem.map((item, index) => {
                            return (
                                <Item
                                    del={del}
                                    changeColor={changeColor}
                                    changeDec={textebisDesc}
                                    changetext={textebis}
                                    updatefunc={idchange}
                                    title={item.title}
                                    fileName={item?.pictureName}
                                    description={item.description}
                                    isPublish={item.isPublish}
                                    id={item.id}
                                    numeberlike={item.numberLike}
                                    numeberDislike={item.numberDisLike}
                                ></Item>
                            );
                        })}

                    </div>
                    : <h1>Chargement...</h1>}

            </div>
                :<p style={{color:"red", textAlign:"center"}}>"veuillez vous connecter."</p>}
        </div>

    );
}
