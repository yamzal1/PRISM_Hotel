import React from "react";
import ChambreFilter from "./ChambreFilter";
import ChambreList from "./ChambreList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";


function RoomContainer({context}){
  const {loading,sortedRooms,rooms} = context;

  if(loading){
    return <Loading />;
  }
  return (
    <div>
      <ChambreFilter rooms={rooms} />
      <ChambreList rooms={sortedRooms}/>
    </div>
  );
}

export default withRoomConsumer(RoomContainer);


