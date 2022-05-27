import React, { useContext } from "react";
import { appContext } from "../../provider";
import MiniCardContainer from "./miniCardContainer";

export default function DeckComponent() {

    const { deckCardList, extraDeckList } = useContext(appContext)
   

    return (
        <>
            <div className="deck-container p-0">
                {deckCardList.length > 0 && deckCardList.map((card, index) =>
                    <div className="mini-card-container">
                        <MiniCardContainer key={card.id} card={card} index={index}></MiniCardContainer>
                    </div>
                )}
            </div>
            <div className="extra-deck-container mt-3">
                {extraDeckList.length > 0 && extraDeckList.map((card, index) =>
                    <div className="mini-card-container p-0">
                        <MiniCardContainer key={card.id} id={card.id} card={card} index={index} >
                        </MiniCardContainer>
                    </div>
                )}
            </div>
        </>
    )
};