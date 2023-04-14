import React, { useEffect, useRef } from 'react'
import './editprofile.css'
import getUser from '../../Store/CaptureUser/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const { captureUser } = getUser

export default function Editprofile() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let user = useSelector(store => store.user.user)
    let url = 'http://localhost:8080/api/users/'
    let token = localStorage.getItem('token')
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let name = useRef()

    useEffect(
        () => {
            dispatch(captureUser())
        },
        []
        )
        
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
        }
        try {
            await axios.put(url,data,headers)
            toast.success('User successfully updated')
            dispatch(captureUser())
            navigate('/profile')
        } catch (error) {
            console.log(error)
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
                <input type="file" name="avatar" id=""/>
            </div>
        </div>

    
        <div className="profile-form">
                <div className="profile-box">
                    <h4 className="profile-subtitle">Personal information</h4>
                    <div className="input-container">
                        <input className="input-style" type="email" name="email" placeholder="Ingrese su email" defaultValue={user.email} />
                    </div>
                    <div className="input-container">
                        <input className="input-style" type="text"  defaultValue={user.name}  ref={name}/>
                    </div>
                    {/* <div className="input-container">
                        <input className="input-style" type="text" name="lastname" placeholder="Last name"/>
                    </div> */}
                    {/* <div className="input-container">
                        <input className="input-style" type="number" name="dni" placeholder="DNI"/>
                    </div> */}
                </div>
                {/* <div className="profile-box">
                    <h4 className="profile-subtitle">Contact information</h4>
                        <div className="input-container">
                            <input className="input-style" type="tel" name="tel" placeholder="phone"/>
                        </div>
                        <div className="input-container">
                            <input className="input-style" type="tel" name="tel" placeholder="phone"/>
                        </div>
                        <div className="input-container">
                            <input className="input-style" type="tel" name="tel" placeholder="phone"/>
                        </div>
                
                        <div className="input-container">
                            <input className="input-style" type="text" name="domicilio" placeholder="Street and number"/>
                        </div>
                </div> */}
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
