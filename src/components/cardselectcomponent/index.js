import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { AppContext } from "../../provider";

export default function CardselectedComponent() {
    // const addCardToDeckCardList = useContext(AppContext);
    // const clickHandler = $event => {
    //     $event.preventDefault();
    //     addCardToDeckCardList(card);
    // }
    return (
        <>
            {/* <div>
                <Row>
                    <Col xs={3} className="img-card-container">
                        <div>
                            <img className="img img-fluid" src={card.card_images[0].image_url_small} onContextMenu={clickHandler}></img>
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
            </div> */}
        </>
    )
}