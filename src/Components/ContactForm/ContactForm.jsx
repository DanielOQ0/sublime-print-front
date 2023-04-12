import React, { useRef } from 'react'
import './contact-form.css'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactForm() {
    
    return (
    <div>
        <div className="bg-gray-200 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <motion.div
                    initial={{y:200}}
                    animate={{y:0, duration:2}}
                    className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Contact</h1>
                    <form>
                        <input 
                         type="text"
                         className="block border border-grey-light w-full p-3 rounded mb-4"
                         name="fullname"
                         placeholder="Full Name" 
                        />
                        <input 
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          placeholder="Email" />
                        <input 
                          type="number"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="phone"
                          placeholder="phone number" 
                          />
                            
                        <textarea
                          name="message"
                          id="message"
                          rows={10}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={''}
                          placeholder="message" 
                        />
                        
                        <button
                          classNameName='boton-crearcuente'
                          type="submit"
                          className="boton-crearcuente w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Lets´s talk
                        </button>
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
                </motion.div>
            </div>
        </div>
        <Toaster />
    </div>
    )
}