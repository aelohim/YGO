import React from "react";

export default function MiniCardContainer({ card, removeCardFromDeckList, removeCardFromExtraDeck, index, tipoextra }) {
    const clickHandler = $event => {
        $event.preventDefault();
        if (tipoextra.includes(card.type))
            removeCardFromExtraDeck(index);
        else
            removeCardFromDeckList(index);
    }
    return (
        <>
            <img className="img img-fluid" src={card.card_images[0].image_url_small} onContextMenu={clickHandler}></img>
        </>
    )
};