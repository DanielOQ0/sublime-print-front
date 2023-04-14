import { TrashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import cartActions from "../../Store/CaptureCart/actions"
import priceActions from "../../Store/ChangePrice/actions"

const { captureCart } = cartActions
const { changePrice } = priceActions

export default function BagCard({product}) {

    let dispatch = useDispatch()
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let option = []
    for(let i = 0; i < product.product_id.stock; i++) {
        option.push({value:i+1})
    }
    
    async function handleQuantity(e){
        e.target.disabled=true
        try {
            let url ='http://localhost:8080/api/cart/'+product._id
            let body = {cantidad:e.target.value}
            await axios.put(url,body,headers)
            toast.success('Updated quantity')
            dispatch(changePrice())
            e.target.disabled=false
        } catch (error) {
            console.log(error);
            toast.error('Upss. Could not update quantity')
            e.target.disabled=false
        }
    }
    async function handleRemove(){
        let url='http://localhost:8080/api/cart/delete-one/'+product._id
        try {
            await axios.delete(url,headers)
            toast("Deleted!!", {icon:'🚮',})
            dispatch(captureCart())
            dispatch(changePrice())
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

  return (
    <div key={product._id}>
        <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4">
                <img src={product.product_id.image} className="w-full h-full object-center object-cover" />
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{product.product_id.name}</p>
                    <select onChange={handleQuantity} id={product._id} className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                        {
                            option.map((each, index)=>{
                               return each.value!=product.cantidad?
                               <option key={index}>{each.value}</option>:
                               <option key={index} selected>{each.value}</option>
                            })
                        }
                    </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Size selected: {product.size?product.size:"Doesn't apply"}</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Color selected: {product.color?product.color:"Doesn't apply"}</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <div onClick={handleRemove} className="flex items-center">
                        <TrashIcon className='h-4 w-4 text-red-500'/>
                        <p className="text-xs leading-3 underline text-red-500 cursor-pointer">Remove</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">$ {product.product_id.price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
