import React, { useRef } from 'react'
import './signup.css'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

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
        try {
            await axios.post(url, data)
            toast.success('User successfully Registered')
            e.target.reset()
        } catch (error) {
            toast.error(error.response.data.message, { duration: 1500});
            
        }
    }

    return (
    <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={handleSubmit}>
                            <input 
                            ref={name}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />
                            <input 
                                ref={email}
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />
                            <input 
                                ref={password}
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input 
                                ref={confirmPassword}
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />
                            <button
                                type="submit"
                                className="boton-crearcuente w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </form>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        <Toaster />
    </div>
    )
}
