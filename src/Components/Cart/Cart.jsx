import React, { useEffect, useState } from "react";
import './Cart.css'
import { ArchiveBoxXMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import BagCard from "../BagCard/BagCard";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../Store/CaptureCart/actions"
import priceActions from "../../Store/ChangePrice/actions"
import axios from "axios";

const { changePrice } = priceActions
const { captureCart } = cartActions

let products = []

function Cart({cla}) {

    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let dispatch = useDispatch();
    products = useSelector(store=>store.cart.cart)
    let summary= useSelector(store=>store.price)
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let productsIds
    let productsNames 
    let payments

    if(products.length!=0){
        productsIds = products.map((e) => {
        return e._id
        })
        productsNames = products.map((e) => {
            return e.product_id.name
        })
        payments = 
        {
            id : productsIds.join(),
            name : productsNames.join(),
            price: summary.total,
        }
    }


    //console.log(payments);
    function handlePayments() {
        axios.post('http://localhost:8080/api/payments',payments, headers)
        .then( (res) => {window.location.href = res.data.response.body.init_point})
        .catch((error)=>{ console.log(error);})     
    }
    
    useEffect(()=>{
        dispatch(changePrice())
    },[])

    function handleOpen(){
        setShow(!show)
        setIsLoading(true);
        dispatch(captureCart())
        .then(()=>{
            setIsLoading(false);
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
                <motion.div 
                initial={{  x: 700 }}
                animate={{  x: 0 }}
                transition={{duration:0.5}}
                className="containerCart w-full h-full bg-black bg-opacity-90 top-0 right-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
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
                                {isLoading? <div className="spinner-container-cart"><LoadingSpinner size={"normal"}/></div>:
                                    products.length!=0 ?
                                    products?.map((each)=>{
                                        return  <BagCard product={each}/>
                                    }):
                                <div className="container-empty-cart"><ArchiveBoxXMarkIcon className="w-12 h-12"/><p>BAG EMPTY</p></div>
                                }
                            </div>
                            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                    <div>
                                        <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                        <div className="flex items-center justify-between pt-16">
                                            <p className="text-base leading-none text-gray-800">Subtotal</p>
                                            <p className="text-base leading-none text-gray-800">$ {summary.subtotal}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Shipping</p>
                                            <p className="text-base leading-none text-gray-800">$ </p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Tax</p>
                                            <p className="text-base leading-none text-gray-800">$ {summary.tax}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-gray-800">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800">$ {summary.total}</p>
                                        </div>
                                        <button onClick={handlePayments} disabled={products.length===0}
                                                             className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Go pay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                )}
            </div>
        </>
    );
}

export default Cart;

