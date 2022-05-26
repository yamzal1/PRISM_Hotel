import React from 'react'
import Chambre from './Chambre'
export default function ChambreList({rooms}) {
  if(rooms.length === 0){
    return (
      <div className="empty-search">
        <h3>Aucune chambre </h3>
      </div>
      )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map(item =>{
            return <Chambre key={item.id} room={item}/>;
          })
        }
      </div>
    </section>
  );
}
