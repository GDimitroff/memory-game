import { useEffect, useState } from 'react';

import { transformData } from '../utils/helpers';

const DIFFICULTIES = {
  easy: 1500,
  medium: 1000,
  hard: 750,
  pro: 500,
};

const useClassicGame = (images, difficulty) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // handle choice
  const handleChoice = (card) => {
    choiceOne && choiceOne !== card ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.id === choiceTwo.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), DIFFICULTIES[difficulty]);
      }
    }
  }, [choiceOne, choiceTwo, difficulty]);

  // prepare and shuffle cards
  useEffect(() => {
    if (images.length > 0) {
      const transformedCards = transformData(images);
      const shuffleCards = [...transformedCards, ...transformedCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, uniqueId: Math.random() }));

      setCards(shuffleCards);
      setTurns(0);
    }
  }, [images]);

  return { cards, handleChoice, choiceOne, choiceTwo, disabled, turns };
};

export default useClassicGame;
