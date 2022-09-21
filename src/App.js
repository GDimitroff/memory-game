import { useState } from 'react';

import Background from './components/Background';
import GameMode from './components/GameModes';
import Settings from './components/Settings/Settings';
import Board from './components/Board/Board';
import ToggleCheckbox from './components/UI/ToggleCheckbox';

const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [gameOptions, setGameOptions] = useState(null);

  const handleStartGame = (options) => {
    setGameOptions(options);
  };

  const handleToggleAnimation = () => {
    setAnimation((prevAnimation) => !prevAnimation);
  };

  const handleSelectGameMode = (mode) => {
    mode === 'modern' ? setGameMode('modern') : setGameMode('classic');
  };

  const handleRestartGame = () => {
    setGameMode(null);
    setGameOptions(null);
  };

  return (
    <div>
      <div className="animation">
        <ToggleCheckbox
          animation={animation}
          toggleAnimation={handleToggleAnimation}
        />
      </div>
      {animation && <Background />}
      {!gameMode && <GameMode onSelectGameMode={handleSelectGameMode} />}
      {gameMode && !gameOptions && (
        <Settings startGame={handleStartGame} gameMode={gameMode} />
      )}
      {gameOptions && (
        <Board
          gameMode={gameMode}
          gameOptions={gameOptions}
          restartGame={handleRestartGame}
        />
      )}
    </div>
  );
};

export default App;
