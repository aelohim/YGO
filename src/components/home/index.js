import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterComponent from '../filter';
import SearchcontainerComponent from '../searchcontainer';
import DeckComponent from '../deck';

export default function HomeComponent() {
    const [cardList, setCardList] = useState([]);
    const [filteredCardList, setFilteredCardList] = useState([]);

    const [deckCardList, setDeckCardList] = useState([]);

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
            setCardList(resp.data.slice(0, 100) || []);
            setFilteredCardList(resp.data.slice(0, 100) || []);
        };
        getItems();
    }, []);
   
    const selectedCardHandler = card => {
        setDeckCardList([...deckCardList, card]);
    }

    const removeCardFromDeckList = card => {
        setDeckCardList(deckCardList.filter(item => item.id != card.id));
    }

    const searchTextFilter = (searchText) => {
        let aux = cardList.filter(card => card.name.toUpperCase().includes(searchText.toUpperCase()))
        setFilteredCardList(aux);
    }

    return (
        <>
            <Container>
                <Row>
                    <FilterComponent searchTextFilter={searchTextFilter}></FilterComponent>
                </Row>
                <Row>
                    <Col>
                        <DeckComponent deckCardList={deckCardList} removeCardFromDeckList={removeCardFromDeckList}></DeckComponent>
                    </Col>
                    <Col xs={3}>
                        <SearchcontainerComponent cardList={filteredCardList} callback={selectedCardHandler} 
                        deckCardList={deckCardList} removeCardFromDeckList={removeCardFromDeckList}></SearchcontainerComponent>
                    </Col>
                </Row>
            </Container>
        </>
    )
};