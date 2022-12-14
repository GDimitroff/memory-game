import PropTypes from 'prop-types';

import styles from './ToggleCheckbox.module.css';

const ToggleCheckbox = ({ animation, toggleAnimation }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input type="checkbox" checked={animation} onChange={toggleAnimation} />
        <span className={styles.slider}></span>
      </label>
      <p>Animate</p>
    </div>
  );
};

export default ToggleCheckbox;

ToggleCheckbox.propTypes = {
  animation: PropTypes.bool.isRequired,
  toggleAnimation: PropTypes.func.isRequired,
};
