import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer-logo-box">
                <Link to="/">
                  <img src="assets/img/logo/K-Lette.png" alt="Logo" />
                </Link>
              </div>
              <div className="footer-menu">
                {/* <ul>
                  <li><Link to="resume">Resume</Link></li>
                  <li><Link to="skills">skills</Link></li>
                  <li><Link to="contact">Contact</Link></li>
                </ul> */}
              </div>
              <div className="copy-text">
                <p>&copy; 2024 All rights reserved by <Link to="mailto:komalkathiriya0707@gmail.com" target="_blank">komalkathiriya0707@gmail.com</Link></p>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer