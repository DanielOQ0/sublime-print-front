import React from 'react'
import './ImageCollage.css'

export default function ImageCollage() {
  return (
    <div className='collageContainer'>
        <h2>#yourstyle</h2>
        <div className='sectionContainer'>
            <section className='collageSection1'>
                <img src={require('../../Media/Spring23_tile_gif_EU.webp')} alt="gif" />
                <span className='textCollage'>Designs with ❤️</span>
            </section>
            <section className='collageSection2'>
                <div>
                    <img src={require('../../Media/collage-1.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../../Media/collage-2.jpg')} alt="" />
                </div>
            </section>
        </div>

    </div>
  )
}
