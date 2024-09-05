
import React from 'react';
import RotatingText from './RotatingText';
import DiscordStatus from './DiscordStatus';
import SocialIcons from './SocialIcons';
function PersonalInfo() {

  return (
    <div className='personal-container'>
        <div className='info-box'>
            <h1>Hey!</h1>
            <h1>My name is <span>Alekss Velvelis</span></h1>
            <RotatingText/>
            <SocialIcons/>
        </div>
        <div className='info-box'>
            <DiscordStatus/>
        </div>
    </div>
  );
};

export default PersonalInfo;
