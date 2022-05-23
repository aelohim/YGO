import React from "react";

export default function CardViewComponent( {deckCardList, extraDeckList, card}) {
    return(
    <>
        <div className='imagen'>
            {/* {deckCardList && deckCardList.length > 0 && deckCardList.map(card =>
                )} */}
            <img className='img img-fluid' src='https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg'></img>
        </div>
        <div className="card-detail">
            <h3> Descripcion </h3>
        </div>
    </>
)};