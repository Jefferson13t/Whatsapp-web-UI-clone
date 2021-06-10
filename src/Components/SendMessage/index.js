import React from 'react';
import smile from '../assets/smile.svg';
import microfone from '../assets/microfone.svg';
import penDrive from '../assets/penDrive.svg';
import './style.css'


function SendMessage() {
    return(
        <div className="send__message">
            <img src={smile}/>
            <img src={penDrive}/>
            <div className="send__message--input" placeholder="Digite uma mensagem">
                <input type="text" />
            </div>
            <img src={microfone}/>
        </div>
    )
}

export default SendMessage;