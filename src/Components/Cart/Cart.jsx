import React, { useState } from "react";
import './Cart.css'
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import axios from "axios";

function Cart({cla}) {

    const [show, setShow] = useState(false);
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let [renderModal, setRenderModal] = useState(false)

    const payments = [
        {
            id: "64370db045febdab73c4d1ec",
            title: "Go to buy",
            currency_id: "ARS",
            price: 1000,
            quantity: 1
        }
    ];

    function handlePayments(pay) {
        let paymentData = payments.filter( payment => payment.id == pay.target.id)
        axios.post("https://localhost:8080/api/payments", paymentData, headers)
            .then( res => window.location.href = res.data.response.body.init_point);           
    }

    function handleOpenPayments(){
        setRenderModal(!renderModal)
    }

    function handleClosePayments(){
        setRenderModal(!renderModal)
    }

    function handleOpen(){
        setShow(!show)
        let url = 'http://localhost:8080/api/cart'
        axios.get(url,headers)
        .then((res)=>{
            console.log(res.data.cart);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <>
            <div>
                <div className={cla}>
                    <motion.span 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpen}>
                        <ShoppingBagIcon className='h-10 w-10'/>
                    </motion.span>
                </div>
                {show && (
                    <div className="containerCart w-full h-full bg-black bg-opacity-90 top-0 right-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="containerCart w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                                    {
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" alt className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4">
                                            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">North wolf bag</p>
                                                <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">$</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">$</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">$</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$</p>
                                            </div>
                                            <button onClick={() => {
                                                                setShow(!show);
                                                                handleOpenPayments();
                                                            }}
                                                             className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                )}
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
            {renderModal ? <div className='modal'>
                                            <div className='payCard'>
                                            <h2>Continue to select a payment method and complete the purchase</h2>
                                                <div className='modal-bottom'>
                                            {
                                            payments.map( (payment,i) =>{
                                    let card = <p id={payment.id} className='paymentBtn' key={i} onClick={handlePayments}>{payment.title}</p>
                                    return card
                                })
                            }
                        </div>
                        <p className='payment-close' onClick={handleClosePayments}>Cancel</p>
                    </div> 
                </div> : "" }
        </>
    );
}

export default Cart;
