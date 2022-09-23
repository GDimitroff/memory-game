import PropTypes from 'prop-types';

import StandardBoard from './StandardBoard';
import AlternateBoard from './AlternateBoard';
import styles from './Board.module.css';

const Board = ({ options, restartGame }) => {
  const { mode } = options;

  return (
    <div className={styles.wrapper}>
      {mode === 'standard' && (
        <StandardBoard options={options} restartGame={restartGame} />
      )}
      {mode === 'alternate' && (
        <AlternateBoard options={options} restartGame={restartGame} />
      )}
    </div>
  );
};

export default Board;

Board.propTypes = {
  restartGame: PropTypes.func.isRequired,
};
