import { useEffect, useState } from 'react';

const useModernGame = (images) => {
  const [cards, setCards] = useState([]);
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);

  // handle choice
  const handleChoice = (card) => {
    setChoice(card);
  };

  // check if the game is ended
  useEffect(() => {
    if (cards.length > 0) {
      const allPicked = cards.every((card) => card.picked === true);

      if (allPicked) {
        setGameEnd(true);
      } else {
        setCards((prevCards) => prevCards.sort(() => Math.random() - 0.5));
      }
    }
  }, [cards]);

  // compare cards
  useEffect(() => {
    if (choice) {
      if (choice.picked === true) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            return { ...card, picked: false };
          })
        );

        setScore(0);
      } else {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choice.id) {
              return { ...card, picked: true };
            } else {
              return card;
            }
          });
        });

        setScore((prevScore) => prevScore + 1);
      }

      setChoice(null);
    }
  }, [choice]);

  // prepare cards
  useEffect(() => {
    if (images.length > 0) {
      const transformedCards = images.map((pic) => ({
        id: Math.random(),
        url: pic.src.small,
        picked: false,
      }));

      setCards(transformedCards);
    }
  }, [images]);

  return {
    cards,
    score,
    handleChoice,
    gameEnd,
  };
};

export default useModernGame;
