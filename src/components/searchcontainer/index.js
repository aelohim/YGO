import React, { useEffect, useState } from 'react';
import '../searchcontainer/searchcontainer.css'

export default function SearchcontainerComponent({ titulo }) {
    const [cardList, setCardList] = useState({ data: [] });


    useEffect(() => {
        async function getItems() {
            const options = { method: 'GET', headers: { Accept: 'application/json' } }
            const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', options);
            const resp = await response.json();

            
            const aux = resp.data.map(item => item.type).filter((valor, indice) => {
                return resp.data.map(item => item.type).indexOf(valor) === indice;
            })
            const categorias = aux.filter((valor, indice) => { return aux.indexOf(valor) === indice; }
            )
            console.log(categorias);

            setCardList(resp);
        };
        getItems();
    }, []);
    useEffect(() => {
        async function getItems() {
            const options = { method: 'GET', headers: { Accept: 'application/json' } }
            const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', options);
            const resp = await response.json();

            
            const aux = resp.data.map(item => item.race).filter((valor, indice) => {
                return resp.data.map(item => item.race).indexOf(valor) === indice;
            })
            const races = aux.filter((valor, indice) => { return aux.indexOf(valor) === indice; }
            )
            console.log(races);

            setCardList(resp);
        };
        getItems();
    }, []);


    return (<>
        <h2> Cartas </h2>
        {cardList && cardList.data.length > 0 && cardList.data.map(card =>
            <img src={card.card_images[0].image_url_small}></img>

        )}</>
    );
};