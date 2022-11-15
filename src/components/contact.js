import React, { forwardRef} from 'react'
import telegram from './../images/telegram.webp'
import twitter from './../images/twitter.webp'
import instagram from './../images/instagram.webp'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'


const Contact = () => {
    return (
        <div className='contact-wrapper' id='contact-scrl'>
            <p className='intro--48'>Get in touch</p>
            <div className='contactRow'>
                <div className='contactLeft w480-'>
                    <p className='jost--40'>We’re online</p>
                    <img src={telegram} alt="" className='telegram cursor-pointer'/>
                    <img src={instagram} alt="" className='telegram cursor-pointer'/>
                    <img src={twitter} alt="" className='telegram cursor-pointer'/>
                    <p className='jost--40 email'>Email:</p>
                    <p className='jost--24-300'>Email.com</p>
                </div>
                <div className='contact-Form'>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Telegram'/>
                    <input type="text" placeholder='Subject'/>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button className='sendBtn'>SEND MeSSAGE</button>
                </div>
            </div>
            <div className='hiddenRow w480'>
                <div className='contacts'>
                <p className='jost--40'>We’re online</p>
                <img src={telegram} alt="" className='telegram cursor-pointer'/>
                <img src={instagram} alt="" className='telegram cursor-pointer'/>
                <img src={twitter} alt="" className='telegram cursor-pointer'/>
                </div>
                <div className='contacts'>
                <p className='jost--40 email'>Email:</p>
                <p className='jost--24-300'>Email.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;