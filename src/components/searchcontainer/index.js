import '../cardselectcomponent/index.js'
import { useContext } from 'react';
import { appContext } from '../../provider/index.js';
import { Row, Col } from 'react-bootstrap';

export default function SearchcontainerComponent() {
    const { setCurrentCard, addCardToDeckCardList, cardList } = useContext(appContext);

    const clickHandler = $event => {
        $event.preventDefault();
        
        addCardToDeckCardList(cardList.find(card => $event.target.id == card.id));
    }

    const MouseOverHandler = $event => {
        console.log($event.target)
        setCurrentCard(cardList.find(card => $event.target.id == card.id));
        // console.log(cardList.find(card => $event.target.id == card.id));
        
    }
    return (<>
        <div className='searchContainer'>
            {cardList && cardList.length > 0 && cardList.map(card =>
                <div>
                    <Row>
                        <Col xs={3} className="img-card-container">
                            <div>
                                <img id={card.id} className="img img-fluid" src={card.card_images[0].image_url_small} onContextMenu={clickHandler} onMouseOver={MouseOverHandler}></img>
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
            )}
        </div>
    </>
    );
};