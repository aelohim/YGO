import '../cardselectcomponent/cardselectedcomponent.css'
import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";

export default function CardselectedComponent({ card, callback, selected }) {
    return (
        <>
            <div className="itemList">
                <Row>
                    <Col xs={3}>
                        <div onClick={() => { callback(card) }}>
                            <img className="img img-fluid" src={card.card_images[0].image_url_small}></img>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div>
                            {card && card.type && card.type == 'Spell Card' || card.type == 'Trap Card' ? (<>
                                
                                    <p className='mb-0'>{card.name}</p> <br></br>
                                    <p className='mb-0'>{card.type}/{card.race}</p>
                                
                            </>) : (<>
                                <CardGroup>
                                    <p className="mb-0">{card.name}</p>
                                    <p className="mb-0">{card.type}/{card.race}</p>
                                    <p className="mb-0">{card.atk}/{card.def} nv{card.level}</p>
                                </CardGroup>
                            </>)}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}