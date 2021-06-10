import React from 'react';
import SendMessage from '../SendMessage';
import './style.css';
import Message from '../Message';

let mensagens = [{
    mensagem: 'Olá',
    time: '13:13'
},{
    mensagem: 'Este é um clone da interface do WhatsApp web',
    time: '13:13'
},{
    mensagem: 'Feito com React.js',
    time: '13:13'
}]


function Messages() {

    let final = mensagens.map(a=> <div><Message message={a.mensagem} time={a.time}/></div>)
    return(
        <div className="messages">
            <div className="chat__field">
            {final}
            </div>
            <SendMessage />
        </div>
    )
}

export default Messages;