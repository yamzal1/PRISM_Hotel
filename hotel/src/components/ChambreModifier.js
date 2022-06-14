/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
import { RoomConsumer } from '../context';
import { FaPen, FaRegTrashAlt } from 'react-icons/fa';
import { useHistory } from "react-router-dom";

export default function Chambre({ room }) {
    const { id, name, slug, images, price, reserved } = room;

    const History = useHistory();

    const suppr = id => {
        var headers = new Headers();
        headers.append("cache-control", "no-cache");
        headers.append("x-apikey", "62348bc0dced170e8c83a37c");
        headers.append("content-type", "application/json");

        fetch("https://pommedeterre-20df.restdb.io/rest/chambre/" + id, {
            method: 'DELETE',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        }).then(
            (error) => {
                console.log(error)
                window.location.reload()
            }
        )
    };

    return (
        <article className='room'>
            <div className='img-container'>
                <img src={images[0] || defaultImg} style={{ width: '300px', height: '200px', objectFit: 'cover' }} alt="single room" />
                <div className='price-top'>
                    <h6>{price}€</h6>
                    <p>par nuit</p>
                </div>
            </div>
            <div>
                <span>
                    <FaPen
                        size={30}
                        cursor="pointer"
                        title="Modifier"
                    />
                </span>
                <span onClick={() => suppr(id)}>
                    <FaRegTrashAlt
                        size={30}
                        color="red"
                        cursor="pointer"
                        title="Supprimer"
                    />
                </span>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

Chambre.propTypes = {
    room: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        reserved: PropTypes.bool.isRequired
    })
}
