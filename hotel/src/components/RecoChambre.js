import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Chambre from "./Chambre";
import Titre from "./Titre";
export default class RecoChambre extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Chambre key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Titre title="Nos recommandations" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
