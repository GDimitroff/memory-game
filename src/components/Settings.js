import { useState } from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES, INITIAL_CARDS_COUNT } from '../utils/constants';
import RadioBox from './UI/RadioBox';
import Counter from './UI/Counter';
import Button from './UI/Button';
import styles from './Settings.module.css';

const Settings = ({ startGame }) => {
  const [mode, setMode] = useState('standard');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

  const handleStartGameClick = () => {
    startGame({ category, cardsCount, mode });
  };

  return (
    <section className={styles.settings}>
      <h2>Settings</h2>

      <div className={styles.wrapper}>
        <h4>Game mode:</h4>
        <div className={styles.setting}>
          <p
            className={`${mode === 'standard' ? styles.selected : ''}`}
            onClick={() => setMode('standard')}>
            standard
          </p>
          <p
            className={`${mode === 'alternate' ? styles.selected : ''}`}
            onClick={() => setMode('alternate')}>
            alternate
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

      {mode === 'standard' && (
        <div className={styles.wrapper}>
          <h4>Amount of cards:</h4>
          <div className={styles.setting}>
            <Counter cardsCount={cardsCount} onClick={setCardsCount} />
          </div>
        </div>
      )}

      <Button text="Start" onClick={handleStartGameClick} />
    </section>
  );
};

export default Settings;

Settings.propTypes = {
  startGame: PropTypes.func.isRequired,
};
