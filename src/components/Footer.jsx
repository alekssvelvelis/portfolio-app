import React from 'react';
import SocialIcons from './SocialIcons';
function Footer() {
    return(
        <>
        <div className='footer'>
            <div className='footer-section'>
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <svg className="header-logo" width="52" height="52" viewBox="0 0 231 137" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line x1="142" y1="132" x2="132" y2="132" stroke="currentColor" strokeWidth="8"/>
                    <line x1="81.9997" y1="1.5" x2="89.5997" y2="1.5" stroke="currentColor"/>
                    <line x1="85.5993" y1="1.74441" x2="22.5992" y2="131.744" stroke="currentColor" strokeWidth="8"/>
                    <line x1="230.026" y1="68.9999" x2="0.0260669" y2="70.4999" stroke="currentColor" strokeWidth="8"/>
                    <line x1="208.515" y1="4.90777" x2="138.515" y2="133.908" stroke="currentColor" strokeWidth="8"/>
                    <line x1="85.7403" y1="1.58309" x2="135.74" y2="133.583" stroke="currentColor" strokeWidth="8"/>
                    <line x1="50.0375" y1="132" x2="0.0400112" y2="132.5" stroke="currentColor" strokeWidth="8"/>
                    <line x1="230.037" y1="3.9998" x2="180.04" y2="4.49977" stroke="currentColor" strokeWidth="8"/>
                </svg>
                <p>Alekss Velvelis 2024. All rights reserved</p>
                </div>
                <SocialIcons/>
            </div>
        </div>
        </>
    );
}

export default Footer;