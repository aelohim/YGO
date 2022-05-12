import React from "react";

export default function MiniCardContainer({ card, removeCardFromDeckList }) {
    const clickHandler = $event => {
        $event.preventDefault();
        removeCardFromDeckList(card);
    }
    return (
        <>
            <img className="img img-fluid" src={card.card_images[0].image_url_small} onContextMenu={clickHandler}></img>
        </>
    )
};