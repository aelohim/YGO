import React, { useContext } from "react";
import { appContext } from '../../provider/index.js';

export default function CardViewComponent() {
    const { currentCard } = useContext(appContext);
    return (
        <>
            <div className='imagen'>
                { }
                <img className='img img-fluid' src={currentCard ? currentCard.card_images[0].image_url : ''}></img>
            </div>
            <div className="card-detail container-fluid">
                {currentCard ? currentCard.desc : 'Descripcion' }
            </div>
        </>
    )
};