import React from 'react'
import './LabelHome.css'
import { FaceSmileIcon, LockClosedIcon, TruckIcon } from '@heroicons/react/24/outline'

export default function () {
  return (
    <div className='containerLabelHome'>
        <div>
          <LockClosedIcon className='h-10 w-10'/> 
          <h2>Secure payment methods</h2>
          <div></div>
        </div>
        <div>
          <FaceSmileIcon className='h-10 w-10'/>
          <h2>Our satisfaction guarantee</h2>
          <div>It does not look good on you? Return it! <span className='font-bold'>You have 30 days.</span></div>
        </div>
        <div>
          <TruckIcon className='h-10 w-10'/>
          <h2>Shipping worldwide</h2>
          <div></div>
        </div>
    </div>
  )
}
