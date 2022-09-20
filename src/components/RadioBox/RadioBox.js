import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({ name, selectedCategory, onChange }) => {
  const isChecked = name === selectedCategory;

  return (
    <div>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        id={name}
        value={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
    </div>
  );
};

export default RadioBox;

RadioBox.propTypes = {
  name: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
