import React from 'react'
import './editprofile.css'

import { useRef, useEffect, useState } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Editprofile() {
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    const editForm = useRef(); 
    let [user, setUser] = useState({});

    //let [edit, setEdit] = useState({});
    

    useEffect(() => { 
        axios.get('http://localhost:8080/api/users/me', headers)
        .then(res => { 
            setUser(res.data.user); 
        });
        }, 
        []
    );

    /* useEffect(() => { 
        axios.put('http://localhost:8080/api/users/me', headers)
        .then(res => { 
            setEdit(res.data.user); 
        });
        }, 
        []
    ); */

    const handleAccept = async (event) => {
        event.preventDefault();
        const data = {
            photo: editForm.current[0].value,
           // email: editForm.current[1].value,
            name: editForm.current[2].value,
        }
        console.log(data)
    }

  return (
    <div className='profile'>
     <div class="form-container">
        <form ref={editForm}>

           <div class="profile-box">
               <h4 class="profile-subtitle">Edit Profile</h4>
               <div class="avatar"><img src={user.photo} alt="" /></div>
               <div class="input-file-container">
                    <input type="file" name="avatar" id=""/>
               </div>
           </div>

           
           <div class="profile-form">
                <div class="profile-box">
                    <h4 class="profile-subtitle">Personal information</h4>
                    <div class="input-container">
                        <input class="input-style" type="email" name="email" placeholder="Ingrese su email" defaultValue={user.email} readonly/>
                    </div>
                    <div class="input-container">
                        <input class="input-style" type="text" name="name" placeholder="Name" defaultValue={user.name}/>
                    </div>
                    {/* <div class="input-container">
                        <input class="input-style" type="text" name="lastname" placeholder="Last name"/>
                    </div> */}
                    {/* <div class="input-container">
                        <input class="input-style" type="number" name="dni" placeholder="DNI"/>
                    </div> */}
                </div>
                {/* <div class="profile-box">
                    <h4 class="profile-subtitle">Contact information</h4>
                        <div class="input-container">
                            <input class="input-style" type="tel" name="tel" placeholder="phone"/>
                        </div>
                        <div class="input-container">
                            <input class="input-style" type="tel" name="tel" placeholder="phone"/>
                        </div>
                        <div class="input-container">
                            <input class="input-style" type="tel" name="tel" placeholder="phone"/>
                        </div>
                      
                        <div class="input-container">
                            <input class="input-style" type="text" name="domicilio" placeholder="Street and number"/>
                        </div>
                </div> */}
           </div>
            <div class="button-container">
                <button type="submit" class="btn btn-edit" onClick={handleAccept} >Send</button>
            </div> 
        </form>
    </div>
    </div>
  )
}
