import React from 'react';
import './style.css';
import visualizado from '../assets/visualizado.svg';
import mais from '../assets/sinal-de-seta-para-baixo-para-navegar.svg'

class Message extends React.Component{
    render(){
    return(
        <div className="message">
            <p>{this.props.message}</p>
            <span>{this.props.time}</span>
            <img id="visualizado" src={visualizado}/>
            <img id="mais" src={mais}/>
        </div>
    )
    } 
}

export default Message;