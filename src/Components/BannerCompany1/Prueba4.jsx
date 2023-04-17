import React from 'react'
//import './prueba4.css'

export default function Prueba4() {
  return (

    <section className="slider">
  <input type="radio" name="slider" className="s1"/>
  <input type="radio" name="slider" className="s2" checked/>
  <input type="radio" name="slider" className="s3" />

  <label for="s1" className="slide1">
  <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/mousepad.jpg" alt="" className='img-slider'/>
  </label>
  <label for="s2" className="slide2">
  <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/outfitpack.jpg" alt="" className='img-slider'/>
  </label>
  <label for="s3" className="slide3">
  <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/mug.jpg" alt="" className='img-slider'/>
  </label>


</section>
    
  )
}
