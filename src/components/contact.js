import React, { forwardRef} from 'react'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
import {useTranslation} from "react-i18next";


const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className='contact-wrapper' id='contact-scrl'>
            <p className='intro--48'>{t('Get in touch').toUpperCase()}</p>
            <div className='contactRow'>
                <div className='contactLeft w480-'>
                    <img src='' alt="" className='telegram cursor-pointer'/>
                    <img src='' alt="" className='telegram cursor-pointer'/>
                    <img src='' alt="" className='telegram cursor-pointer'/>
                    {/* <p className='jost--40 email'>Email:</p>
                <p className='jost--24-300'>Email.com</p> */}
                </div>
                <div className='contact-Form'>
                    <input type="text" placeholder={t('Name')}/>
                    <input type="text" placeholder={t('Telegram')}/>
                    <input type="text" placeholder={t('Subject')}/>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder={t('Message')}></textarea>
                    <button className='sendBtn'>{t('SEND MeSSAGE').toUpperCase()}</button>
                </div>
            </div>
            <div className='hiddenRow w480'>
                <div className='contacts'>
                <img src='' alt="" className='telegram cursor-pointer'/>
                <img src='' alt="" className='telegram cursor-pointer'/>
                <img src='' alt="" className='telegram cursor-pointer'/>
                </div>
                <div className='contacts'>
                    {/* <p className='jost--40 email'>Email:</p>
                <p className='jost--24-300'>Email.com</p> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;