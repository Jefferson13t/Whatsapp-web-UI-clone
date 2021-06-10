import React from 'react';
import Header from '../Header';
import Contacts from '../Contacts';
import './style.css'

function LeftSection() {
    return(
        <div className="left__section">
            <Header />
            <Contacts />
        </div>
    )
}

export default LeftSection;