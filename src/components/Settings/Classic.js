import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CATEGORIES,
  DIFFICULTY,
  INITIAL_CARDS_COUNT,
} from '../../utils/constants';
import Setting from './Setting';
import RadioBox from '../UI/RadioBox';
import Counter from './Counter';
import Button from '../UI/Button';

const Classic = ({ startGame }) => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [difficulty, setDifficulty] = useState(DIFFICULTY[0]);
  const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

  const handleStartGameClick = () => {
    startGame({ category, difficulty, cardsCount });
  };

  return (
    <>
      <h1>Settings</h1>
      <Setting title={'Category:'}>
        {CATEGORIES.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedCategory={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </Setting>

      <Setting title={'Amount of cards:'}>
        <Counter cardsCount={cardsCount} onClick={setCardsCount} />
      </Setting>

      <Setting title={'Difficulty:'}>
        {DIFFICULTY.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedCategory={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
        ))}
      </Setting>

      <Button text="Start" onClick={handleStartGameClick} />
    </>
  );
};

export default Classic;

Classic.propTypes = {
  startGame: PropTypes.func.isRequired,
};
