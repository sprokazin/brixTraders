import React, {useState} from 'react';
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
import './menu.scss'

import logo from './../images/logo.svg'
import en from './../images/countries/en.svg'
import signup from './../images/signup.svg'
import menu from './../images/open-menu.svg'

const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState('')
    const [isMenuOpen1, setIsMenuOpen1] = useState('')
    const [isMenuOpen2, setIsMenuOpen2] = useState('')
    const [isMenuOpen3, setIsMenuOpen3] = useState('')

    function menuHandler(){
        if(isMenuOpen === ''){
            setIsMenuOpen('open');
            setIsMenuOpen1('menu-list');
            setIsMenuOpen2('open1')
            setIsMenuOpen3('disp')
                document.body.style.overflow = 'hidden';
        }
        else {
            setIsMenuOpen('');
            setIsMenuOpen1('');
            setIsMenuOpen2('')
            setIsMenuOpen3('')
            document.body.style.overflow = 'visible';
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
            <div className='btn-menu'>
            <div className='signup-btn'><img src={signup} className='signup-logo'/> <p className='jost--24-400-b'>Sign Up</p> </div>
            <img src={menu} alt="" className='menu-logo' onClick={menuHandler}/>
            </div>
            <div className='lang-select menu-item'>
            <img src={en} alt="lang" className='lang-logo'/>
            <p className='jost--24-400'>EN</p>
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
        </>
    );
};

export default Header;