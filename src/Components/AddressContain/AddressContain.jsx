import React, { useEffect, useState } from 'react'
import './addresscontain.css'
import AddressCard from '../AddressCard/AddressCard'
import axios from 'axios'


export default function AddressContain() {

    let url = 'http://localhost:8080/api/address-user'
    let token = localStorage.getItem('token')
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let [ address, setAddress ] = useState()

    useEffect(
        () =>{
            axios.get(url,headers)
                .then( res => setAddress(res.data.address))
        },
        []    
    )

    return (
        <div className="container-address  bg-blueGray-200 container mx-auto  border-b border-gray-900/10  bg-blueGray-200 bg-white shadow-xl rounded-lg">
            <h1> ADDRESSES </h1>
            {
                address ? (
                    address.map((add) =>(
                        <AddressCard address={add.address} location={`${add.state} - ${add.city}`} phone={add.contact_phone}  />
                    ))
                ) : null
            }
        </div>
    )
}
