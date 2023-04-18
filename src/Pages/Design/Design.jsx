import React from 'react'
import './Design.css'
import { motion } from 'framer-motion';
import { Link as Anchor } from 'react-router-dom'

export default function () {
  return (
    <div className='container-selector-design'>
        <motion.h1 
        className='title-selector-design'
        initial={{x:500, opacity: 0}}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 1 }}
        >
            Select the product to design
        </motion.h1>
        <div>
            <Anchor to='/design/shirt'>
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{y:300, opacity:0}}
                animate={{y:0, opacity: 1}}
                transition={{ duration: 1 }}
                className='container-shirt-selector'>
                    <img src={require('../../Media/shirt-selected.png')} alt="" />
                </motion.div>
            </Anchor>
        </div>
    </div>
  )
}
