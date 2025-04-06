import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
       <img className='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d75327118408607.608880b42409a.png" alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
