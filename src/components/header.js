import React, {useEffect, useState, useRef} from 'react';
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
import './languages.scss'
import cookies from 'js-cookie'
import './menu.scss'

import logo from './../images/logo.svg'
import TR from './../images/countries/turk.svg'
import ID from './../images/countries/indonesia.svg'
import TH from './../images/countries/thai.svg'
import ES from './../images/countries/esp.svg'
import FR from './../images/countries/france.svg'
import IT from './../images/countries/italy.svg'
import DE from './../images/countries/de.svg'
import zh_CN from './../images/countries/china.svg'
import JA from './../images/countries/japan.svg'
import RU from './../images/countries/ru.svg'
import PL from './../images/countries/pl.svg'
import SL from './../images/countries/sl.svg'
import EN from './../images/countries/en.svg'

import closeBtn from './../images/close-btn.svg'
import signup from './../images/signup.svg'
import menu from './../images/open-menu.svg'

import { useTranslation } from "react-i18next";
import i18next, {use} from 'i18next'


const Header = (props) => {
    const languages = [
        {
            code: 'EN',
            name: 'English',
            image: EN
        },
        {
            code: 'TR',
            name: 'Türk',
            image: TR
        },
        {
            code: 'ID',
            name: 'Indonesia',
            image: ID
        },
        {
            code: 'TH',
            name: 'ไทย',
            image: TH
        },
        {
            code: 'ES',
            name: 'Espanol',
            image: ES
        },
        {
            code: 'FR',
            name: 'Le français',
            image: FR
        },
        {
            code: 'IT',
            name: 'Italiano',
            image: IT
        },
        {
            code: 'DE',
            name: 'Deutsche',
            image: DE
        },
        {
            code: 'zh-CN',
            name: '中國人',
            image: zh_CN
        },
        {
            code: 'JA',
            name: '日本語',
            image: JA
        },
        {
            code: 'RU',
            name: 'Русский',
            image: RU
        },
        {
            code: 'PL',
            name: 'Polski',
            image: PL
        },
        {
            code: 'SL',
            name: 'Slovenský',
            image: SL
        },
    ]

    const { t } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState('')
    const [isMenuOpen1, setIsMenuOpen1] = useState('')
    const [isMenuOpen2, setIsMenuOpen2] = useState('')
    const [isMenuOpen3, setIsMenuOpen3] = useState('')
    const [isLngOpen, setIsLngOpen] = useState(false)
    const currentLanguageCode = (cookies.get('i18next') || 'EN').toUpperCase()

    function menuHandler(){
        if(isMenuOpen === ''){
            setIsMenuOpen('open');
            setIsMenuOpen1('menu-list');
            setIsMenuOpen2('open1')
            setIsMenuOpen3('disp')
            if(document.documentElement.clientWidth <= 480){
            document.body.style.overflow = 'hidden';
            }
        }
        else {
            setIsMenuOpen('');
            setIsMenuOpen1('');
            setIsMenuOpen2('')
            setIsMenuOpen3('')
            document.body.style.overflow = 'visible';
        }
    }
    const imgLang = languages.map(({code, name, image}) => {
        if(currentLanguageCode === code){
            return (<img src={image} alt="" className='lang-logo'/>)
        }
    })

    function openLng(){
        if(isLngOpen === false){
            setIsLngOpen(true)
        }
        else {
            setIsLngOpen(false)
        }
    }
    const rootEl = useRef(null);
    const rootEl1 = useRef(null);


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    },[]);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scroll){
            setIsLngOpen(false);
        }
    }

    return (
        <>
        <div className={'header ' + (isMenuOpen)}>
            <img src={logo} alt="logo" className='logo' />
            <p className='intro--24 menu-item cursor-pointer' id='about' onClick={props.sccrollTo}>ABOUT</p>
            <p className='intro--24 menu-item cursor-pointer' id='services' onClick={props.sccrollTo}>services</p>
            <p className='intro--24 menu-item cursor-pointer' id='roadmap' onClick={props.sccrollTo}>roadmap</p>
            <p className='intro--24 menu-item cursor-pointer' id='faq' onClick={props.sccrollTo}>F.A.Q.</p>
            <p className='intro--24 menu-item cursor-pointer' id='contact' onClick={props.sccrollTo}>COntact</p>
                <div className='lang-select menu-item-lng cursor-pointer' onClick={openLng}>
                    {imgLang}
                    <p className='jost--24-400'>{currentLanguageCode}</p>
                </div>
            <div className='btn-menu'>
            <div className='signup-btn'><img src={signup} className='signup-logo'/> <p className='jost--24-400-b'>Sign Up</p> </div>
            <img src={isMenuOpen==='' ? menu : closeBtn} alt="" className='menu-logo' onClick={menuHandler}/>
            </div>
            <div className='lang-select menu-item cursor-pointer' onClick={openLng}>
                {imgLang}
                <p className='jost--24-400'>{currentLanguageCode}</p>
            </div>
        </div>
            <div className={isMenuOpen2}></div>
            <div className={isMenuOpen1} onClick={menuHandler}>
                <p className={'menu-p cursor-pointer ' + isMenuOpen3} id='about' onClick={props.sccrollTo}>ABOUT</p>
                <div className={'hr-menu ' + isMenuOpen3} ></div>
                <p className={'menu-p cursor-pointer ' + isMenuOpen3} id='services' onClick={props.sccrollTo}>SERVICES</p>
                <div className={'hr-menu ' + isMenuOpen3}></div>
                <p className={'menu-p cursor-pointer ' + isMenuOpen3} id='roadmap' onClick={props.sccrollTo}>ROADMAP</p>
                <div className={'hr-menu ' + isMenuOpen3}></div>
                <p className={'menu-p cursor-pointer ' + isMenuOpen3} id='faq' onClick={props.sccrollTo}>F.A.q.</p>
                <div className={'hr-menu ' + isMenuOpen3}></div>
                <p className={'menu-p cursor-pointer ' + isMenuOpen3} id='contact' onClick={props.sccrollTo}>Contact</p>
                <div className={'hr-menu ' + isMenuOpen3}></div>
            </div>
            { isMenuOpen !== '' &&
            <div className='menu-1024'>
                <p>About</p>
                <p>services</p>
                <p>roadmap</p>
                <p>F.A.Q.</p>
                <p>COntact</p>
                <div className='lang-select cursor-pointer' onClick={openLng}>
                    {imgLang}
                    <h className='jost--24-400'>{currentLanguageCode}</h>
                </div>
            </div>
            }
            {(isLngOpen === true) &&
            <div className={'lng-box'}>
                {
                    languages.map(({ code, name, image}) => (
                        <div className='flag-row' onClick={() => {
                            i18next.changeLanguage(code)
                        }}                            >
                            <img src={image} alt="" className='flag'/>
                            <p>{name}</p>
                        </div>
                    ))
                }
            </div>
            }
        </>
    );
};

export default Header;