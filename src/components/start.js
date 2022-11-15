import React from 'react';
import './styles.scss'
import bitcoin from './../images/bitcoin.svg'
import user from './../images/user.svg'
import playbtn from './../images/playbtn.svg'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
const Start = () => {
    return (
        <div className='wrapStartPage'>
            <div className='startWrapper'>
                <div className='startRow'>
                    <div className='startColumn'>
                        <div className='title480'>
                            <p className='intro--48'>AN ADVANCED TOOL</p>
                            <p className='jost--48'>For crypto industry</p>
                            <div className='bitDiv w480'><img src={bitcoin} alt="logo" className='bitcoin w480'/></div>
                        </div>
                        <p className='jost--24-300'>An effective tool for the development of exchange crypto trading
                            with automated programs.</p>
                        <button className='startBtn'>start</button>
                    </div>
                    <div className='bitDiv w480-'><img src={bitcoin} alt="logo" className='bitcoin w480-'/></div>
                </div>
            </div>
            <p className='intro--48' id='about-scrl'>brix traders is</p>
            <div className='startWrapper'>
                <img src={user} alt="" className='logo-user w480-'/>
                <div className='startColumn--2'>
                    <p className='jost--24-400'>A multitasking crypto trading solution with effective optimization of
                        trading and arbitrage programs allowing you to delegate traders' tasks for the most profitable
                        trades</p>
                    <img src={user} alt="" className='logo-user w480'/>
                    <p className='jost--24-400'>Efficient management of trading bots with the help of experienced
                        traders.</p>
                    <p className='jost--24-400'>Multitasking arbitrage bots allowing you to effectively collaborate with
                        dozens of exchanges simultaneously</p>
                    <p className='jost--24-400'>Continuous analysis of market data for integrated solutions with modular
                        systems and optimization.</p>
                </div>
            </div>
            <div className='videoplayer'>
                <div className='play'>
                    <img src={playbtn} alt="play" className='playbtn'/>
                </div>
            </div>
        </div>
    );
};

export default Start;