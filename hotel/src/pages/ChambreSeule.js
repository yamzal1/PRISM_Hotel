/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banniere from "../components/Banniere";
import { Link } from "react-router-dom";
import { RoomContext } from "../context"

export default class ChambreSeule extends Component {
  constructor(props){
    super(props)
    this.state={
      slug:this.props.match.params.slug,
      defaultBcg
    }
    console.log(this.props)
  }
  static contextType = RoomContext;
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    return <div>bonjour de la chambre seule {room.name}</div>;
  }
}
