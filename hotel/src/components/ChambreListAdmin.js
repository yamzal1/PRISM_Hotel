import React from 'react'
import ChambreModifier from './ChambreModifier'

export default function ChambreList({ rooms }) {
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
          rooms.map(item => {
            return <ChambreModifier key={ item.id } room={ item }/>;
          })
        }
      </div>
    </section>
  );
}
