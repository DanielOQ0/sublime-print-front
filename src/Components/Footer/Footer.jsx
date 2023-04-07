import React from 'react'
import './footer.css'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer >
        <script src="https://kit.fontawesome.com/c0e858ad48.js" crossorigin="anonymous"></script>
       
        <div className="footer-container">
        <div className="footer-info">
            
          {/*   <a href="#" className="footer-title">
             <img className="logo"src={logo} alt="" />
            </a> */}
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
                <a href="#" className="footer-link">My orders</a>
                </li>
                <li>
                <a href="#" className="footer-link">Aid</a>
                </li>
                <li>
                   {/*  <FontAwesomeIcon icon={faAddressCard} /> */}
                   
                  
                    <a href="#" className="footer-link">Contact</a>
                </li>
                <li>
                <a href="#" className="footer-link">+34 369 258 147</a>
                </li>
            </nav>
            </div>
            
            <div className="footer-section">
            <h2 className="footer-category">About us</h2>
            <nav className="footer-list">
                <li>
                <a href="#" className="footer-link">Sustainability</a>
                </li>
                <li>
                <a href="#" className="footer-link">Press</a>
                </li>
                <li>
                <a href="#"  className="footer-link">wholesale orders</a>
                </li>
                <li>
                <a href="#" className="footer-link">data protection</a>
                </li>
                <li>
                <a href="#" className="footer-link">data settings</a>
                </li>
                <li>
                <a href="#" className="footer-link">Terms and conditions</a>
                </li>
            </nav>
            </div>
            <div class="footer-section">
                <h2 class="footer-category">Follow us</h2>
                <nav class="footer-list">
                    <li>
                    <a href="#" className="footer-link">Facebook</a>
                    </li>
                    <li>
                    <a href="#" className="footer-link">Instagram</a>
                    </li>
                    <li>
                    <a href="#"  className="footer-link">Pinterest</a>
                    </li>
                    <li>
                    <a href="#" className="footer-link">Youtube</a>
                    </li>
                </nav>
            </div>
            

         </div>
        </div>
       
  </footer>
  

        
  )
}

