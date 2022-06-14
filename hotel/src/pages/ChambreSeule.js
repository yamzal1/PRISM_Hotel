/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banniere from "../components/Banniere";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Calendar from "../components/Calendar";
export default class ChambreSeule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
    console.log(this.props);
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/chambres" className="btn-primary">
            Retour aux chambres
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banniere title={`${name}`}>
            <Link to="/chambres" className="btn-primary">
              Retour aux chambres
            </Link>
          </Banniere>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Détails</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Informations</h3>
              <h6><strong>Prix :</strong> {price}€ <br/>
                  <strong>Taille :</strong> {size} m2<br/>
                <strong>Capacité maximum :</strong>{" "}
                {capacity > 1 ? `${capacity} personnes` : `${capacity} personnes`}<br/>
                <strong>{pets ? "Animal autorisé " : "Aucun animal autorisé"}</strong><br/>
                <strong>{breakfast && "Petit déjeuner inclus"}</strong></h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>Les avantages</h3>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
        <div className="groupe">
          <div className="calendar">
            <p>Selectionner vos dates de séjour :</p>
            <Calendar />
          </div>
        </div>
      </>
    );
  }
}
