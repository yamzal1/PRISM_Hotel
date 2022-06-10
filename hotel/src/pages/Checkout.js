import React from "react";
import Hero from "../components/Hero";
import MyCards from "../components/Payment";

const Checkout = (props) => {
  return (
    <>
      <Hero hero="roomsHero">
            <MyCards />
      </Hero>
    </>
  );
};

export default Checkout;