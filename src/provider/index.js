import React, { createContext, useEffect, useState } from "react";

export const appContext = createContext();

export default function AppContext({ children }) {

    const [cardList, setCardList] = useState([]);
    const [filteredCardList, setFilteredCardList] = useState([]);
    const [deckCardList, setDeckCardList] = useState([]);
    const [extraDeckList, setExtraDeckList] = useState([]);
    const [currentCard, setCurrentCard] = useState();

    const tipoextra = ['XYZ Monster', 'Fusion Monster', 'Link Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'XYZ Pendulum Effect Monster', 'Synchro Pendulum Effect Monster'];

    useEffect(() => {
        async function getItemsFromApi() {
            const options = { method: 'GET', headers: { Accept: 'application/json' } }
            const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', options);
            const resp = await response.json();
        
            setCardList(resp.data.slice(0, 100) || []);
            setFilteredCardList(resp.data.slice(0, 100) || []);
        };
        getItemsFromApi();
    }, []);

    const addCardToDeckCardList = (card) => {
        if (tipoextra.includes(card.type)) {
            if (extraDeckList.filter(item => item.id == card.id).length < 3)
                setExtraDeckList([...extraDeckList, card]);
        }
        else {
            if (deckCardList.filter(item => item.id == card.id).length < 3)
                setDeckCardList([...deckCardList, card]);
        }

    }

    const removeCardFromExtraDeck = index => {
        setExtraDeckList(extraDeckList.filter((card,i) => i != index));
    }
    const removeCardFromDeckList = index => {
        setDeckCardList(deckCardList.filter((card,i) => i != index));
    }

    const searchTextFilter = (searchText) => {
        let aux = cardList.filter(card => card.name.toUpperCase().includes(searchText.toUpperCase()))
        setFilteredCardList(aux);
    }
 
    return (
        <appContext.Provider
            value={{
                cardList,
                filteredCardList,
                deckCardList,
                extraDeckList,
                tipoextra,
                currentCard,
                setCardList,
                setCurrentCard,
                addCardToDeckCardList,
                searchTextFilter,
                removeCardFromDeckList,
                removeCardFromExtraDeck
            }}>
            {children}
        </appContext.Provider>
    );
}