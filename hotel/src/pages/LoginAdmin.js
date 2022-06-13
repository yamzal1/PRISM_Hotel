import React from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginAdmin = () => {

    const History = useHistory();

    const click = () => {
        if ((document.getElementById("nom").value === "root") && (document.getElementById("mdp").value === "root")) {
            History.push("/ChambreAdmin");
        }else {
            return toast.error("Erreur, veuillez recommencer !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <section className="centrer2">
            <div>
                <p> Entrer le nom d'utilisateur</p>
                <input type="text" id="nom"></input>
            </div>
            <div>
                <p> Entrer le mot de passe</p>
                <input type="password" id="mdp" ></input>
            </div>
            <button className="btn-primary" onClick={click}>
                Connexion
            </button>
            <ToastContainer />
        </section>
    );
}

export default LoginAdmin;