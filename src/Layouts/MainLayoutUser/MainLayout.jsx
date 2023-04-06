import React from "react";
import './mainLayout.css';
import { Outlet } from "react-router-dom";
import Footer from '../../Components/Footer/Footer'

export default function () {
  return (
    <div className='MainLayout'>
        
        <Outlet className="main"/>
        <Footer className="footer"/>
    </div>
  );
}
