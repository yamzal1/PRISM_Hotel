import React from "react";
import Hero from "../components/Hero";
import MyCards from "../components/Payment";
import Banniere from "../components/Banniere";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Checkout = (props) => {
	const location = useLocation()
	const date = location.state.date.value.toString()
	const dateM = date.split(',')
	const dateDeb = dateM[0].split('GMT')
	const dateFin = dateM[1].split('GMT')

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
                {/* <button onClick={reserveRoom} className="btn-primary">
                    Reserver la chambre
                </button> */}
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