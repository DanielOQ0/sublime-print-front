import React, { useRef } from 'react'
import './signup.css'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function SignUp() {
    
    let name = useRef()
    let email = useRef()
    let password = useRef()
    let confirmPassword = useRef()
    let url = 'http://localhost:8080/api/users/signup'


    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }
        if ( password.current.value !== confirmPassword.current.value ){
            return toast.error('Password must be the same')      
        }
        else {
            try {
                await axios.post( url, data )
                toast.success('User Successfully Registered')
                e.target.reset()
            } catch (error) {
                toast.error(error.response.data.message,{duration:1000})
            }   
        } 
    }

    return (
    <div>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                        ref={name}
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />
                        <input 
                            ref={email}
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
                        <input 
                            ref={password}
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            ref={confirmPassword}
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />
                        <button
                            type="submit"
                            class="boton-crearcuente w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                    </form>
                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        <Toaster />
    </div>
    )
}
