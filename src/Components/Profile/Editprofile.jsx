import React from 'react'
import './editprofile.css'
import { useRef, useEffect, useState } from 'react'
import axios from 'axios'

export default function Editprofile() {
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    const editForm = useRef(); 
    let [user, setUser] = useState({});

    useEffect(() => { 
        axios.get('http://localhost:8080/api/users/me', headers)
        .then(res => { 
            setUser(res.data.user); 
        });
        }, 
        []
    );

   
    const handleAccept = async (event) => {
        event.preventDefault();
        const data = {
            photo: editForm.current[0].value,
            name: editForm.current[2].value,
        }
        console.log(data)
    }

  return (
    <div className='profile'>
     <div className="form-container">
        <form ref={editForm}>

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
                        <input className="input-style" type="email" name="email" placeholder="Ingrese su email" defaultValue={user.email} readonly/>
                    </div>
                    <div className="input-container">
                        <input className="input-style" type="text" name="name" placeholder="Name" defaultValue={user.name}/>
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
                <button type="submit" className="btn btn-edit" onClick={handleAccept} >Send</button>
            </div> 
        </form>
    </div>
    </div>
  )
}
