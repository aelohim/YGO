import React from "react";
import { Col, Row } from "react-bootstrap";

export default function CardselectedComponent({ card, callback, selected, deckCardList, removeCardFromDeckList }) {
    const clickHandler = $event => {
        $event.preventDefault();
        removeCardFromDeckList(card);
    }
    return (
        <>
            <div className={selected ? "item selected" : "item"} >
                <Row>
                    <Col xs={3} className="img-card-container">
                        <div onClick={() => { callback(card) }} onContextMenu={clickHandler}>
                            <img className="img img-fluid" src={card.card_images[0].image_url_small}></img>
                        </div>
                    </Col>
                    <Col xs={9} className="card-detail-container">
                        {card && card.type && card.type == 'Spell Card' || card.type == 'Trap Card' ? (<>
                            <p>{card.name}</p>
                            <p>{card.type}/{card.race}</p>
                        </>) : (<>
                            <p>{card.name}</p>
                            <p>{card.type}/{card.race}</p>
                            <p>{card.atk}/{card.def} nv{card.level}</p>

                        </>)}
                    </Col>
                </Row>
            </div>
        </>
    )
}