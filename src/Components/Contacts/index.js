import React from 'react';
import SearchBar from '../SearchBar';
import LastChats from '../LastChats';
import profilePicture from '../assets/profilePicture.jpg'
import profileinsta from '../assets/perfil-insta.jpeg'
import starryNight from '../assets/starry-night.jpg'
import monalisa from '../assets/monalisa.jpg'


import './style.css'

let lastChats = [{
    nome: 'Jefferson Pereira',
    profilePicture: profilePicture,
    lastMessage: 'Um passo de cada vez',
    time: 'Agora'
},
{
    nome: '@jeferson_souuza',
    profilePicture: profileinsta,
    lastMessage: 'Segue Lá no insta',
    time: '08:30'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
},
{
    nome: 'Contato',
    profilePicture: starryNight,
    lastMessage: 'Adicionei varias conversas',
    time: 'Ontem'
},
{
    nome: 'Aleatório',
    profilePicture: monalisa,
    lastMessage: 'Só para aparecer a barra de rolagem',
    time: 'Ontem'
}]

function Contacts() {
   
    let final = lastChats.map(a => <div><LastChats nome={a.nome} profilePicture={a.profilePicture} lastMessage={a.lastMessage} time={a.time}/></div>)
    return(
        <div>
            <SearchBar />
            <div className="chat__list">
                {final}
            </div>
        </div>
    )
}

export default Contacts;