import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';

import useGetImages from '../../hooks/useGetImages';
import useClassicGame from '../../hooks/useClassicGame';

import Loader from '../UI/Loader';
import HeaderBoard from './HeaderBoard';
import Card from '../Card';
import styles from './Board.module.css';

const ClassicBoard = ({ options, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(options);
  const {
    cards,
    handleChoice,
    choiceOne,
    choiceTwo,
    disabled,
    turns,
    gameEnd,
  } = useClassicGame(images);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {gameEnd && <Confetti />}
          <HeaderBoard
            turns={turns}
            restartGame={restartGame}
            gameEnd={gameEnd}
          />
          <div className={styles.board}>
            {cards.map((card) => (
              <Card
                key={card.uniqueId}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
                mode="classic"
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ClassicBoard;

ClassicBoard.propTypes = {
  options: PropTypes.shape({
    category: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
  }),
  restartGame: PropTypes.func.isRequired,
};
