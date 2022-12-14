import React from 'react';
import rodamap_1920 from './../images/roadmap-1920.webp'
import './styles.scss'
import './styles1440.scss'
import './styles1024.scss'
import './styles768.scss'
import './styles480.scss'
import './styles320.scss'
import {useTranslation} from "react-i18next";

const Roadmap = () => {
    const { t } = useTranslation();

    return (
        <div className='roadmap-wrapper' id='roadmap-scrl'>
            <p className='intro--48'>{t('roadmap').toUpperCase()}</p>
            <p className='jost--24-300 effective'>{t('Emergence and design of the idea')}</p>
            <div className='roadmap-line'><img src={rodamap_1920} alt="" className='adapt-roadmap'/></div>
        </div>
    );
};

export default Roadmap;