import React from "react";
import './App.css';

import PageAccueil from "./pages/PageAccueil";
import Chambres from "./pages/Chambres";
import ChambreSeule from "./pages/ChambreSeule";
import Erreur from "./pages/Erreur";

import { Route, Switch } from 'react-router-dom'

import Navigation from "./components/Navigation";
import Checkout from "./pages/Checkout";
import ChambreAdmin from "./pages/ChambreAdmin";
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <>
    <Navigation />

    <Switch>
      <Route exact path="/" component={ PageAccueil } />
      <Route exact path="/chambres/" component={ Chambres } />
      <Route exact path="/chambres/:slug" component={ ChambreSeule } />
      <Route exact path="/checkout/" component={ Checkout } />
      <Route exact path="/chambreadmin/" component={ ChambreAdmin } />
      <Route exact path="/loginadmin" component={ LoginAdmin } />
      <Route component={ Erreur } />
    </Switch>
    </>
  );
}

export default App;
