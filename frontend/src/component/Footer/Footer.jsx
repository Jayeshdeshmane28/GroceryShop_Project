import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-content-left">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d75327118408607.608880b42409a.png " height={150} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta.
          aspernatur?
        </p>
        <div className="footer-social-icon">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy.</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91-9184614534</li>
          <li>Contact@greengrocer.com</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="footer-copyright">
      copyright 2025@greengrocer.com -All Right Reserved.
    </p>
  </div>
  )
}

export default Footer
