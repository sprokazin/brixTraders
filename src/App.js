import logo from './logo.svg';
import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import Header from "./components/header";
import Start from "./components/start";
import Service from "./components/service";
import Roadmap from "./components/roadmap";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {

    const [loading, setisloading] = useState()

    useEffect(() => {
        setisloading(true)
        setTimeout(() => {
            setisloading(false)
        }, 2000)
    }, [])

    function sccrollTo(e) {
        if (e.target.id === 'about') {
            const el = document.getElementById('about-scrl');
            el.scrollIntoView({behavior: 'smooth'});
        }
        if (e.target.id === 'services') {
            const el = document.getElementById('services-scrl');
            el.scrollIntoView({behavior: 'smooth'});
        }
        if (e.target.id === 'roadmap') {
            const el = document.getElementById('roadmap-scrl');
            el.scrollIntoView({behavior: 'smooth'});
        }
        if (e.target.id === 'faq') {
            const el = document.getElementById('faq-scrl');
            el.scrollIntoView({behavior: 'smooth'});
        }
        if (e.target.id === 'contact') {
            const el = document.getElementById('contact-scrl');
            el.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="App">
            <div className='page-wrap'>
                { loading ?
                    <div className='preloader-center'>
                    <div className='preloader'></div>
                    </div>
                    :
                    <>
                    <Header sccrollTo={sccrollTo}/>
                    <Start/>
                    <Service/>
                    <Roadmap/>
                    <Faq/>
                    <Contact/>
                    <Footer/>
                    </>
                }
            </div>
        </div>
    );
}

export default App;
