import PropTypes from 'prop-types';

import ClassicBoard from './ClassicBoard';
import ModernBoard from './ModernBoard';
import styles from './Board.module.css';

const Board = ({ gameMode, gameOptions, restartGame }) => {
  return (
    <div className={styles.wrapper}>
      {gameMode === 'classic' && (
        <ClassicBoard gameOptions={gameOptions} restartGame={restartGame} />
      )}
      {gameMode === 'classic' && (
        <ModernBoard gameOptions={gameOptions} restartGame={restartGame} />
      )}
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameMode: PropTypes.string.isRequired,
  restartGame: PropTypes.func.isRequired,
};
