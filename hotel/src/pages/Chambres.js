import React from "react";
import { Link } from "react-router-dom";
import Banniere from "../components/Banniere";
import Hero from "../components/Hero";
import ChambreContainer from "../components/ChambreContainer";

const Chambres = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banniere title="Nos chambres">
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </Banniere>
      </Hero>
      <ChambreContainer />
    </>
  );
};

export default Chambres;
