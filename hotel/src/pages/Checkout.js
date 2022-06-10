import React from "react";
import Hero from "../components/Hero";
import MyCards from "../components/Payment";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Hero hero="roomsHero">
            <MyCards />
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
            result.some(function(room) {
                if (room.slug == slug) {
                    selectedRoom = room;
                    return true;
                }
            });

            selectedRoom.reserved = true;
            selectedRoom.begin_date = '12-05-2022';

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
      </div>
    </>
  );
};

export default Checkout;