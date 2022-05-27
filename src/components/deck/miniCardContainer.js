import React, { useContext } from "react";
import { appContext } from "../../provider";

export default function MiniCardContainer({card, index}) {
    const { removeCardFromDeckList, removeCardFromExtraDeck, tipoextra, cardList, setCurrentCard} = useContext(appContext);
    const clickHandler = $event => {
        $event.preventDefault();
        if (tipoextra.includes(card.type))
            removeCardFromExtraDeck(index);
        else
            removeCardFromDeckList(index);
    }

    const MouseOverHandler = $event => {
        setCurrentCard(cardList.find(card => $event.target.id == card.id));
    }
    return (
        <>
            <img className="img img-fluid" id={card.id} src={card.card_images[0].image_url_small} onContextMenu={clickHandler} onMouseOver={MouseOverHandler}></img>
        </>
    )
};