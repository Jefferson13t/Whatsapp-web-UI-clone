import React from 'react';
import lupa from '../assets/lupa-arredondada.svg';
import './style.css';

function SearchBar() {
    return(
        <div className="container__pesquisar">
        <div className="pesquisar">
            <figure className="lupa">
                <img src={lupa}/>
            </figure>
            <div className="pesquisar__input"> 
                <input type="text" placeholder="Pesquisar ou começar uma nova conversa"></input>
            </div>
        </div>
        </div>
    )
}

export default SearchBar;