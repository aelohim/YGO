import '../cardselectcomponent/index.js'
import CardselectedComponent from '../cardselectcomponent/index.js';
import Button from "react-bootstrap/Button";
import { useState } from 'react';

export default function SearchcontainerComponent({ cardList, seleccionar }) {
    const [selectedCard, setSelectedCard] = useState({ id: 0 });
    const selectCardHandler = (card) => {
        setSelectedCard(card)
    }
    
    return (<>
        <Button
            disabled={selectedCard.id == 0}
            className="m-1"
            variant="success"
            id="btn_searchadd"
            onClick={() => {
                seleccionar(selectedCard);
                setSelectedCard({ id: 0 })
            }}> + </Button>
        <div className='searchContainer'>
            {cardList && cardList.length > 0 && cardList.map(card =>
                <CardselectedComponent key={card.id} card={card} 
                callback={selectCardHandler} 
                selected={card.id === selectedCard.i} 
                seleccionar={seleccionar}>
                </CardselectedComponent>
            )}
        </div>
    </>
    );
};