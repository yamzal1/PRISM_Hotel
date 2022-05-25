import React from "react";
import Hero from "../components/Hero";
import Banniere from "../components/Banniere";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import RecoChambre from "../components/RecoChambre";
import Button from "../components/StyledHero"
const Page_Accueil = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banniere
          title="Royal Hotel"
          subtitle="Découvrez nos magnifiques chambres"
        >
          <Link to="/chambres" className="btn-primary">
            Nos chambres
          </Link>
        </Banniere>
      </Hero>
      <Services />
      <RecoChambre />
      <Button>
        hello world
      </Button>
    </>
  );
};

export default Page_Accueil;
