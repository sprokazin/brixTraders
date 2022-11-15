import React from 'react';
import footerlogo from './../images/footer-logo.svg'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <img src={footerlogo} alt="" className='logoFooter'/>
            <p className='jost--24-400 cursor-pointer'>Privacy Policy</p>
        </div>
    );
};

export default Footer;