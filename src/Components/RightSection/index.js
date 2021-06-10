import React from 'react';
import RightSectionHeader from '../RightSectionHeader';
import Messages from '../Messages';
import './style.css';

function RightSection() {
    return(
        <div className="right__section">
            <RightSectionHeader />
            <Messages />
        </div>
    )
}

export default RightSection;