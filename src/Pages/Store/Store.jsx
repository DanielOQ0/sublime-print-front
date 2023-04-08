import React from 'react'
import './Store.css'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import detailsAction from "../../Store/Details/actions";
import Details from '../../Components/Details/Details';

const { captureDetails } = detailsAction;

export default function Store() {
    let dispatch = useDispatch()
    let openDetails = useSelector(store=>store.details.details)
    console.log(openDetails);
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
    ]
    function handleProduct(e){
        let product = products.find(each=>{return each.id===parseInt(e.target.id)})
        if(product){
            dispatch(captureDetails({details:true,product:product}))
        }
    }

  return (
    <>
        <div onClick={handleProduct} className='containerStore'>
            {products.map((product) => (
                <div key={product.id} className='containerProductaCard'>
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
        {openDetails?<Details init={true}/>:null}
    </>
  )
}
