import PropTypes from 'prop-types';

import ClassicBoard from './ClassicBoard';
import ModernBoard from './ModernBoard';
import styles from './Board.module.css';

const Board = ({ options, restartGame }) => {
  const { mode } = options;

  return (
    <div className={styles.wrapper}>
      {mode === 'classic' && (
        <ClassicBoard options={options} restartGame={restartGame} />
      )}
      {mode === 'modern' && (
        <ModernBoard options={options} restartGame={restartGame} />
      )}
    </div>
  );
};

export default Board;

Board.propTypes = {
  restartGame: PropTypes.func.isRequired,
};
