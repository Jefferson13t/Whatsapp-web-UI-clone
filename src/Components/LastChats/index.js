import React from 'react';
import './style.css';
import arrow from '../assets/sinal-de-seta-para-baixo-para-navegar.svg'


class LastChats extends React.Component {

    render() {
    return(
        <div className="container__chat">
            <div className="left__chat">
                <img src={this.props.profilePicture}/>
            
                <div className="chat__info">
                    <p>{this.props.nome}</p>
                    <p>{this.props.lastMessage}</p>
                </div>
            </div>
            <div className="right__chat">
                <p>{this.props.time}</p>
                <img src={arrow}/> 
            </div>
        </div>
    )
    }
}

export default LastChats;