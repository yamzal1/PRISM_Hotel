/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
import { RoomConsumer } from '../context';

export default function Chambre({room}) {
  const{ name, slug, images, price, reserved } = room;

  return (
    <article className='room'>
        <div className='img-container'>
            <img src={ images[0] || defaultImg } style={{width: '300px', height: '200px', objectFit: 'cover'}} alt="single room" />
            <div className='price-top'>
                <h6>{ price }€</h6>
                <p>par nuit</p>
            </div>
            <Link to={ `/chambres/${slug}`} className="btn-primary room-link">
                Informations
            </Link>
        </div>
        <p className='room-info'>{ name }</p>
    </article>
  )
}

Chambre.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
        reserved:PropTypes.bool.isRequired
    })
}
