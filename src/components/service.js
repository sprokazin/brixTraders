import React from 'react';
import moneybag from './../images/moneybags.svg'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
const Service = () => {
    return (
        <div className='serviceWrapper' id='services-scrl'>
            <p className='intro--48'>Brix Traders services</p>
            <p className='jost--24-300 effective'>Effective collaboration with Brix Traders</p>
            <div className='serviceList'>
                <div className='box'>
                    <p className='intro--42'>Active <br/> Wallet</p>
                    <p className='jost--24-300-ser'>Software assurance of all transactions with assets.</p>
                </div>
                <div className='box'>
                    <p className='intro--42'>Internal<br/> Integration</p>
                    <p className='jost--24-300-ser'>Integrated software actions.</p>
                </div>
                <div className='box'>
                    <p className='intro--42'>Secure<br/>Collaboration</p>
                    <p className='jost--24-300-ser'>A secure way to transfer assets using global crypto exchanges.</p>
                </div>
                <div className='box'>
                    <p className='intro--42'>Stable <br/> Assets</p>
                    <p className='jost--24-300-ser'>Optimized offers for stable interest rates.</p>
                </div>
                <div className='box--wide'>
                    <p className='intro--42'>Asset <br/> insurance</p>
                    <p className='jost--24-300-ser'>Your asset processes are insured against various risks, as client's
                        funds are always backed by analyzed work mode.</p>
                </div>
                <div className='box--wide'>
                    <p className='intro--42'>Cooperation <br/> with each client</p>
                    <p className='jost--24-300-ser'>Brix Trade is constantly improving its dialogue with the client.</p>
                </div>
            </div>

            <div className='moneyWrap'>
                <div className='moneycolumn'>
                <p className='jost--24-400'>Brix Traders is a unique programming language based on extensive experience
                    in trading. Using the company's unique programs, traders increase the trading algorithm by hundreds
                    of times. Such scripts allow to configure a full-fledged actual strategy for the period of work of
                    this or that bot.
                    <br/> <br/>
                    Creating a strategy with arbitrage bots allows you to implement a strategy on a mass number of top
                    exchanges, thereby increasing profitability and having a strategy with the lowest drawdowns. Example
                    exchanges</p>
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