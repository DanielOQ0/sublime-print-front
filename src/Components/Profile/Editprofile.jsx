import React from 'react'
import './editprofile.css'

export default function Editprofile() {
  return (
    <div className='profile'>
     <div class="form-container">
        <form action="">

           <div class="profile-box">
               <h4 class="profile-subtitle">Edit Profile</h4>
               <div class="avatar"></div>
               <div class="input-file-container">
                    <input type="file" name="avatar" id=""/>
               </div>
           </div>

           
           <div class="profile-form">
                <div class="profile-box">
                    <h4 class="profile-subtitle">Personal information</h4>
                    <div class="input-container">
                        <input class="input-style" type="email" name="email" placeholder="Ingrese su email" value="user.email@mail.com" readonly/>
                    </div>
                    <div class="input-container">
                        <input class="input-style" type="text" name="name" placeholder="Name"/>
    
                    </div>
                    <div class="input-container">
                        <input class="input-style" type="text" name="lastname" placeholder="Last name"/>
                    </div>
                    <div class="input-container">
                        <input class="input-style" type="number" name="dni" placeholder="DNI"/>
                    </div>
                </div>
                <div class="profile-box">
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
                </div>
           </div>
            <div class="button-container">
                <button type="submit" class="btn btn-edit">Send</button>
            </div> 
        </form>
    </div>
    </div>
  )
}
