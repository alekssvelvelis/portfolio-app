import React, { useState } from 'react';
import DarkMode from "./DarkMode";

function Header() {
    const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);

    const togglePhoneModal = () => {
        setPhoneModalOpen(!isPhoneModalOpen);
    }

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <div className="header-section">
            <div className="header-section-buttons">
                <svg onClick={() => handleScroll('home')} className="header-logo" width="52" height="52" viewBox="0 0 231 137" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line x1="142" y1="132" x2="132" y2="132" stroke="currentColor" strokeWidth="8"/>
                    <line x1="81.9997" y1="1.5" x2="89.5997" y2="1.5" stroke="currentColor"/>
                    <line x1="85.5993" y1="1.74441" x2="22.5992" y2="131.744" stroke="currentColor" strokeWidth="8"/>
                    <line x1="230.026" y1="68.9999" x2="0.0260669" y2="70.4999" stroke="currentColor" strokeWidth="8"/>
                    <line x1="208.515" y1="4.90777" x2="138.515" y2="133.908" stroke="currentColor" strokeWidth="8"/>
                    <line x1="85.7403" y1="1.58309" x2="135.74" y2="133.583" stroke="currentColor" strokeWidth="8"/>
                    <line x1="50.0375" y1="132" x2="0.0400112" y2="132.5" stroke="currentColor" strokeWidth="8"/>
                    <line x1="230.037" y1="3.9998" x2="180.04" y2="4.49977" stroke="currentColor" strokeWidth="8"/>
                </svg>
                <div className="header-links">
                    <p onClick={() => handleScroll('aboutme')}>About me</p>
                    <p onClick={() => handleScroll('projects')}>Projects</p>     
                    <p onClick={() => handleScroll('technologies')}>Technologies</p>
                    {/* <p onClick={() => handleScroll('reviews')}>Reviews</p> */}
                    <p onClick={() => handleScroll('contacts')}>Contacts</p>
                </div>
            </div>
            <div>
                <DarkMode />
                {isPhoneModalOpen ? (
                    <svg onClick={togglePhoneModal} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons list" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                ) : (
                    <svg onClick={togglePhoneModal} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                )}
            </div>
            {isPhoneModalOpen && 
                <div className='header-modal'>
                    <p onClick={() => handleScroll('aboutme')}>About me</p>
                    <p onClick={() => handleScroll('projects')}>Projects</p>     
                    <p onClick={() => handleScroll('technologies')}>Technologies</p>
                    <p onClick={() => handleScroll('reviews')}>Reviews</p>
                    <p onClick={() => handleScroll('contacts')}>Contacts</p>
                </div>
            }
        </div>
        </>
    );
}

export default Header;
