import React from 'react';
import profilePicture from '../assets/profilePicture.jpg';
import circle from '../assets/circle.svg';
import menu from '../assets/menu.svg';
import comment from '../assets/comment.svg';

import './style.css';



function Header() {
    return(
        <div className="header">
            <figure className="profile__picture">
                <img src={profilePicture} alt="foto do perfil"></img> 
            </figure>
            <ul className="navbar">
                <li><img src={circle}/></li>
                <li><img src={comment} /></li>
                <li><img src={menu} /></li>
            </ul>
        </div>
    )
}

export default Header;