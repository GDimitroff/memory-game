import { useEffect, useState } from 'react';

import { transformData } from '../utils/helpers';

const useClassicGame = (images) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  // handle choice
  const handleChoice = (card) => {
    choiceOne && choiceOne !== card ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // check if the game is ended
  useEffect(() => {
    if (cards.length > 0) {
      const gameEnded = cards.every((card) => card.matched === true);
      if (gameEnded) {
        setGameEnd(true);
      }
    }
  }, [cards]);

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
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

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

  return {
    cards,
    handleChoice,
    choiceOne,
    choiceTwo,
    disabled,
    turns,
    gameEnd,
  };
};

export default useClassicGame;
