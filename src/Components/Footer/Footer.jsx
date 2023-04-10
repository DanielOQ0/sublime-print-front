import React from 'react'
import './footer.css'
import logo from '../../Media/logo.png'
import { Link as Anchor } from "react-router-dom";

export default function Footer() {
  return (
    <footer >
        <div className="footer-container">
        <div className="footer-info">
            
            <div>
                <form className='form'>
                    <img className="logo"src={logo} alt="" />
                    <p>Subscribe to our newsletter</p>
                    <div className="container">
                        <input className="input-mail" type="text" placeholder="your email" name="mail"></input>
                        <input className='send' type="submit" value="subscribe"></input>
                    </div>
                </form>
             </div>
        </div>
        <div className="footer-section-wrapper">
        
            <div className="footer-section">
            <h2 className="footer-category">Customer Support</h2>
            <nav className="footer-list">
                <li>
                    <Anchor to="/#" className="footer-link">My orders</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">Aid</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">Contact</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">+34 369 258 147</Anchor>
                </li>
            </nav>
            </div>
            
            <div className="footer-section">
            <h2 className="footer-category">About us</h2>
            <nav className="footer-list">
                <li>
                    <Anchor to="/#" className="footer-link">Sustainability</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">Press</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">wholesale orders</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">data protection</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">data settings</Anchor>
                </li>
                <li>
                    <Anchor to="/#" className="footer-link">Terms and conditions</Anchor>
                </li>
            </nav>
            </div>
            <div className="footer-section">
                <h2 className="footer-category">Follow us</h2>
                <nav className="footer-list">
                    <li>
                        <Anchor to="/#" className="footer-link">Facebook</Anchor>
                    </li>
                    <li>
                        <Anchor to="/#" className="footer-link">Instagram</Anchor>
                    </li>
                    <li>
                        <Anchor to="/#" className="footer-link">Pinterest</Anchor>
                    </li>
                    <li>
                      <Anchor to="/#" className="footer-link">Youtube</Anchor>
                    </li>
                </nav>
            </div>
         </div>
        </div>
  </footer>
  

        
  )
}

