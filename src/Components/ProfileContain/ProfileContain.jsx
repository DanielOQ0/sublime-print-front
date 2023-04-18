import React, { useRef } from 'react'
import './profilecontain.css'
import { useSelector } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'



export default function ProfileContain() {

    let user = useSelector(store => store.user.user )
    let name = useRef()
    let file = useRef()

    let url = 'http://localhost:8080/api/users/'
    let token = localStorage.getItem('token')
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', name.current.value)
        data.append('file', file.current.files[0])
        try {
            await axios.put( url, data, headers)
            toast.success('User Successfully Updated', { duration: 1500})
            window.location.reload(true)
        } catch (error) {
            toast.error(error.response.data.message, { duration: 1500})
        }

    }


    return (
        <div className="container-profile  bg-blueGray-200 container mx-auto  border-b border-gray-900/10  bg-blueGray-200 bg-white shadow-xl rounded-lg">
            <form onSubmit={handleSubmit} className='formProfile'>
                    <img src={user.photo} alt='foto perfil ' className='fotoPerfil'/>
                    <input ref={file} type='file' className='file'/>
                    <input
                    ref={name}
                    type='text'
                    placeholder={user.name}
                    className="name block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <h3>{user.email}</h3>
                    <button className='boton-save-newProduct border-gray-900/10 bg-blueGray-200 bg-white shadow-xl rounded-lg'>
                    SAVE
                    </button>

            </form>
            <Toaster />
        </div>
    )
}
