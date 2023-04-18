import React from 'react'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import userActions from "../../Store/CaptureUser/actions"
import AddressContain from '../AddressContain/AddressContain'
import OrdersContain from '../OrdersContain/OrdersContain'
import ProfileContain from '../ProfileContain/ProfileContain'
const { captureUser } = userActions



export default function Profile() {

    let dispatch = useDispatch()
    

    useEffect(() => { 
        dispatch(captureUser())
        },
        []
    );

    return (
        <div className="profile-page bg-blueGray-200">
            <ProfileContain />
            <OrdersContain />
            <AddressContain />
        </div>
) 
}
