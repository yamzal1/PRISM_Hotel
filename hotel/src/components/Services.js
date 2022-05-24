import React, { Component } from "react";
import Titre from "./Titre";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktails gratuits",
        info: "coucou",
      },
      {
        icon: <FaHiking />,
        title: "Cocktails gratuits",
        info: "coucou",
      },
      {
        icon: <FaShuttleVan />,
        title: "Cocktails gratuits",
        info: "coucou",
      },
      {
        icon: <FaBeer />,
        title: "Cocktails gratuits",
        info: "coucou",
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
