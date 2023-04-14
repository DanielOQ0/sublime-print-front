import React from 'react'
import './ProductCard.css'

export default function ProductCard({product}) {
  return (

    <div className='group'>
        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
                src={product.image}
                alt={"image "+product.name}
                id={product._id}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="" />
                    {product.name}
                </h3>
               
            </div>
            <p className="text-sm font-medium text-gray-900">$ {product.price}</p>
        </div>
        
    </div> 
  )
}



  

    {/* <div className='bodyG'>
        <div className="containerg product">

        <img className="productImage productImg" src={product.image} alt={"image "+product.name} id={product._id}/>
        
        <div class="size productSize">
            <h4 className='h4'>SIZE</h4>
            <ul className='ul'>
            <li className='li'>9</li>
            <li className='li'>8</li>
            <li className='li'>7</li>
            </ul>
        </div>
        <div class="price productPrice">
            <h4 className='h4'>PRICE</h4>
            <span className='span'>{product.price}</span>
        </div>
        <div class="color productColor">
            <h4 className='h4'>COLORS</h4>
            <ul className='ul'>
            <li className='li'><span className="blue"></span></li>
            <li className='li'><span className="yellow"></span></li>
            <li className='li'><span className="red"></span></li>
            </ul>
        </div>
        <div class="productName productName">
          {product.name}
        </div>
        </div>

    </div> */}


