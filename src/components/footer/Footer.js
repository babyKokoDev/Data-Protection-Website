import React from 'react'
import './FooterStyles.css'
import { SiDatabricks } from 'react-icons/si'
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <div className="logo-footer">
                    <SiDatabricks className='icon' />
                    <h2>Secured.</h2>
                </div>
                <BsFillArrowUpCircleFill className='icon' />
            </div>
            <div className="col-container">
                <div className="col">
                     <h3>Navigation</h3>
                     <p>Home</p>
                     <p>Data</p>
                     <p>Cloud</p>
                     <p>Contact</p>
                </div>
                <div className="col">
                     <h3>My Account</h3>
                     <p>Home</p>
                     <p>Data</p>
                     <p>Cloud</p>
                     <p>Contact</p>
                </div>
                <div className="col">
                     <h3>Information</h3>
                     <p>Home</p>
                     <p>Data</p>
                     <p>Cloud</p>
                     <p>Contact</p>
                </div>
                <div className="col">
                     <h3>Legal</h3>
                     <p>Home</p>
                     <p>Data</p>
                     <p>Cloud</p>
                     <p>Contact</p>
                </div>
                <form action="">
                    <h3>Join Our Team</h3>
                    <input type="email" placeholder='Enter your email' />
                    <FiMail className='mail-icon' />
                    <div className="social-group">
                        <FiInstagram className='social-icon' />
                        <FiFacebook className='social-icon' />
                        <FiLinkedin className='social-icon' />
                        <FiDribbble className='social-icon' />
                        <FiGithub className='social-icon' />
                    </div>
                </form>
            </div>
        </div>
  
    </div>
  )
}

export default Footer