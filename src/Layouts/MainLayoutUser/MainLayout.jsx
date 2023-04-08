import React from "react";
import './mainLayout.css';
import { Outlet } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
//import Product from '../../Components/ProductDetail/ProductDetail'
import Slider from '../../Components/Slider/Slider'


export default function () {
  return (
    <div className='MainLayout'>
        
        <Outlet className="main"/>
        <Slider />
        
      

        <Footer className="footer"/>
    </div>
  );
}
