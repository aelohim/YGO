import React from "react";
import MiniCardContainer from "./miniCardContainer";

export default function DeckComponent({ deckCardList, removeCardFromDeckList, index, extraDeckList, removeCardFromExtraDeck, tipoextra }) {
    return (
        <>
            <div className="deck-container">
                {deckCardList.length > 0 && deckCardList.map((card, index) =>
                    <div className="mini-card-container">
                        <MiniCardContainer key={card.id} card={card}
                            removeCardFromDeckList={removeCardFromDeckList}
                            index={index}
                            tipoextra={tipoextra}></MiniCardContainer>
                    </div>
                )}
            </div>
            <div className="extra-deck-container">
                {extraDeckList.length > 0 && extraDeckList.map((card, index) =>
                    <div className="mini-card-container">
                        <MiniCardContainer key={card.id} card={card}
                            removeCardFromExtraDeck={removeCardFromExtraDeck}
                            index={index}
                            tipoextra={tipoextra}>
                        </MiniCardContainer>
                    </div>
                )}
            </div>
        </>
    )
};