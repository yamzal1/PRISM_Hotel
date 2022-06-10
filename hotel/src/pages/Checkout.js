import React from "react";
import Hero from "../components/Hero";
import MyCards from "../components/Payment";
import Banniere from "../components/Banniere";
import { ToastContainer, toast } from 'react-toastify';
//import { injectStyle } from "react-toastify/dist/inject-style";
import 'react-toastify/dist/ReactToastify.min.css'
import { Link } from "react-router-dom";

// CALL IT ONCE IN YOUR APP
//injectStyle();

const Checkout = (props) => {
    const notify = () => toast.success("Paiement effectué ! Vous allez recevoir un mail", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onOpen: setTimeout(() => {
            document.location.href = "/"
        }, 5000)
    });

    return (
        <>
            <Hero hero="roomsHero">
                <Banniere title="Payement">
                </Banniere>
            </Hero>
            <div className="centrer">
                <Link onClick={() => {
                    var slug = "yannis";
                    var headers = new Headers();
                    headers.append("cache-control", "no-cache");
                    headers.append("content-type", "application/json")
                    headers.append("x-apikey", "62348bc0dced170e8c83a37c");

                    fetch("https://pommedeterre-20df.restdb.io/rest/chambre", {
                        method: 'GET',
                        headers: headers,
                        mode: 'cors',
                        cache: 'default'
                    })
                        .then(res => res.json())
                        .then(
                            (result) => {
                                let selectedRoom;
                                result.some(function (room) {
                                    if (room.slug == slug) {
                                        selectedRoom = room;
                                        return true;
                                    }
                                });

                                console.log(dateFin);

                                // selectedRoom.reserved = true;
                                // selectedRoom.begin_date = dateDeb;

                                console.log(selectedRoom);

                                fetch("https://pommedeterre-20df.restdb.io/rest/chambre", {
                                    method: 'POST',
                                    headers: headers,
                                    mode: 'cors',
                                    cache: 'default',
                                    body: JSON.stringify(selectedRoom)
                                })
                                    .then(
                                        (error) => {
                                            console.log(error)
                                        }
                                    )
                            },
                            (error) => {
                                console.log(error)
                            }
                        )
                }} className="btn-primary">
                    Reserver la chambre
                </Link>
                <MyCards />
                <button onClick={notify} className="btn-primary btn-payer">
                    Payer
        </button>
                <ToastContainer />
            </div>
        </>
    );
};

export default Checkout;