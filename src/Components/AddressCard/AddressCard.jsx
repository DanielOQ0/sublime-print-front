import React from 'react'
import './addresscard.css'
import casa from '../../Media/casa.png'
import lapiz from '../../Media/lapiz.png'
import borrador from '../../Media/borrador.png'
import { Link } from 'react-router-dom'

export default function AddressCard(props) {



    return (
    <div className='AddressCard'>
        <img src={casa} alt='casa' />
        <div className='AddressCard-text'>
            <p className='direccion'>{props.address}</p>
            <p>{props.location}</p>
            <p>Phone: {props.phone}</p>
        </div>
        <div className='AddressCard-actions'>
            <Link>
                <img src={lapiz} alt='lapiz' />
            </Link>
            <Link>
                <img src={borrador} alt='borrador' />
            </Link>
        </div>
    </div>
    )
}
