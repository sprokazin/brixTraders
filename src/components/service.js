import React from 'react';
import moneybag from './../images/moneybags.svg'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
import {useTranslation} from "react-i18next";
const Service = () => {
    const { t } = useTranslation();

    return (
        <div className='serviceWrapper' id='services-scrl'>
            <p className='intro--48'>{t('Brix Traders services').toUpperCase()}</p>
            <p className='jost--24-300 effective'>{t('Effective collaboration with Brix Traders')}</p>
            <div className='serviceList'>
                <div className='box'>
                    <p className='intro--42'>{t('Active').toUpperCase()} <br/>{t('Wallet').toUpperCase()} </p>
                    <p className='jost--24-300-ser'>{t('Software assurance of all transactions with assets.')}</p>
                </div>
                <div className='box'>
                    <p className='intro--42'>{t('Internal').toUpperCase()}<br/> {t('Integration').toUpperCase()}</p>
                    <p className='jost--24-300-ser'>{t('Integrated software actions.')}</p>
                </div>
                <div className='box'>
                    <p className='intro--42'>{t('Secure').toUpperCase()}<br/>{t('Collaboration').toUpperCase()}</p>
                    <p className='jost--24-300-ser'>{t('A secure way to transfer assets using global crypto exchanges.')}</p>
                </div>
                <div className='box'>
                    <p className='intro--42'>{t('Stable').toUpperCase()} <br/>{t('Assets').toUpperCase()} </p>
                    <p className='jost--24-300-ser'>{t('Optimized offers for stable interest rates.')}</p>
                </div>
                <div className='box--wide'>
                    <p className='intro--42'>{t('Asset').toUpperCase()} <br/> {t('insurance').toUpperCase()}</p>
                    <p className='jost--24-300-ser'>{t('Your asset processes are insured against various risks, as client\'s funds are always backed by analyzed work mode.')}</p>
                </div>
                <div className='box--wide'>
                    <p className='intro--42'>{t('Cooperation').toUpperCase()} <br/> {t('with each client').toUpperCase()}</p>
                    <p className='jost--24-300-ser'>{t('Brix Trade is constantly improving its dialogue with the client.')}</p>
                </div>
            </div>

            <div className='moneyWrap'>
                <div className='moneycolumn'>
                <p className='jost--24-400'>{t('Brix Traders is a unique programming language based on extensive experience in trading. Using the company\'s unique programs, traders increase the trading algorithm by hundreds of times. Such scripts allow to configure a full-fledged actual strategy for the period of work of this or that bot.')}
                    <br/> <br/> {t('Creating a strategy with arbitrage bots allows you to implement a strategy on a mass number of top exchanges, thereby increasing profitability and having a strategy with the lowest drawdowns. Example exchanges')}</p>
                    <img src={moneybag} alt="" className='moneybag w480'/>
                    <div className='exchanges'>
                    <div className='line'><p className='FTX'>35%</p> <p className='jost--48'>FTX</p> </div>
                    <div className='line'><p className='binance'>24%</p> <p className='jost--48'>Binance</p> </div>
                    <div className='line'><p className='huobi'>11%</p> <p className='jost--48'>Huobi</p> </div>
                    <div className='line'><p className='okx'>30%</p> <p className='jost--48'>OKX</p> </div>
                </div>
                </div>
                <img src={moneybag} alt="" className='moneybag w480-'/>
            </div>
            <div className='exchanges2'>
                <div className='line'><p className='FTX'>35%</p> <p className='jost--48'>FTX</p> </div>
                <div className='line'><p className='binance'>24%</p> <p className='jost--48'>Binance</p> </div>
                <div className='line'><p className='huobi'>11%</p> <p className='jost--48'>Huobi</p> </div>
                <div className='line'><p className='okx'>30%</p> <p className='jost--48'>OKX</p> </div>
            </div>
        </div>
    );
};

export default Service;