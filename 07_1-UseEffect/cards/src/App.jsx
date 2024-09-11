import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

const CARD_API = 'https://deckofcardsapi.com/api/deck';

export default function App() {
  const [deck, setDeck] = useState(null);
  const [hand, setHand] = useState([]);

  useEffect(function getDeckFromAPI() {
    async function getDeck() {
      const newDeck = await axios.get(`${CARD_API}/new/shuffle/`);
      setDeck(deck => newDeck.data);
    }
    getDeck();
  }, []);

  async function handleDraw() {
    await fetch(`${CARD_API}/${deck.deck_id}/draw/`, {
      method: 'GET'
    }).then(async function (response) {
      let json = await response.json();
      if (json.remaining === 0) throw new Error("Deck is empty...");

      const card = json.cards[0];
      setHand(hand => [...hand, { id: card.code, key: card.suit + " " + card.value, image: card.image }]);
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div id="button-container">
        {deck === null ? null :
          <button id="deal-button" onClick={handleDraw}>Draw a card</button>}
      </div>

      <div id="deck-container" key="deck-container">
        {hand.map(card => {
          return (
            <img key={card.key} src={card.image} />
          );
        })}
      </div>
    </>
  )
}