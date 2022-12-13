import React from 'react';
import './FooterStyle.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='Left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                    <div>
                        <p>Vit Vellore.</p>
                        <h4>Tamil Nadu, India</h4>
                    </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />8809909496</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />mihir123sen@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>Headquarter in Jharkhand ; Established on 13 Dec 2022, Special Thanks to Raaj Jaiswal, Harshit Yadav, Gaurav Chauhan, Tushar Kant Srivastava, Keyur Sunil Nagvekar, Yash Shrivastava, Sooraj Venkanteshwara, Shudhanshu Shukla, Akshat Singh Somvanshi, Aditya Krishnan, Bhavya Shah, Sidhharth Bhanot</p>

                    <div className='social'>
                       <a href='https://www.facebook.com/mihir.sen.319247/' target='_blank'><FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href='https://twitter.com/m1h14_s3n' target='_blank'><FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                       <a href='https://www.linkedin.com/in/mihir-sen-ba413320a/' target='_blank'><FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>

                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Footer