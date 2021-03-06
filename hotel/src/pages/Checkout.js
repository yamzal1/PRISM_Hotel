import React from "react";
import Hero from "../components/Hero";
import MyCards from "../components/Payment";
import Banniere from "../components/Banniere";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { valideForm } from "../components/Payment";

const Checkout = (props) => {
  const location = useLocation();
  const date = location.state.date.value.toString();
  const dateM = date.split(",");
  const dateDeb = dateM[0].split("GMT");
  const dateFin = dateM[1].split("GMT");

  function reserveRoom() {
    var slug = location.state.slug;
    var headers = new Headers();
    headers.append("cache-control", "no-cache");
    headers.append("content-type", "application/json");
    headers.append("x-apikey", "62348bc0dced170e8c83a37c");

    fetch("https://pommedeterre-20df.restdb.io/rest/chambre", {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let selectedRoom;
          result.some(function (room) {
            if (room.slug == slug) {
              selectedRoom = room;
              return true;
            }
          });

          selectedRoom.reserved = true;
          selectedRoom.begin_date = dateDeb;
          selectedRoom.end_date = dateFin;

                  fetch("https://pommedeterre-20df.restdb.io/rest/chambre", {
                      method: 'POST',
                      headers: headers,
                      mode: 'cors',
                      cache: 'default',
                      body: JSON.stringify(selectedRoom)
                  })
                      .then(
								(result) => {
							notify()
						},
                          (error) => {
                              console.log(error)
                          }
                      )



                      var mailHeaders = new Headers();
                      mailHeaders.append("cache-control", "no-cache");
                      mailHeaders.append("content-type", "application/json");
                      mailHeaders.append("x-apikey", "62a1b0851a51777906aff8ad");

                      var message = "La chambre n??" + JSON.stringify(selectedRoom.id) + ", " + JSON.stringify(selectedRoom.name) + " a ??t?? r??serv??e."
        
        
                      fetch("https://dbhotel-bb79.restdb.io/mail", {
                        method: 'POST',
                        headers: mailHeaders,
                        mode: 'cors',
                        cache: 'default',
                        body: JSON.stringify({
                          "to": "reactjshotel@yopmail.com",
                          "subject": "Une nouvelle r??servation a ??t?? effectu??e !",
                          "html": message,
                          "company": "Royal h??tel",
                          "sendername": "Ne pas r??pondre"
                        })
                      })
                  
                        .then(
                          (error) => {
                            console.log(error)
                          }
                        )


              },
              (error) => {
                  console.log(error)
              },


              )
              
              
    }

  const notify = () =>
    toast.success("Paiement effectu?? ! Vous allez recevoir un mail", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onOpen: setTimeout(() => {
        document.location.href = "/";
      }, 5000),
    });

  return (
    <>
      <Hero hero="roomsHero">
        <Banniere title="Paiement"></Banniere>
      </Hero>
      <div className="centrer">
        <MyCards />
        <button onClick={reserveRoom} className="btn-primary btn-payer">
          Payer
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;
