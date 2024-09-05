import React, { useState, useEffect } from 'react';
const DiscordStatus = () => {
    const [userData, setUserData] = useState(null);

    const getDiscord = async () => {
        try {
            const response = await fetch('https://api.lanyard.rest/v1/users/195117313215823872', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            } else {
                const errorData = await response.json();
                console.error('Error fetching user info:', errorData);
            }
        } catch (error) {
            console.error('Error fetching discord info in DiscordStatus.jsx:', error);
        }
    };

    useEffect(() => {
        getDiscord();
    }, []);

    setTimeout(() => {
        getDiscord();
    }, 1000);

    let status = '';
    if (userData && userData.data && userData.data.discord_status) {
        switch (userData.data.discord_status) {
            case 'online':
                status = "#3BA55C";
                break;
            case 'idle':
                status = "#FAA61A";
                break;
            case 'dnd':
                status = "#ED4245";
                break;
            case 'offline':
                status = "747F8D";
                break;
            default:
                status = "747F8D";
                break;
        }
    }
    return(
        <div className='profile-card'>
            {userData ? (
                <>
                <div className='profile-section'>
                    <img src={`https://cdn.discordapp.com/avatars/195117313215823872/${userData.data.discord_user.avatar}?size=1024`} alt="Discord Avatar" />
                    <div className='profile-section-text'>
                        <p>{userData.data.discord_user.username}</p>
                        <p>MEMBER SINCE</p>
                        <div className='date-section'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="discord-logo" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                            </svg>
                            <p className='date'>Jun 22, 2016</p>  
                        </div>
                    </div>
                    <div className='status-bubble' style={{backgroundColor: status}}></div>
                </div>
                {userData.data.listening_to_spotify &&
                <>
                    <p className='spotify-activity'>listening to spotify</p>
                    <div className='profile-section'>
                    <img className='spotify-album-art' style={{width: '100px', height: '100px'}} src={userData.data.spotify.album_art_url}></img>
                        <div className='profile-section-text'>
                            <p> {userData.data.spotify.song}</p>
                            <p> by {userData.data.spotify.artist}</p>
                            <p> on {userData.data.spotify.album}</p>  
                        </div>
                    </div>
                </>
                }
                
                </>
            ) : (
                <p>Loading...</p> // Show a loading message or spinner
            )}
        </div>
    );
}

export default DiscordStatus;