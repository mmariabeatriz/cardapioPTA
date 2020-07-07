import React, { useState, useEffect} from "react";
import axios from 'axios';
import Button from '../Button';
import Search from '../Search';
import './style.css';

function Menu () {
    const [Menu, setMenu] = useState([]);
    const [search, setSearch] = useState('');

    const loadMenu = async () => {
        const res = await axios.get('http://localhost:3001/api/cardapio');
        setMenu(res.data);
    };

    useEffect(()=> {
        loadMenu();
    }, []);

    return(
        <ul>
            <header>
                <h1>Cardápio</h1>
                <Search onChange={()=>{setSearch(document.querySelector('.search-bar-input').value)}}/>
            </header>
            {Menu?.map(
                function({ _id, tipo, descricao, preco, imagem}){
                    if(search === '' || tipo.toUpperCase().includes(search.toUpperCase()) === true)
                    return(
                    <li class="item" id={_id}>
                        <img src={imagem[0]?.url} alt="Foto produto"/>
                        <p class="texto">
                            <h2>{tipo}</h2>
                            <p>{descricao}</p>
                            <h3>{`R$${preco},00`}</h3>
                        </p>
                        <Button />
                    </li>
                    )
                }
            )};
        </ul>   
    );
};

export default Menu;