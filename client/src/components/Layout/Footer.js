import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <h6 className='text-center'>
        All Rights reserved &copy; Sheikh's Organization
      </h6>
      <p className = "text-center mt-3">
        <Link to= "/about" className="link">About</Link>
        |
        <Link to= "/contact" className="link">Contact</Link>
        |
        <Link to= "/policy" className="link">Privacy Policy</Link>
        |
      </p>
    </div>
  )
}

export default Footer