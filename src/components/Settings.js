import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CATEGORIES,
  DIFFICULTY,
  INITIAL_CARDS_COUNT,
} from '../utils/constants';
import RadioBox from './UI/RadioBox';
import Counter from './UI/Counter';
import Button from './UI/Button';
import styles from './Settings.module.css';

const Settings = ({ startGame }) => {
  const [gameMode, setGameMode] = useState('classic');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [difficulty, setDifficulty] = useState(DIFFICULTY[0]);
  const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

  const handleStartGameClick = () => {
    startGame({ category, difficulty, cardsCount, gameMode });
  };

  return (
    <section className={styles.settings}>
      <h2>Settings</h2>

      <div className={styles.wrapper}>
        <h4>Game mode:</h4>
        <div className={styles.setting}>
          <p
            className={`${gameMode === 'classic' ? styles.selected : ''}`}
            onClick={() => setGameMode('classic')}>
            classic
          </p>
          <p
            className={`${gameMode === 'modern' ? styles.selected : ''}`}
            onClick={() => setGameMode('modern')}>
            modern
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h4>Category:</h4>
        <div className={styles.setting}>
          {CATEGORIES.map((item) => (
            <RadioBox
              key={item}
              name={item}
              selectedCategory={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          ))}
        </div>
      </div>

      <div className={styles.wrapper}>
        <h4>Amount of cards:</h4>
        <div className={styles.setting}>
          <Counter cardsCount={cardsCount} onClick={setCardsCount} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h4>Difficulty:</h4>
        <div className={styles.setting}>
          {DIFFICULTY.map((item) => (
            <RadioBox
              key={item}
              name={item}
              selectedCategory={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
          ))}
        </div>
      </div>

      <Button text="Start" onClick={handleStartGameClick} />
    </section>
  );
};

export default Settings;

Settings.propTypes = {
  startGame: PropTypes.func.isRequired,
};
