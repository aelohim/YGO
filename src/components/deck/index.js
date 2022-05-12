import React from "react";
import MiniCardContainer from "./miniCardContainer";

export default function DeckComponent({ deckCardList, removeCardFromDeckList }) {
    // console.log(deckCardList);
    return (
        <>
            <div className="deck-container">
                {deckCardList.length > 0 && deckCardList.map(card =>
                    <div className="mini-card-container">
                        <MiniCardContainer card={card} removeCardFromDeckList={removeCardFromDeckList} ></MiniCardContainer>
                    </div>
                )}
            </div>
        </>
    )
};