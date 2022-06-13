import React from "react";
import ChambreFilter from "./ChambreFilter";
import ChambreListAdmin from "./ChambreListAdmin";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }){
  const { loading, sortedRooms, rooms } = context;

  if(loading){
    return <Loading />;
  }
  return (
    <div>
      <ChambreFilter rooms={ rooms } />
      <ChambreListAdmin rooms={ sortedRooms }/>
    </div>
  );
}

export default withRoomConsumer(RoomContainer);
