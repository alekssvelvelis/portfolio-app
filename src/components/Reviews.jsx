import React, { useRef, useState, useEffect } from 'react';
function Reviews() {
    const [isVisible, setIsVisible] = useState(false);
    const infoCardsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the top position of the About Me section is within the viewport
            if (
                infoCardsRef.current &&
                window.scrollY + window.innerHeight >= infoCardsRef.current.offsetTop
            ) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`review-container ${isVisible ? 'animate-in-left' : ''}`}
                ref={infoCardsRef}>

                <h1 className='project-name'>Reviews</h1>
                <div className='even-container'>
                    <div className='review-card red'>
                        <p className=''>Maecenas vitae lacinia purus, a sodales magna. Integer nec tristique ligula.</p>
                        <p className='signature'> John Doe, Apple 2021</p>
                    </div>
                    <div className='review-card green'>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='signature'> Jane Doe, Microsoft 2022</p>
                    </div>
                    <div className='review-card yellow'>
                        <p className=''>Pellentesque ac tellus fermentum, volutpat arcu malesuada, viverra.</p>
                        <p className='signature'> John Smith, NVIDIA 2023</p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Reviews;
