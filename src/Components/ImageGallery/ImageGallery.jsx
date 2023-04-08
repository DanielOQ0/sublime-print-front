import React, { useEffect, useState } from 'react'
import './ImageGallery.css'
import { AnimatePresence, motion  } from 'framer-motion'

export default function ImageGallery({images}) {

    const [imgActual,setImgActual]= useState(0)
    const cantidad = images?.length
    
    setTimeout(() => {
        renderImg()
    }, 6000);

    function renderImg(){
        setImgActual(imgActual===cantidad-1?0:imgActual+1)
    }

    if(!Array.isArray(images)||cantidad===0){return}
  return (
    <div className='caruselContainer'>
        {images.map((img,index)=>{
            return(
                <div className='flex justify-center' key={index}>
                    {imgActual===index&&(
                    <AnimatePresence>
                        <motion.div 
                        className={'img'+(index+1)+'Carusel'}
                        key={index} 
                        initial={{ opacity: 0, x:200 }}
                        animate={{ opacity: 1, x:0 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:1}}
                        >
                            <motion.h2
                            className={'text'+(index+1)+'Carusel'}
                            initial={{ opacity: 0, y:50 }}
                            animate={{ opacity: 1, y:0 }}
                            exit={{ opacity: 0 }}
                            transition={{duration:2}}
                            >{img[1]}</motion.h2>
                        </motion.div>
                    </AnimatePresence>
                    )}
                </div>
            )
        })}
    </div>
  )
}
