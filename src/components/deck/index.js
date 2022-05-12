import React from "react";
import MiniCardContainer from "./miniCardContainer";

export default function DeckComponent({ deckCardList, removeCardFromDeckList }) {
    return (
        <>
            <div className="deck-container">
                {deckCardList.length > 0 && deckCardList.map(card =>
                    <div className="mini-card-container">
                        <MiniCardContainer  key={card.id} card={card} removeCardFromDeckList={removeCardFromDeckList} ></MiniCardContainer>
                    </div>
                )}
            </div>
        </>
    )
};