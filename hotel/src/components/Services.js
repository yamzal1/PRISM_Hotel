import React, { Component } from "react";
import Titre from "./Titre";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktails gratuits",
        info: "A votre arrivée, cocktails gratuits rien que pour vous !",
      },
      {
        icon: <FaHiking />,
        title: "Randonnées",
        info: "Organisation de randonnées",
      },
      {
        icon: <FaShuttleVan />,
        title: "Transport",
        info: "Service hôtelier pour vous accueillir",
      },
      {
        icon: <FaBeer />,
        title: "Services chambres",
        info: "Disponibilités 24/24h pour vous apporter ce que vous désirez !",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Titre title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
