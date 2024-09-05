import React, { useState, useEffect } from 'react';

const words = ["programmer", "designer", ];

const RotatingText = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    // Pause before starting to delete
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setPause(true);
      setTimeout(() => {
        setIsDeleting(true);
        setPause(false);
      }, 1000); // 1 second pause before deleting
      return;
    }

    // Pause before starting to type next word
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      setPause(true);
      setTimeout(() => setPause(false), 500); // 0.5 second pause before typing next word
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, Math.max(isDeleting ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, pause]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 1000);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <span className='rotating-text'>
        I am a {`${words[index].substring(0, subIndex)}`}
      <span className={`cursor ${blink ? 'blink' : ''} rotating-text`}>&#124;</span>
    </span>
  );
};

export default RotatingText;
