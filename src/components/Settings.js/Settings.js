import { useState } from 'react';

import { CATEGORIES, PACE, INITIAL_CARDS_COUNT } from '../../utils/constants';

import RadioBox from '../RadioBox';
import Counter from '../Counter';
import styles from './Settings.module.css';

const Settings = ({ startGame }) => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [pace, setPace] = useState(PACE[0]);
  const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

  const handleStartGameClick = () => {
    startGame({ category, pace, cardsCount });
  };

  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
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

      <h4>Amount of cards:</h4>
      <div className={styles.setting}>
        <Counter cardsCount={cardsCount} onClick={setCardsCount} />
      </div>

      <h4>Pace:</h4>
      <div className={styles.setting}>
        {PACE.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedCategory={pace}
            onChange={(e) => setPace(e.target.value)}
          />
        ))}
      </div>

      <button className={styles.button} onClick={handleStartGameClick}>
        Start
      </button>
    </div>
  );
};

export default Settings;
