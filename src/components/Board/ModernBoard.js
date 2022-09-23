import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';

import useGetImages from '../../hooks/useGetImages';
import useModernGame from '../../hooks/useModernGame';

import Loader from '../UI/Loader';
import HeaderBoard from './HeaderBoard';
import Card from '../Card';
import styles from './Board.module.css';

const ModernBoard = ({ options, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(options);
  const { cards, handleChoice, gameEnd, score } = useModernGame(images);

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
            turns={score}
            restartGame={restartGame}
            gameEnd={gameEnd}
          />
          <div className={styles.board}>
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={true}
                disabled={gameEnd}
                mode="modern"
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ModernBoard;

ModernBoard.propTypes = {
  options: PropTypes.shape({
    category: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
  }),
  restartGame: PropTypes.func.isRequired,
};
