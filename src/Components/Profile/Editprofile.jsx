import React, { useEffect, useRef, useState } from 'react'
import './editprofile.css'
import getUser from '../../Store/CaptureUser/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { current } from '@reduxjs/toolkit'

const { captureUser } = getUser

export default function Editprofile() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let user = useSelector(store => store.user.user)
    let url = 'http://localhost:8080/api/users/'
    let token = localStorage.getItem('token')
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let name = useRef()
    let file = useRef()
    
    useEffect(
        () => {
            dispatch(captureUser())
        },
        []
        )

        const handleSubmit = async (e) => {
            e.preventDefault()
            const data = new FormData()
            data.append('file',file.current.files[0])
            data.append('name',name.current.value)
        try {
            await axios.put(url,data,headers)
            toast.success('User successfully updated', { duration: 1500})
            dispatch(captureUser())
            navigate('/profile')
            window.location.reload(true)
        } catch (error) {
            toast.error(error.response.data.message, { duration: 1500})
        }
    } 

return (
    <div className='profile'>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div className="profile-box">
            <h4 className="profile-subtitle">Edit Profile</h4>
            <div className="avatar"><img  className="img-photo-edit" src={user.photo} alt="" /></div>
            <div className="input-file-container">
                <input type="file" name="avatar" ref={file} />
            </div>
        </div>
        <div className="profile-form">
                <div className="profile-box">
                    <h4 className="profile-subtitle">Personal information</h4>
                    <div className="input-container">
                        <input className="input-style" type="email" name="email" placeholder="Ingrese su email" defaultValue={user.email} readOnly />
                    </div>
                    <div className="input-container">
                        <input className="input-style" type="text"  defaultValue={user.name}  ref={name}/>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button type="submit" className="btn btn-edit" >Send</button>
            </div> 
        </form>
    </div>
    <Toaster />
    </div>
)
}
