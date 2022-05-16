import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterComponent from '../filter';
import SearchcontainerComponent from '../searchcontainer';
import DeckComponent from '../deck';

export default function HomeComponent() {
    const [cardList, setCardList] = useState([]);
    const [filteredCardList, setFilteredCardList] = useState([]);
    const [deckCardList, setDeckCardList] = useState([]);
    const [extraDeckList, setExtraDeckList] = useState([]);
    const [sideDeckList, setSideDeckList] = useState([]);

    const tipoextra = ['XYZ Monster', 'Fusion Monster', 'Link Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'XYZ Pendulum Effect Monster', 'Synchro Pendulum Effect Monster'];
    let index = 0;

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
        if (tipoextra.includes(card.type)) {
            if (extraDeckList.filter(item => item.id == card.id).length < 3)
                setExtraDeckList([...extraDeckList, card]);
            console.log(extraDeckList);
        }
        else {
            if (deckCardList.filter(item => item.id == card.id).length < 3)
                setDeckCardList([...deckCardList, card]);
        }
    }

    const removeCardFromExtraDeck = index => {
        setExtraDeckList(extraDeckList.filter((card, i) => i != index));
    }
    const removeCardFromDeckList = index => {
        setDeckCardList(deckCardList.filter((card, i) => i != index));
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
                        <DeckComponent
                            deckCardList={deckCardList}
                            extraDeckList={extraDeckList}
                            removeCardFromDeckList={removeCardFromDeckList}
                            removeCardFromExtraDeck={removeCardFromExtraDeck}
                            index={index}
                            tipoextra={tipoextra}>
                        </DeckComponent>
                    </Col>
                    <Col xs={3}>
                        <SearchcontainerComponent cardList={filteredCardList} seleccionar={selectedCardHandler}></SearchcontainerComponent>
                    </Col>
                </Row>
            </Container>
        </>
    )
};