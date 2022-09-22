import { useState } from 'react';

import Background from './components/Background/Background';
import StartScreen from './components/StartScreen';
import Settings from './components/Settings';
import Board from './components/Board/Board';
import ToggleCheckbox from './components/UI/ToggleCheckbox';

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [gameOptions, setGameOptions] = useState(null);

  const handleStartGame = (options) => {
    setGameOptions(options);
  };

  const handleToggleAnimation = () => {
    setAnimation((prevAnimation) => !prevAnimation);
  };

  const handleRestartGame = () => {
    setGameOptions(null);
  };

  return (
    <main className="main">
      <div className="animation">
        <ToggleCheckbox
          animation={animation}
          toggleAnimation={handleToggleAnimation}
        />
      </div>
      {animation && <Background />}
      {initialLoad && <StartScreen onClick={() => setInitialLoad(false)} />}
      {!initialLoad && !gameOptions && <Settings startGame={handleStartGame} />}
      {!initialLoad && gameOptions && (
        <Board gameOptions={gameOptions} restartGame={handleRestartGame} />
      )}
    </main>
  );
};

export default App;
