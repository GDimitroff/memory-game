import useGetImages from './hooks/useGetImages';

import Background from './components/Background';
import Settings from './components/Settings.js';

const App = () => {
  const images = useGetImages();

  console.log(images);

  const handleStartGame = (options) => {
    console.log(options);
  };

  return (
    <div>
      <Background />
      <h1>Memory Game</h1>
      <Settings startGame={handleStartGame} />
    </div>
  );
};

export default App;
