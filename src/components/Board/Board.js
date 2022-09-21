import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';
import Loader from '../UI/Loader';
import Card from '../Card';
import Result from '../Result';
import styles from './Board.module.css';

const Board = ({ gameOptions, restartGame }) => {
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
    <div className={styles.wrapper}>
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
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
  }),
};
