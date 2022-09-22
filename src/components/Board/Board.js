import PropTypes from 'prop-types';

import ClassicBoard from './ClassicBoard';
import ModernBoard from './ModernBoard';

const Board = ({ gameOptions, restartGame }) => {
  return (
    <>
      {gameOptions.gameMode === 'classic' ? (
        <ClassicBoard gameOptions={gameOptions} restartGame={restartGame} />
      ) : (
        gameOptions.gameMode === 'modern' && (
          <ModernBoard gameOptions={gameOptions} restartGame={restartGame} />
        )
      )}
    </>
  );
};

export default Board;

Board.propTypes = {
  restartGame: PropTypes.func.isRequired,
};
