import React, {useState} from 'react';
import arrow_down from './../images/arrov-down.svg'
import arrow_up from './../images/arrow_up.svg'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'

const Faq = () => {
    const [open1, setopen1] = useState('');
    const [open2, setopen2] = useState('');
    const [open3, setopen3] = useState('');
    const [open4, setopen4] = useState('');
    const [open5, setopen5] = useState('');
    const [open6, setopen6] = useState('');
    const [open7, setopen7] = useState('');
    const [open8, setopen8] = useState('');
    const [open9, setopen9] = useState('');
    const [open10, setopen10] = useState('');
    const [open11, setopen11] = useState('');
    const [open12, setopen12] = useState('');

    function handleOpen(e){
        if(e.target.id === '1'){ if(open1===''){setopen1('unhidden')} else{setopen1('')} }
        if(e.target.id === '2'){ if(open2===''){setopen2('unhidden')} else{setopen2('')} }
        if(e.target.id === '3'){ if(open3===''){setopen3('unhidden')} else{setopen3('')} }
        if(e.target.id === '4'){ if(open4===''){setopen4('unhidden')} else{setopen4('')} }
        if(e.target.id === '5'){ if(open5===''){setopen5('unhidden')} else{setopen5('')} }
        if(e.target.id === '6'){ if(open6===''){setopen6('unhidden')} else{setopen6('')} }
        if(e.target.id === '7'){ if(open7===''){setopen7('unhidden')} else{setopen7('')} }
        if(e.target.id === '8'){ if(open8===''){setopen8('unhidden')} else{setopen8('')} }
        if(e.target.id === '9'){ if(open9===''){setopen9('unhidden')} else{setopen9('')} }
        if(e.target.id === '10'){ if(open10===''){setopen10('unhidden')} else{setopen10('')} }
        if(e.target.id === '11'){ if(open11===''){setopen11('unhidden')} else{setopen11('')} }
        if(e.target.id === '12'){ if(open12===''){setopen12('unhidden')} else{setopen12('')} }
    }

    return (
        <div className='roadmap-wrapper' id='faq-scrl'>
            <p className='intro--48'>FAQ</p>
            <p className='jost--24-300 effective'>Frequently asked questions</p>

            <div className='selectors' id='1' onClick={handleOpen}>
                <p className='intro--38' id='1' onClick={handleOpen}>CAN I CREATE MORE THAN ONE ACCOUNT?</p>
                <img src={open1==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='1' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open1}>The company has a negative attitude towards creating multi-accounts on
                the
                platform. Therefore, in order to avoid blocking, we recommend not to create multi-accounts on the
                platform.</p>

            <div className='selectors' id='2' onClick={handleOpen}>
                <p className='intro--38' id='2' onClick={handleOpen}>What is the minimum deposit and withdrawal amount?</p>
                <img src={open2==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='2' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open2}>The minimum amount of investment on the platform is from $30. Minimum
                withdrawal amount from $5.</p>

            <div className='selectors' id='3' onClick={handleOpen}>
                <p className='intro--38' id='3' onClick={handleOpen}>CAN I ADD FUNDS TO AN ACTIVE DEPOSIT? </p>
                <img src={open3==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='3' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open3}>Yes, you can add funds to your active deposit on the platform using the
                reinvest button in the details of the deposit. There are no time limits, the minimum reinvestment amount
                is from $1.</p>

            <div className='selectors' id='4' onClick={handleOpen}>
                <p className='intro--38' id='4' onClick={handleOpen}>CAN I HAVE SEVERAL DEPOSITS?</p>
                <img src={open4==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='4' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open4}>Yes, the number of deposits on the platform is not limited. You can open
                any number of deposits.</p>

            <div className='selectors' id='5' onClick={handleOpen}>
                <p className='intro--38' id='5' onClick={handleOpen}>IS THERE A WITHDRAWAL FEE?</p>
                <img src={open5==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='5' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open5}>The company does not charge for deposits and withdrawals. You only pay a
                network fee to withdraw the coin of your choice.</p>

            <div className='selectors' id='6' onClick={handleOpen}>
                <p className='intro--38' id='6' onClick={handleOpen}>On what days are the accruals and at what time?</p>
                <img src={open6==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='6' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open6}>Accruals on active deposits take place on working days from Monday to
                Friday at 15-00 UK time.</p>

            <div className='selectors' id='7' onClick={handleOpen}>
                <p className='intro--38' id='7' onClick={handleOpen}>How do I change my wallet, email, telegram, phone number?</p>
                <img src={open7==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='7' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open7}>You can change your active wallets in your profile settings. All other
                data can only be changed by contacting support.</p>

            <div className='selectors' id='8' onClick={handleOpen}>
                <p className='intro--38' id='8' onClick={handleOpen}>What are the rules for the withdrawal?</p>
                <img src={open8==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='8' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open8}>Payments on the platform are in automatic mode, as a rule, the
                transaction arrives at your wallet within 3-5 minutes. But if the network is busy, the transaction may
                go a little longer. The official rules on the withdrawal of funds is up to 72 hours.</p>

            <div className='selectors' id='9' onClick={handleOpen}>
                <p className='intro--38' id='9' onClick={handleOpen}>Can I change my mentor?</p>
                <img src={open9==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='9' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open9}>Yes, you can change mentors, as long as you and your partners do not have
                any active deposits.</p>

            <div className='selectors' id='10' onClick={handleOpen}>
                <p className='intro--38' id='10' onClick={handleOpen}>Can I close my deposit early?</p>
                <img src={open10==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='10' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open10}>Yes you can close your deposit at any time. The amount of your deposit
                will be returned to your balance within 10 working days, the accrued profit on this deposit will be
                deducted from the amount of your deposit.</p>

            <div className='selectors' id='11' onClick={handleOpen}>
                <p className='intro--38' id='11' onClick={handleOpen}>Can I transfer funds between accounts?</p>
                <img src={open11==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='11' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open11}>No. Transferring funds between accounts on the platform is not
                possible.</p>

            <div className='selectors' id='12' onClick={handleOpen}>
                <p className='intro--38' id='12' onClick={handleOpen}>What happens when I close my deposit early?</p>
                <img src={open12==='' ? arrow_down : arrow_up} alt="" className='arrow-logo' id='12' onClick={handleOpen}/>
            </div>

            <p className={'jost--24-400 answer ' + open12}>In case of early closure of the deposit, the body is returned to the
                balance within 10 working days, the profit earned on this deposit is deducted.</p>
        </div>
    );
};

export default Faq;