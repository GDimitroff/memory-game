import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';

import Result from '../Result';
import Loader from '../UI/Loader';
import Card from '../Card/Card';
import styles from './Board.module.css';

const ClassicBoard = ({ gameOptions, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  const { cards, onCardClick, winner } = useGameLogic(
    images,
    gameOptions.difficulty
  );

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <>
      {winner && <Result restartGame={restartGame} />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.board}>
          {cards.map((card) => (
            <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
          ))}
        </div>
      )}
    </>
  );
};

export default ClassicBoard;

ClassicBoard.propTypes = {
  gameOptions: PropTypes.shape({
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
  }),
  restartGame: PropTypes.func.isRequired,
};
