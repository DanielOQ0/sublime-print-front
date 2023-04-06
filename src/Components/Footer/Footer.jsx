import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">

     <ul className="row">
        
        <li>
          <h2>Customer Support</h2>
          <ul >
            <li><a href="#">My orders</a></li>
            <li><a href="#">Aid</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </li>

        <li>
          <h2>Company</h2>
          <ul >
            <li><a href="#">About us</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">wholesale orders</a></li>
            <li><a href="#">data protection</a></li>
            <li><a href="#">data settings</a></li>
            <li><a href="#">Terms and conditions</a></li>
          </ul>
        </li>
       
 
        <li>
          <h2>Follow us</h2>
          <ul >
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twiter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </li>

        <div>
          <form>
              <p>Subscribe to our newsletter</p>
              <div className="container">
              
              <input className="input-mail" type="text" placeholder="Email address" name="mail"></input>
              <input type="submit" value="subscribe"></input>
              </div>
          </form>
        </div>
        
     </ul>
    </footer>
    
    

    
  )
}

