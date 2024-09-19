import React, { useEffect, useState, useRef } from 'react';
import projectImages from '../utils/images';

function SingleProject({ project, onClose }) {
  const images = projectImages[project];
  const [activeImage, setActiveImage] = useState(Object.keys(images)[0]);
  const observer = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveImage(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      root: document.querySelector('.slider'),
      rootMargin: '0px',
      threshold: 0.5,
    });

    const images = document.querySelectorAll('.slider img');
    images.forEach(image => {
      observer.current.observe(image);
    });

    return () => {
      images.forEach(image => {
        observer.current.unobserve(image);
      });
    };
  }, [images]);

  const handleClose = () => {
    onClose();
  };

  const handleNavClick = (key, event) => {
    event.preventDefault();
    const targetImage = document.getElementById(key);
    if (targetImage) {
      targetImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveImage(key);
    }
  };

  return (
    <>
      <div className='project-image-modal'>
        <p className="close-button" onClick={handleClose}>X</p>
        <div className='slider-wrapper'>
          <div className='slider'>
            {Object.keys(images).map((key) => (
              <img
                src={images[key]}
                alt={`${project}-${key}`}
                key={key}
                id={`${key}`}
                onClick={() => setActiveImage(key)}
              />
            ))}
          </div>
          <div className='slider-nav'>
            {Object.keys(images).map((key) => (
              <a
                href={`#${key}`}
                key={key}
                className={activeImage === key ? 'active' : ''}
                onClick={(event) => handleNavClick(key, event)}
              ></a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProject;
