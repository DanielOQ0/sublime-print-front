import React, { useEffect, useRef, useState } from 'react'
import './newproductform.css'
import get_Categories from '../../Store/GetCategories/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const { getCategories} = get_Categories

export default function NewProductForm() {

    let dispatch = useDispatch()
    let categories = useSelector(store => store.categories.categories)
    let [ id, setId ] = useState('')
    let file = useRef()
    let name = useRef()
    let price = useRef()
    let stock = useRef()
    let imageName = useRef()
    let description = useRef()

    let url = 'http://localhost:8080/api/products/'
    let token = localStorage.getItem('token')
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    
    useEffect(
        () => {
            dispatch(getCategories())
        },
        []
        )
        
    const idCategory = (e) => {
        setId(e.target.value)
    }


    const handleSubmit = async (e) => {
            e.preventDefault()
            const data = new FormData()
                data.append('file', file.current.files[0])
                data.append('name', name.current.value)
                data.append('price', price.current.value)
                data.append('stock', stock.current.value)
                data.append('key', imageName.current.value)
                data.append('description', description.current.value)

            try {
                await axios.post(url+id, data, headers)
                toast.success('New Product Successfully Created')
                e.target.reset()
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message, { duration: 1500})
            }
    }
    



    return (
        <div className='from-container'>
            <form onSubmit={handleSubmit}>
                <div className="border-b border-gray-900/10 pb-12 bg-blueGray-200 bg-white shadow-xl rounded-lg">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">NEW PRODUCT</h1>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            NAME
                        <div className="mt-2">
                            <input
                            ref={name}
                            type='text'
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            CATEGORY
                        <div className="mt-2">
                            <select
                            onChange={idCategory}
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option value=''>CHOSSE A CATEGORY</option>
                            {
                                categories ? (
                                    categories.map((cat,i) => 
                                    <option value={cat._id} key={i}>{cat.name}</option>
                                    )
                                ) : null
                            }
                            </select>
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            SIZES
                        <div className="mt-2">
                            <select
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            COLORS
                        <div className="mt-2">
                            <select
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            PRICE
                        <div className="mt-2">
                            <input
                            ref={price}
                            type="number"
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            STOCK
                        <div className="mt-2">
                            <input
                            ref={stock}
                            type="number"
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            IMAGE
                        <div className="mt-2">
                            <input
                            ref={file}
                            type="file"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                            IMAGE NAME
                        <div className="mt-2">
                            <input
                            ref={imageName}
                            type="text"
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="col-span-full">
                            DESCRIPTION 
                        <div className="mt-2">
                            <textarea
                            ref={description}
                            type="text"
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className='boton-acciones col-span-full'>
                        <button className='border-gray-900/10 bg-blueGray-200 bg-white shadow-xl rounded-lg'> SAVE</button>
                        {/* <button className='border-gray-900/10 bg-blueGray-200 bg-white shadow-xl rounded-lg'> CANCEL</button> */}
                        </div>

                    </div>
                </div>
            </form>
            <Toaster />
        </div>
    )
}
