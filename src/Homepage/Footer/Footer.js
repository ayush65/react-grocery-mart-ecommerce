import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="Footer-container">
    
        <div className="Footer">
        <div class="footer-col">
  	 			<ul className="footer-links footer-align">
  	 				<li><a  className="footer-links" href="#">About us</a></li>
  	 				<li><a className="footer-links" href="#">Services</a></li>
  	 				<li><a className="footer-links" href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
               <div className="footer-company-copyright">
                   <div>  Copyright © Grocery Mart</div>
                  
               </div>
        </div>

    </div>
  )
}

export default Footer