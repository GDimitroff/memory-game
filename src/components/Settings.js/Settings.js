import { useState } from 'react';

import { CATEGORIES } from '../../utils/constants';
import RadioBox from '../RadioBox';
import styles from './Settings.module.css';

const Settings = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleChange = (e) => {
    setCategory(e.target.value);
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
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
