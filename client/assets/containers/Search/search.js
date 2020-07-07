import React, { useState } from "react";
import './Search.css';
import searchimg from './search.png';

function SearchBar(props) {
    return(
        <div class="search-bar">
            <input type="text" class="search-bar-input" onChange={props.onChange}/>
            <img src={searchimg} alt="Imagem de Busca" class="search-img"/>
        </div>
    );
};

export default SearchBar;