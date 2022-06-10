import React from "react";
import Hero from "../components/Hero";
import MyCards from "../components/Payment";
import { ToastContainer, toast } from 'react-toastify';
//import { injectStyle } from "react-toastify/dist/inject-style";
import 'react-toastify/dist/ReactToastify.min.css'

// CALL IT ONCE IN YOUR APP
//injectStyle();

const Checkout = () => {
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
            <MyCards />
      </Hero>
      <div className="centrer">
        <button onClick={notify} className="btn-primary">
          Payer
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;