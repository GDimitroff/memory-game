import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';

import useGetImages from '../../hooks/useGetImages';
import useAlternateMode from '../../hooks/useAlternateMode';

import Loader from '../UI/Loader';
import HeaderBoard from './HeaderBoard';
import Card from '../Card';
import Button from '../UI/Button';
import styles from './Board.module.css';

const AlternateBoard = ({ options, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(options);
  const { cards, handleChoice, gameEnd, score } = useAlternateMode(images);

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
          <HeaderBoard text="Score" value={score} />
          <div className={styles.board}>
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={true}
                disabled={gameEnd}
                mode="alternate"
              />
            ))}
          </div>
          {gameEnd && <Confetti />}
          {gameEnd && <Button text="New Game" onClick={restartGame} />}
        </>
      )}
    </>
  );
};

export default AlternateBoard;

AlternateBoard.propTypes = {
  options: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  restartGame: PropTypes.func.isRequired,
};
