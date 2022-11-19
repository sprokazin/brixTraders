import React, {useEffect, useState} from 'react';
import './styles.scss'
import bitcoin from './../images/bitcoin.webp'
import user from './../images/user.webp'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
import video from './../images/ICON_VERSION6.mp4'
import {useTranslation} from "react-i18next";

const Start = (props) => {
    const [refcounter, setRefCounter] = useState('')
    const date = new Date;
    const date1 = date.getUTCDate();

    useEffect(() => {
        if((date1 % 12) >= 0 && (date1 % 12) < 3){
            setRefCounter('https://brixtraders.io/signup?ref=vt0kmi66mq')
        }
        if((date1 % 12) >= 3 && (date1 % 12) < 6){
            setRefCounter('https://brixtraders.io/signup?ref=g4w72c7l15')
        }
        if((date1 % 12) >= 6 && (date1 % 12) < 9){
            setRefCounter('https://brixtraders.io/signup?ref=yykb72gri5')
        }
        if((date1 % 12) >= 9 && (date1 % 12) < 12){
            setRefCounter('https://brixtraders.io/signup?ref=t1v98i3066')
        }
    },[]);


    const { t } = useTranslation();
    return (
        <div className='wrapStartPage'>
            <div className='startWrapper'>
                <div className='startRow'>
                    <div className='startColumn'>
                        <div className='title480'>
                            <p className='intro--48'>{t('an advanced tool').toUpperCase()}</p>
                            <p className='jost--48'>{t('For crypto industry')}</p>
                            <div className='bitDiv w480'><img src={bitcoin} alt="logo" className='bitcoin w480'/></div>
                        </div>
                        <p className='jost--24-300'>{t('An effective tool for the development of exchange crypto trading with automated programs.')}</p>
                        <a href={refcounter}><button className='startBtn cursor-pointer' id='about' onClick={props.sccrollTo}>{t('start').toUpperCase()}</button></a>
                    </div>
                    <div className='bitDiv w480-'><img src={bitcoin} alt="logo" className='bitcoin w480-'/></div>
                </div>
            </div>
            <p className='intro--48' id='about-scrl'>{t('brix traders is').toUpperCase()}</p>
            <div className='startWrapper'>
                <img src={user} alt="" className='logo-user w480-'/>
                <div className='startColumn--2'>
                    <p className='jost--24-400'>{t('A multitasking crypto trading solution with effective optimization of trading and arbitrage programs allowing you to delegate traders tasks for the most profitable trades')}</p>
                    <img src={user} alt="" className='logo-user w480'/>
                    <p className='jost--24-400'><b>{t('Efficient management ')}</b>{t('of trading bots with the help of experienced traders.')} </p>
                    <p className='jost--24-400'><b>{t('Multitasking arbitrage bots')}</b> {t('allowing you to effectively collaborate with dozens of exchanges simultaneously')}</p>
                    <p className='jost--24-400'><b>{t('Continuous analysis')}</b> {t('of market data for integrated solutions with modular systems and optimization.')}</p>
                </div>
            </div>
            <video className='videoplayer' src={video} controls={true}>
                {/* <div className='play'>
                    <img src={playbtn} alt="play" className='playbtn'/>
                </div> */}
            </video>
        </div>
    );
};

export default Start;