import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const heart = <FontAwesomeIcon className="heart-patient" icon={faHeart}></FontAwesomeIcon>;
    return (
        <div className="header">
            <h1>World Famous Writer and Authors Conference</h1>
            <small>Hit the <span className="delegate">"Delegate"</span> button to register and confirm your session with your favorite writer {heart}{heart}</small>
        </div>
    );
};

export default Header;
