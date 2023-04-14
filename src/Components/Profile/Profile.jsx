import React from 'react'
import './profile.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'



export default function Profile() {

    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    let [user, setUser] = useState({});

    useEffect(() => { 
        axios.get('http://localhost:8080/api/users/me', headers)
        .then(res => { 
            setUser(res.data.user); 
        });
        }, 
        []
    );

    return (
    <div>
       
        <main className="profile-page">
            <section className="relative py-60 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relativeflex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                        <div className="flex flex-wrap justify-center">

                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="image-profile"> 
                                    <img alt="..." src={user.photo} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                                </div>
                            </div>
                            
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                 <Link className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" to="/profile-edit">
                                   Edit
                                </Link>
                            </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                
                            </div>
                            
                            </div>
                        </div>
                        <div className="text-center mt-12 p-16">
                            <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                            {user.name}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            {user.email}
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>{user.name}
                            </div>
                            <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{user.name}
                            </div>
                        </div>
                      
                        </div>
                    </div>
                </div>
            
            </section>
        </main>

    </div>
  ) 
}


 /* useEffect(() => { 
        axios.get('http://localhost:8080/api/users/me',headers)
        .then((res)=>{ console.log(res.data.user.name) })
       
           
    }) */