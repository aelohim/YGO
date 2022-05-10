import '../searchcontainer/searchcontainer.css'
import '../cardselectcomponent/index.js'
import CardselectedComponent from '../cardselectcomponent/index.js';
import Button from "react-bootstrap/Button";
import { useState } from 'react';

export default function SearchcontainerComponent({ cardList, callback }) {
    const [selectedCard, setSelectedCard] = useState({ id: 0 });
    const selectCardHandler = (card) => {
        console.log(card);
        setSelectedCard(card)
    }

    return (<>
        <div className='searchContainer'>
            <Button className="m-1" variant="danger" controlId="btn_searchadd" onClick={() => { callback(selectedCard) }}> + </Button>
            {cardList && cardList.data.length > 0 && cardList.data.map(card =>
                <CardselectedComponent card={card} callback={selectCardHandler} selected={card.id === selectedCard.id}  ></CardselectedComponent>
            )}
        </div>
    </>
    );
};