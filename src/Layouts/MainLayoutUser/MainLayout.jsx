import React from "react";
import './mainLayout.css';
import { Outlet } from "react-router-dom";
import Footer from '../../Components/Footer/Footer'

export default function () {
  return (
    <div className='MainLayout'>
      <p>main layout USER</p>
        <Outlet className="main"/>
        <Footer className="footer"/>
    </div>
  );
}
