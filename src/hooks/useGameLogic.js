import { useEffect, useState } from 'react';

import {
  addUniqueIds,
  getFormedData,
  getPairedPics,
  shuffleCards,
} from '../utils/helpers';

const MAX_VISIBLE_CARDS = 2;
const DIFFICULTIES = {
  easy: 1500,
  medium: 1000,
  hard: 500,
  pro: 250,
};

const useGameLogic = (images, difficulty) => {
  const [turns, setTurns] = useState(0);
  const [winner, setWinner] = useState(true);
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c);
    setCards(d);
  };

  const flipCard = (clickedCardId) => {
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      if (card.isShown) {
        setVisibleCards((oldState) => [...oldState, card.uniqueId]);
      }

      return card;
    });

    setCards(flippedCards);
  };

  const onCardClick = (clickedCardId) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS) {
      flipCard(clickedCardId);
    }
  };

  const checkMatch = () => {
    const visible = cards.filter(
      (card) => visibleCards.indexOf(card.uniqueId) !== -1
    );

    const matched = visible[0].id === visible[1].id;

    const updatedCards = () =>
      cards.map((card) => {
        if (visibleCards.indexOf(card.uniqueId) !== -1) {
          card.isShown = false;
          card.isFound = matched;
        }

        return card;
      });

    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
    }, DIFFICULTIES[difficulty]);
  };

  useEffect(() => {
    if (images.length > 0) {
      prepareCards();
      setTurns(0);
    }
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      setTurns((prevTurns) => prevTurns + 1);
      checkMatch();
    }
  }, [visibleCards]);

  useEffect(() => {
    if (images.length > 0 && turns === images.length) {
      setWinner(true);
    }
  }, [turns]);

  return { cards, onCardClick, winner };
};

export default useGameLogic;
