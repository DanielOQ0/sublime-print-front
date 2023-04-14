import React from 'react'
import './colors2.css'

export default function Colors2() {
  return (
    <div className='bodyG'>
      <div class="containerg product">
        <img class="productImage productImg" src="https://littleblue.com.ar/img/inspire/telas/tela-viscosa.jpg" alt=""/>

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
          <span className='span'>$150</span>
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
          Nike Air Max
        </div>
      </div>

    </div>
      
     
  
   
  )
}
