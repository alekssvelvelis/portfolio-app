import React, { useState, useEffect, useRef } from 'react';
import SingleProject from './SingleProject';
import MemoriaCard from '../images/memoria_logo.svg';
import BilletinCard from '../images/billetin_logo.svg';
function Projects() {
    const [projectName, setProjectName] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const projectImageContainerRef = useRef(null);

    const handleProjectState = (project) => {
        setProjectName(projectName === project ? '' : project);
    };

    const handleClose = () => {
        setProjectName('');
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (projectImageContainerRef.current) {
            observer.observe(projectImageContainerRef.current);
        }

        return () => {
            if (projectImageContainerRef.current) {
                observer.unobserve(projectImageContainerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className={`${isVisible ? 'project-container visible' : 'project-container'}`}>
                <h1 className='project-name'>Projects</h1>
                <div 
                    className={`project-image-container ${isVisible ? 'visible' : ''}`}
                    ref={projectImageContainerRef}
                >
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img
                                    src={BilletinCard}
                                    onClick={() => handleProjectState('billetin')}
                                    alt="Billetin"
                                />
                            </div>
                            <div className='flip-card-back' onClick={() => handleProjectState('billetin')}>
                                <h1>Billetin</h1>
                                <p>Ticket-selling app with an authorization system, user reviews and Stripe purchases</p>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img
                                    src={MemoriaCard}
                                    onClick={() => handleProjectState('memoria')}
                                    alt="Memoria"
                                />
                            </div>
                            <div className='flip-card-back' onClick={() => handleProjectState('memoria')}>
                                <h1>Memoria</h1>
                                <p>Memory-game with different levels, achievements, animated backgrounds and a leaderboard</p>
                            </div>
                        </div>
                    </div>
                </div>
                {projectName && 
                    <SingleProject project={projectName} onClose={handleClose} />
                }
            </div>
            
        </>
    );
}

export default Projects;
