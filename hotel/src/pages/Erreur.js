import React from 'react'
import Hero from '../components/Hero'
import Banniere from '../components/Banniere';
import {Link} from 'react-router-dom';
export default function Erreur() {
  return <Hero>
    <Banniere title="404" subtitle="Page non trouvée">
      <Link to="/" className="btn-primary">
        Retour à l'accueil
      </Link>
    </Banniere>
  </Hero>;
}
