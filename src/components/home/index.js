import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterComponent from '../filter';
import SearchcontainerComponent from '../searchcontainer';
import PortfolioComponent from '../portfolio';

export default function HomeComponent() {
    const [cardList, setCardList] = useState({ data: [] });
    const [deckCardList, setDeckCardList] = useState();

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
            // console.log(categorias);

            setCardList(resp);
        };
        getItems();
    }, []);
    // useEffect(() => {
    //     async function getItems() {
    //         const options = { method: 'GET', headers: { Accept: 'application/json' } }
    //         const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', options);
    //         const resp = await response.json();


    //         const aux = resp.data.map(item => item.race).filter((valor, indice) => {
    //             return resp.data.map(item => item.race).indexOf(valor) === indice;
    //         })
    //         const races = aux.filter((valor, indice) => { return aux.indexOf(valor) === indice; }
    //         )
    //         console.log(races);

    //         setCardList(resp);
    //     };
    //     getItems();
    // }, []);
    const selectedCardHandler = card => {
        setDeckCardList([...deckCardList, card]);
        // console.log(card)
    }

    return (
        <>
            <Container>
                <Row>
                    <FilterComponent></FilterComponent>
                </Row>
                <Row>
                    <Col>
                        <PortfolioComponent deckCardList={deckCardList}></PortfolioComponent>
                    </Col>
                    <Col xs={3}>
                        <SearchcontainerComponent cardList={cardList} callback={selectedCardHandler}></SearchcontainerComponent>
                    </Col>
                </Row>
            </Container>
        </>
    )
};