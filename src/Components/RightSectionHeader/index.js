import React from 'react';
import profilePicture from '../assets/profilePicture.jpg';
import lupa from '../assets/lupa-arredondada.svg';
import menu from '../assets/menu.svg';
import './style.css';

function RightSectionHeader() {
    return(
        <div className="right__header">
            <div className="right__header--left">
                <img src={profilePicture}/>
                <div>
                    <p>Me, myself and i</p>
                    <p>voce</p>
                </div>
            </div>
            <div className="right__header--right">
                <img src={lupa}/>
                <img src={menu}/>
            </div>
        </div>
    )
}

export default RightSectionHeader;