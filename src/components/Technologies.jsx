import React, { useEffect, useState, useRef } from 'react';
import reactlogo from '../images/react.png';
import laravellogo from '../images/laravel.png';
import mysqllogo from '../images/mysql.png';
import tailwindlogo from '../images/tailwind.png';
function Technologies(){
    const [isVisible, setIsVisible] = useState(false);
    const infoCardsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                infoCardsRef.current &&
                window.scrollY + window.innerHeight >= infoCardsRef.current.offsetTop
            ) {
                setIsVisible(true);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
        <div
            className={`aboutme-container ${isVisible ? 'animate-in-right' : ''}`}
            ref={infoCardsRef}
        >
            <div>
                <h1 className='info-card-header'>Technologies</h1>
            </div>
            <div className='tech-container'>
                <div className='tech-card blue'>
                    <h1>Front-end</h1>
                    <img src={reactlogo} className="App-logo react" alt="logo" />
                    <p>I've built projects wih both React and React Native, this page is built with React. I also have experience using JQuery</p>
                </div>
                <div className='tech-card orange'>
                    <h1>Back-end</h1>
                    <img src={laravellogo} className="App-logo" alt="logo" />
                    <p>I have used PHP since I started making web-apps, currently I use Laravel 11 for my back-end needs</p>
                </div>
                <div className='tech-card purple'>
                    <h1>Database</h1>
                    <img src={mysqllogo} className="App-logo" alt="logo" />
                    <p>MySQL is the database I am most familiar with, I have used it the most in all my projects</p>
                </div>
                <div className='tech-card aqua'>
                    <h1>Styling</h1>
                    <img src={tailwindlogo} className="App-logo tailwind" id="tailwind-logo" />
                    <p>I have experience with Tailwind, SCSS and base CSS. This page is built with SCSS</p>
                </div>

            </div>
        </div>
        </>
    );
}

export default Technologies