import { useState } from 'react';

import useGetImages from './hooks/useGetImages';

import Background from './components/Background';
import GameMode from './components/GameModes';
import Settings from './components/Settings/index.js';
import ToggleCheckbox from './components/ToggleCheckbox';

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
      <ToggleCheckbox
        animationON={animation}
        toggleAnimation={handleToggleAnimation}
      />
      {animation && <Background />}
      <h1>Memory Game</h1>
      {!gameMode && <GameMode onSelectGameMode={handleSelectGameMode} />}
      {gameMode === 'classic' && <Settings startGame={handleStartGame} />}
    </div>
  );
};

export default App;
