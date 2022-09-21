import { useState } from 'react';

import useGetImages from './hooks/useGetImages';

import Background from './components/Background';
import GameMode from './components/GameModes';
import Settings from './components/Settings/index.js';
import ToggleCheckbox from './components/UI/ToggleCheckbox';

const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [gameOptions, setGameOptions] = useState(null);
  const images = useGetImages(gameOptions);

  console.log(images);

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
          animationON={animation}
          toggleAnimation={handleToggleAnimation}
        />
      </div>
      {animation && <Background />}
      {!gameMode && <GameMode onSelectGameMode={handleSelectGameMode} />}
      {gameMode && <Settings startGame={handleStartGame} gameMode={gameMode} />}
    </div>
  );
};

export default App;
