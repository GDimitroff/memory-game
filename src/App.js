import { useState } from 'react';

import Background from './components/Background';
import GameMode from './components/GameModes';
import Settings from './components/Settings/index.js';
import Board from './components/Board';
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

  const handleSelectGameMode = (gameMode) => {
    if (gameMode === 'modern') {
      //TODO: Implement this game mode
      console.log('modern');
      return;
    }

    setGameMode('classic');
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
      {gameOptions && <Board gameOptions={gameOptions} />}
    </div>
  );
};

export default App;
