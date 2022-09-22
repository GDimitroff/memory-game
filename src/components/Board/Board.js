import PropTypes from 'prop-types';

import ClassicBoard from './ClassicBoard';
import ModernBoard from './ModernBoard';

const Board = ({ gameMode, gameOptions, restartGame }) => {
  return (
    <>
      {gameMode === 'classic' ? (
        <ClassicBoard gameOptions={gameOptions} restartGame={restartGame} />
      ) : (
        gameMode === 'modern' && (
          <ModernBoard gameOptions={gameOptions} restartGame={restartGame} />
        )
      )}
    </>
  );
};

export default Board;

Board.propTypes = {
  gameMode: PropTypes.string.isRequired,
  restartGame: PropTypes.func.isRequired,
};
